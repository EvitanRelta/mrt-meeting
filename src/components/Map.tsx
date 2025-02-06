import { CreateNodePiechartProgramOptions, createNodePiechartProgram } from '@sigma/node-piechart'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import Sigma from 'sigma'
import { DEFAULT_NODE_PROGRAM_CLASSES } from 'sigma/settings'
import type { MrtStationData } from '../data/types'
import { rawStationDataAtom, selectedStationsAtom, stationGraphAtom } from './store'

const getStationsInLine = (linePrefix: string, stationData: MrtStationData): Set<string> =>
    new Set(
        Object.keys(stationData).filter((code) =>
            code.split('/').some((part) => part.startsWith(linePrefix))
        )
    )

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

        const nodeProgramClasses = { ...DEFAULT_NODE_PROGRAM_CLASSES }

        for (let i = 2; i <= 4; i++) {
            const slices: CreateNodePiechartProgramOptions['slices'] = [
                { color: { attribute: 'color' }, value: { value: 1 } },
            ]
            for (let j = 1; j < i; j++)
                slices.push({ color: { attribute: `color-${j}` }, value: { value: 1 } })
            nodeProgramClasses[`pie-${i}`] = createNodePiechartProgram({ slices })
        }

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
            nodeProgramClasses,
            nodeReducer: (node, data) => {
                const colors = data.colors as string[]
                const res = { ...data }

                if (colors.length <= 1) {
                    res.type = 'circle'
                    res.color = colors[0]
                } else {
                    res.type = `pie-${colors.length}`
                    res.color = colors[0]
                    for (let i = 1; i < colors.length; i++) res[`color-${i}`] = colors[i]
                }

                if (
                    hoverState.hoveredLineStations &&
                    !hoverState.hoveredLineStations.has(node) &&
                    hoverState.hoveredNode !== node
                ) {
                    res.color = '#f6f6f6'
                    if (colors.length > 1)
                        for (let i = 1; i < colors.length; i++) res[`color-${i}`] = '#f6f6f6'
                }

                return res
            },
        })

        sigmaRef.current.on('clickNode', (event: { node: string }) =>
            setSelectedStations((prev) => {
                const next = new Set(prev)
                next.has(event.node) ? next.delete(event.node) : next.add(event.node)
                return next
            })
        )

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
            const colors = data.colors as string[]
            const res = { ...data }

            if (colors.length <= 1) {
                res.type = 'circle'
                res.color = colors[0]
            } else {
                res.type = `pie-${colors.length}`
                res.color = colors[0]
                for (let i = 1; i < colors.length; i++) res[`color-${i}`] = colors[i]
            }

            if (
                hoverState.hoveredLineStations &&
                !hoverState.hoveredLineStations.has(node) &&
                hoverState.hoveredNode !== node
            ) {
                res.color = '#f6f6f6'
                if (colors.length > 1)
                    for (let i = 1; i < colors.length; i++) res[`color-${i}`] = '#f6f6f6'
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
                )
                    res.color = '#f6f6f6'
            }
            return res
        })

        sigmaRef.current.refresh()
    }, [hoverState, graph])

    return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />
}
