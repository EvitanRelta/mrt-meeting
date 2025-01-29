export interface Position {
    x: number
    y: number
}

export type MapPositions = Record<string, Position>

export interface StationConnection {
    time: number
}

export interface MrtStationData {
    [stationId: string]: {
        name: string
        connections: {
            [targetStationId: string]: StationConnection
        }
    }
}
