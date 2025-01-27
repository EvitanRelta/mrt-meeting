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

        const width = 800
        const height = 600
        const padding = 50

        // Set up SVG with viewBox for responsive scaling
        const svg = d3
            .select(svgRef.current)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${width} ${height}`)

        // Create main group for zoomable content
        const g = svg.append('g')

        // Create scales with original domain
        const xScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([padding, width - padding])

        const yScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([height - padding, padding])

        // Create node lookup object
        const nodeLookup: Record<string, StationNode> = {}
        graph.nodes.forEach((node) => {
            nodeLookup[node.id] = node
        })

        // Create links with actual node references
        const links = graph.links.map((link) => ({
            source: nodeLookup[link.source],
            target: nodeLookup[link.target],
        }))

        // Create links inside the zoomable group
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

        // Line color mapping
        const lineColors: Record<string, string> = {
            NS: '#D42E12', // Red
            EW: '#009645', // Green
            NE: '#9900AA', // Purple
            CC: '#FAE100', // Yellow
            DT: '#005EC4', // Blue
            BP: '#0099AA', // Light Blue
            TE: '#9D5B25', // Brown
        }

        // Create nodes inside the zoomable group
        const nodeGroup = g
            .append('g')
            .selectAll('g')
            .data(graph.nodes)
            .enter()
            .append('g')
            .attr('transform', (d) => `translate(${xScale(d.x!)},${yScale(d.y!)})`)

        // Create arcs for interchange nodes
        const arc = d3.arc<d3.PieArcDatum<string>>().innerRadius(0).outerRadius(8).padAngle(0.02)

        nodeGroup.each(function (d) {
            const node = d3.select(this)
            if (d.isInterchange) {
                const pie = d3.pie<string>().value(1).sort(null)
                const arcs = pie(d.codes)

                node.selectAll('path')
                    .data(arcs)
                    .enter()
                    .append('path')
                    .attr('d', (d) => arc(d))
                    .attr('fill', (arcData) => {
                        const prefix = arcData.data.match(/^[A-Z]+/)?.[0]
                        return (prefix && lineColors[prefix]) || '#CCCCCC'
                    })
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)
            } else {
                node.append('circle')
                    .attr('r', 8)
                    .attr('fill', getStationColor(d.id))
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)
            }
        })

        // Add labels inside the zoomable group
        const label = g
            .append('g')
            .selectAll('text')
            .data(graph.nodes)
            .enter()
            .append('text')
            .text((d) => d.name)
            .attr('font-size', 12)
            .attr('font-family', 'sans-serif')
            .attr('dx', 12)
            .attr('dy', 5)
            .attr('x', (d) => xScale(d.x!))
            .attr('y', (d) => yScale(d.y!))

        // Configure zoom behavior
        const zoom = d3
            .zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.5, 8])
            .on('zoom', (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
                g.attr('transform', event.transform)
            })

        svg.call(zoom).call(zoom.transform, d3.zoomIdentity)

        // Helper function for station colors
        function getStationColor(stationCode: string): string {
            if (stationCode.includes('/')) {
                return '#CCCCCC'
            }
            const prefix = stationCode.match(/^[A-Z]+/)?.[0]
            return (prefix && lineColors[prefix]) || '#CCCCCC'
        }
    }, [graph])

    return <svg ref={svgRef} />
}
