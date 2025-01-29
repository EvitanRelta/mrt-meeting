import type { D3ZoomEvent } from 'd3'
import * as d3 from 'd3'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import type { StationNode } from '../utils/data'
import { stationGraphAtom } from './store'

export const Map = () => {
    const [graph] = useAtom(stationGraphAtom)
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (!svgRef.current) return

        const svg = d3.select(svgRef.current)
        // Clear existing SVG content
        svg.selectAll('*').remove()

        const width = 800
        const height = 600
        const padding = 50
        const fontSize = 10

        svg.attr('width', '100%').attr('height', '100%').attr('viewBox', `0 0 ${width} ${height}`)

        const g = svg.append('g')

        const xScale = d3
            .scaleLinear()
            .domain([0, 1000])
            .range([padding, width - padding])

        const yScale = d3
            .scaleLinear()
            .domain([0, 1000])
            .range([height - padding, padding])

        const nodeLookup: Record<string, StationNode> = {}
        graph.nodes.forEach((node) => {
            nodeLookup[node.id] = node
        })

        const links = graph.links.map((link) => ({
            source: nodeLookup[link.source],
            target: nodeLookup[link.target],
        }))

        const link = g
            .append('g')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke', '#cccccc')
            .attr('stroke-width', 1)
            .attr('x1', (d) => xScale(d.source.x!))
            .attr('y1', (d) => yScale(d.source.y!))
            .attr('x2', (d) => xScale(d.target.x!))
            .attr('y2', (d) => yScale(d.target.y!))

        const lineColors: Record<string, string> = {
            NS: '#D42E12',
            EW: '#009645',
            NE: '#9900AA',
            CC: '#FAE100',
            DT: '#005EC4',
            BP: '#0099AA',
            TE: '#9D5B25',
        }

        const nodeGroup = g
            .append('g')
            .selectAll('g')
            .data(graph.nodes)
            .enter()
            .append('g')
            .attr('transform', (d) => `translate(${xScale(d.x!)},${yScale(d.y!)})`)

        nodeGroup.each(function (d) {
            const node = d3.select(this)
            if (d.isInterchange) {
                const pie = d3.pie<string>().value(1).sort(null)
                const arcs = pie(d.codes)

                node.selectAll('path')
                    .data(arcs)
                    .enter()
                    .append('path')
                    .attr('fill', (arcData) => {
                        const prefix = arcData.data.match(/^[A-Z]+/)?.[0]
                        return (prefix && lineColors[prefix]) || '#CCCCCC'
                    })
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)
            } else {
                node.append('circle')
                    .attr('fill', getStationColor(d.id))
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)
                    .attr('r', 8)
            }
        })

        const label = g
            .append('g')
            .selectAll('text')
            .data(graph.nodes)
            .enter()
            .append('text')
            .text((d) => d.name)
            .attr('font-size', fontSize)
            .attr('font-family', 'sans-serif')
            .attr('dx', 12)
            .attr('dy', fontSize / 2)
            .attr('x', (d) => xScale(d.x!))
            .attr('y', (d) => yScale(d.y!))

        const zoom = d3
            .zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.5, 12])
            .on('zoom', (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
                const { transform } = event
                const k = transform.k
                g.attr('transform', transform.toString())

                // Adjust link stroke widths
                link.attr('stroke-width', 1 / k)

                // Update node sizes and strokes
                nodeGroup.each(function (d) {
                    const node = d3.select(this)
                    if (d.isInterchange) {
                        const arc = d3
                            .arc<d3.PieArcDatum<string>>()
                            .innerRadius(0)
                            .outerRadius(Math.max(3 / k, Math.min(2 * k, 10 / k)))
                            .padAngle(0.02)
                        node.selectAll('path')
                            .attr('d', (d) => arc(d as d3.PieArcDatum<string>))
                            .attr('stroke-width', 2 / k)
                    } else {
                        node.select('circle')
                            .attr('r', Math.max(3 / k, Math.min(2 * k, 10 / k)))
                            .attr('stroke-width', 2 / k)
                    }
                })

                // Adjust label sizes and offsets
                label
                    .attr('font-size', fontSize / k)
                    .attr('dx', 12 / k)
                    .attr('dy', fontSize / (2 * k))

                // Toggle label visibility based on zoom level
                if (k < 2) {
                    label.attr('visibility', 'hidden')
                } else {
                    label.attr('visibility', 'visible')
                }
            })

        svg.call(zoom).call(zoom.transform, d3.zoomIdentity)

        function getStationColor(stationCode: string): string {
            if (stationCode.includes('/')) return '#CCCCCC'
            const prefix = stationCode.match(/^[A-Z]+/)?.[0]
            return (prefix && lineColors[prefix]) || '#CCCCCC'
        }
    }, [graph])

    return <svg ref={svgRef} />
}
