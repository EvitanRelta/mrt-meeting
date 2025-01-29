export interface MapPositions {
    [stationCode: string]: { x: number; y: number }
}

export interface MrtStationData {
    [stationCode: string]: {
        name: string
        connections: {
            [targetStationCode: string]: {
                time: number
            }
        }
    }
}
