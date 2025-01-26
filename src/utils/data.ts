type StationNode = {
    id: string
    name: string
    codes: string[]
    isInterchange: boolean
    color: string
    x?: number
    y?: number
}

type StationLink = {
    source: string
    target: string
}

type StationGraph = {
    nodes: StationNode[]
    links: StationLink[]
}

export type { StationGraph, StationLink, StationNode }
