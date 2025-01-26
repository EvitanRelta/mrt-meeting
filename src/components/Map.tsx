import * as d3 from 'd3'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import type { StationNode } from '../utils/data'
import { simulationReadyAtom, stationGraphAtom } from './store'

export const Map = () => {
    const [graph] = useAtom(stationGraphAtom)
    const [simulationReady] = useAtom(simulationReadyAtom)
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (!simulationReady || !svgRef.current) return

        const svg = d3.select(svgRef.current)
        const width = 800
        const height = 600

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

        const simulation = d3
            .forceSimulation<StationNode>()
            .force('charge', d3.forceManyBody().strength(-100))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force(
                'link',
                d3
                    .forceLink<StationNode, (typeof links)[number]>()
                    .id((d) => d.id)
                    .distance(100)
            )

        // Create links
        const link = svg
            .append('g')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke', '#cccccc')
            .attr('stroke-width', 1)

        // Create nodes
        const node = svg
            .append('g')
            .selectAll('circle')
            .data(graph.nodes)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', (d) => d.color)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)

        // Add labels
        const label = svg
            .append('g')
            .selectAll('text')
            .data(graph.nodes)
            .enter()
            .append('text')
            .text((d) => d.name)
            .attr('font-size', 10)
            .attr('font-family', 'sans-serif')
            .attr('dx', 10)
            .attr('dy', 4)

        // Update positions on tick
        simulation.nodes(graph.nodes).on('tick', () => {
            link.attr('x1', (d) => d.source.x!)
                .attr('y1', (d) => d.source.y!)
                .attr('x2', (d) => d.target.x!)
                .attr('y2', (d) => d.target.y!)

            node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!)

            label.attr('x', (d) => d.x!).attr('y', (d) => d.y!)
        })

        simulation.force<d3.ForceLink<StationNode, (typeof links)[number]>>('link')?.links(links)

        return () => {
            simulation.stop()
        }
    }, [graph, simulationReady])

    return <svg ref={svgRef} />
}
