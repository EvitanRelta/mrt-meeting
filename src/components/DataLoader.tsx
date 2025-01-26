import { useAtom } from 'jotai'
import { useEffect } from 'react'
import mrtData from '../data/mrtData.json'
import type { StationLink, StationNode } from '../utils/data'
import { rawStationDataAtom, simulationReadyAtom, stationGraphAtom } from './store'

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
    const [, setSimulationReady] = useAtom(simulationReadyAtom)

    useEffect(() => {
        const nodes: StationNode[] = []
        const links: StationLink[] = []

        // Process raw data into graph structure
        Object.entries(mrtData).forEach(([id, station]) => {
            const codes = [id]
            const isInterchange = Object.keys(station.connections).length > 1

            nodes.push({
                id,
                name: station.name,
                codes,
                isInterchange,
                color: isInterchange ? '#777777' : getLineColor(id),
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
        setSimulationReady(true)
    }, [setRawData, setGraph, setSimulationReady])

    return null
}
