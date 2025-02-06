import Graph from 'graphology'
import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'
import mapPositionsDataJSON from '../data/mapPositions.json'
import mrtDataJSON from '../data/mrtData.json'
import type { MapPositions, MrtStationData } from '../data/types'

const mapPositionsData = mapPositionsDataJSON as MapPositions
const mrtData = mrtDataJSON as MrtStationData

const getStationColor = (stationCode: string) => {
    if (stationCode.includes('/')) return '#CCCCCC'
    const prefix = stationCode.match(/^[A-Z]+/)?.[0]
    const lineColors: Record<string, string> = {
        NS: '#D42E12',
        EW: '#009645',
        NE: '#9900AA',
        CC: '#FAE100',
        DT: '#005EC4',
        BP: '#0099AA',
        TE: '#9D5B25',
    }
    return (prefix && lineColors[prefix]) || '#CCCCCC'
}

export const rawStationDataAtom = atom<MrtStationData>(mrtData)

export const selectedStationsAtom = atomWithReset<Set<string>>(new Set())

export const stationGraphAtom = atom<Graph>((get) => {
    const rawData = get(rawStationDataAtom)
    const graph = new Graph()

    // Add nodes
    Object.entries(rawData).forEach(([id, station]) => {
        const position = mapPositionsData[id]
        graph.addNode(id, {
            label: station.name,
            x: position.x * 1.5,
            y: position.y,
            size: 10,
            color: getStationColor(id),
            isInterchange: id.includes('/'),
            codes: id.split('/'),
            hidden: false,
        })
    })

    // Add edges
    Object.entries(rawData).forEach(([sourceId, station]) => {
        Object.keys(station.connections).forEach((targetId) => {
            if (!graph.hasEdge(sourceId, targetId)) {
                graph.addEdge(sourceId, targetId, {
                    size: 2,
                    color: '#cccccc',
                })
            }
        })
    })

    return graph
})
