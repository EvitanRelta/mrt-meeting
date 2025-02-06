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
            nodeReducer: (node, data) => {
                const isSelected = selectedStations.has(node)
                return {
                    ...data,
                    highlighted: isSelected,
                }
            },
        })

        // Add click handler
        sigmaRef.current.on('clickNode', ({ node }) => {
            setSelectedStations((prev) => {
                const next = new Set(prev)
                next.has(node) ? next.delete(node) : next.add(node)
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
        if (sigmaRef.current) {
            sigmaRef.current.refresh()
        }
    }, [selectedStations])

    return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />
}
