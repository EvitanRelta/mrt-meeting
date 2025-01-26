import { atom } from 'jotai'
import type { StationGraph } from '../utils/data'

export const rawStationDataAtom = atom<Record<string, any>>({})

export const stationGraphAtom = atom<StationGraph>({
    nodes: [],
    links: [],
})

export const simulationReadyAtom = atom<boolean>(false)
