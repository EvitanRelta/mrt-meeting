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
        const width = 800
        const height = 600
        const padding = 50

        // Create scales with padding
        const xScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([padding, width - padding])

        const yScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([height - padding, padding])

        svg.attr('width', width).attr('height', height)

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

        // Create links
        const link = svg
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

        // Function to get station color
        const getStationColor = (stationCode: string) => {
            if (stationCode.includes('/')) {
                return '#CCCCCC' // Gray for combined stations
            }
            const prefix = stationCode.match(/^[A-Z]+/)?.[0]
            return (prefix && lineColors[prefix]) || '#CCCCCC'
        }

        // Create nodes
        const node = svg
            .append('g')
            .selectAll('circle')
            .data(graph.nodes)
            .enter()
            .append('circle')
            .attr('r', 8)
            .attr('fill', (d) => getStationColor(d.id))
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .attr('cx', (d) => xScale(d.x!))
            .attr('cy', (d) => yScale(d.y!))

        // Add labels
        const label = svg
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
    }, [graph])

    return <svg ref={svgRef} />
}
