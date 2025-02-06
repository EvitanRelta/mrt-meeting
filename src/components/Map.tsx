import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import Sigma from 'sigma'
import type { MrtStationData } from '../data/types'
import { rawStationDataAtom, selectedStationsAtom, stationGraphAtom } from './store'

const getStationsInLine = (linePrefix: string, stationData: MrtStationData): Set<string> => {
    return new Set(
        Object.keys(stationData).filter((code) =>
            code.split('/').some((part) => part.startsWith(linePrefix))
        )
    )
}

export const Map = () => {
    const [graph] = useAtom(stationGraphAtom)
    const [selectedStations, setSelectedStations] = useAtom(selectedStationsAtom)
    const [rawData] = useAtom(rawStationDataAtom)
    const containerRef = useRef<HTMLDivElement>(null)
    const sigmaRef = useRef<Sigma | null>(null)
    const hoverTimeoutRef = useRef<number | null>(null)

    type HoverState = {
        hoveredNode?: string
        hoveredLineStations?: Set<string>
    }

    const [hoverState, setHoverState] = useState<HoverState>({})

    useEffect(() => {
        if (!containerRef.current) return

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

        sigmaRef.current.on('clickNode', (event: { node: string }) => {
            setSelectedStations((prev) => {
                const next = new Set(prev)
                next.has(event.node) ? next.delete(event.node) : next.add(event.node)
                return next
            })
        })

        sigmaRef.current.on('enterNode', (event: { node: string }) => {
            if (hoverTimeoutRef.current !== null) window.clearTimeout(hoverTimeoutRef.current)

            // Highlight same-line stations only after 0.5s delay
            hoverTimeoutRef.current = window.setTimeout(() => {
                const stationCodes = event.node.split('/')
                const lineStations = new Set<string>()

                stationCodes.forEach((code) => {
                    const linePrefix = code.match(/^[A-Z]+/)?.[0]
                    if (linePrefix)
                        getStationsInLine(linePrefix, rawData).forEach((station) =>
                            lineStations.add(station)
                        )
                })

                setHoverState({
                    hoveredNode: event.node,
                    hoveredLineStations: lineStations,
                })
            }, 500)
        })

        sigmaRef.current.on('leaveNode', () => {
            if (hoverTimeoutRef.current !== null) {
                window.clearTimeout(hoverTimeoutRef.current)
                hoverTimeoutRef.current = null
            }
            setHoverState({})
        })

        return () => {
            if (hoverTimeoutRef.current !== null) window.clearTimeout(hoverTimeoutRef.current)

            if (sigmaRef.current) {
                sigmaRef.current.kill()
                sigmaRef.current = null
            }
        }
    }, [graph])

    // Update node rendering when the selected stations changes
    useEffect(() => {
        if (!sigmaRef.current) return
        graph.forEachNode((nodeId: string) => {
            graph.updateNodeAttributes(nodeId, (attr) => ({
                ...attr,
                highlighted: selectedStations.has(nodeId),
            }))
        })
    }, [selectedStations, graph])

    useEffect(() => {
        if (!sigmaRef.current) return

        sigmaRef.current.setSetting('nodeReducer', (node: string, data: any) => {
            const res = { ...data }
            if (
                hoverState.hoveredLineStations &&
                !hoverState.hoveredLineStations.has(node) &&
                hoverState.hoveredNode !== node
            ) {
                res.color = '#f6f6f6'
            }
            return res
        })

        sigmaRef.current.setSetting('edgeReducer', (edge: string, data: any) => {
            const res = { ...data }
            if (hoverState.hoveredLineStations) {
                const [source, target] = graph.extremities(edge)
                if (
                    !hoverState.hoveredLineStations.has(source) ||
                    !hoverState.hoveredLineStations.has(target)
                ) {
                    res.color = '#f6f6f6'
                }
            }
            return res
        })

        sigmaRef.current.refresh()
    }, [hoverState, graph])

    return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />
}
