import { atom } from 'jotai'
import mapPositionsData from '../data/mapPositions.json'
import mrtData from '../data/mrtData.json'
import type { StationGraph } from '../utils/data'

interface Position {
    x: number
    y: number
}

const getLineColor = (code: string): string => {
    const prefix = code.substring(0, 2)
    return (
        {
            NS: '#d2412d',
            EW: '#009944',
            CG: '#f68b1e',
            CE: '#fddb00',
        }[prefix] || '#777777'
    )
}

export const rawStationDataAtom = atom(mrtData)

export const stationGraphAtom = atom<StationGraph>((get) => {
    const rawData = get(rawStationDataAtom)
    const mapPositions: Record<string, Position> = mapPositionsData

    const nodes = Object.entries(rawData).map(([id, station]) => ({
        id,
        name: station.name,
        codes: id.split('/'),
        isInterchange: id.includes('/'),
        color: id.includes('/') ? '#777777' : getLineColor(id),
        x: mapPositions[id]?.x,
        y: mapPositions[id]?.y,
    }))

    const links = Object.entries(rawData).flatMap(([id, station]) =>
        Object.keys(station.connections).map((targetId) => ({
            source: id,
            target: targetId,
        }))
    )

    return { nodes, links }
})
