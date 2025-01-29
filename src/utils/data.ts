export type StationNode = {
    id: string
    name: string
    codes: string[]
    isInterchange: boolean
    color: string
    x?: number
    y?: number
}

export type StationLink = {
    source: string
    target: string
}

export type StationGraph = {
    nodes: StationNode[]
    links: StationLink[]
}
