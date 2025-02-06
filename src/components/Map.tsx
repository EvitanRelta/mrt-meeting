import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import Sigma from 'sigma'
import { selectedStationsAtom, stationGraphAtom } from './store'

export const Map = () => {
    const [graph] = useAtom(stationGraphAtom)
    const [selectedStations, setSelectedStations] = useAtom(selectedStationsAtom)
    const containerRef = useRef<HTMLDivElement>(null)
    const sigmaRef = useRef<Sigma | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Initialize Sigma
        sigmaRef.current = new Sigma(graph, containerRef.current, {
            minCameraRatio: 0.1,
            maxCameraRatio: 2,
            labelRenderedSizeThreshold: 2,
            renderLabels: true,
            labelSize: 12,
            labelFont: 'sans-serif',
            labelWeight: '400',
            defaultNodeColor: '#999',
            defaultEdgeColor: '#cccccc',
        })

        // Add click handler
        sigmaRef.current.on('clickNode', (event: { node: string }) => {
            setSelectedStations((prev) => {
                const next = new Set(prev)
                next.has(event.node) ? next.delete(event.node) : next.add(event.node)
                return next
            })
        })

        // Cleanup
        return () => {
            if (sigmaRef.current) {
                sigmaRef.current.kill()
                sigmaRef.current = null
            }
        }
    }, [graph])

    // Update node rendering when selection changes
    useEffect(() => {
        if (!sigmaRef.current) return

        // Update all nodes' highlighted state
        graph.forEachNode((nodeId: string) => {
            graph.updateNodeAttributes(nodeId, (attr) => ({
                ...attr,
                highlighted: selectedStations.has(nodeId),
            }))
        })
    }, [selectedStations, graph])

    return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />
}
