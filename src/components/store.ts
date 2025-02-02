import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'
import mapPositionsData from '../data/mapPositions.json'
import mrtData from '../data/mrtData.json'
import type { MapPositions, MrtStationData } from '../data/types'
import type { StationGraph } from '../utils/data'

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

export const rawStationDataAtom = atom<MrtStationData>(mrtData)

export const selectedStationsAtom = atomWithReset<Set<string>>(new Set())

export const stationGraphAtom = atom<StationGraph>((get) => {
    const rawData = get(rawStationDataAtom)
    const mapPositions: MapPositions = mapPositionsData

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
            time: station.connections[targetId].time,
        }))
    )

    return { nodes, links }
})
