import { useAtom } from 'jotai'
import { useEffect } from 'react'
import mapPositionsData from '../data/mapPositions.json'
import mrtData from '../data/mrtData.json'
import type { StationLink, StationNode } from '../utils/data'
import { rawStationDataAtom, stationGraphAtom } from './store'

interface Position {
    x: number
    y: number
}

const mapPositions: Record<string, Position> = mapPositionsData

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

export const DataLoader = () => {
    const [, setRawData] = useAtom(rawStationDataAtom)
    const [, setGraph] = useAtom(stationGraphAtom)

    useEffect(() => {
        const nodes: StationNode[] = []
        const links: StationLink[] = []

        // Process raw data into graph structure
        Object.entries(mrtData).forEach(([id, station]) => {
            const codes = id.split('/')
            const isInterchange = codes.length > 1
            const position = mapPositions[id]

            nodes.push({
                id,
                name: station.name,
                codes,
                isInterchange,
                color: isInterchange ? '#777777' : getLineColor(id),
                x: position?.x,
                y: position?.y,
            })

            Object.entries(station.connections).forEach(([targetId]) => {
                links.push({
                    source: id,
                    target: targetId,
                })
            })
        })

        setRawData(mrtData)
        setGraph({ nodes, links })
    }, [setRawData, setGraph])

    return null
}
