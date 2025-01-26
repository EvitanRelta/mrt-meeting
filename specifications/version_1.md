# Version 1 Plan - Static MRT Map Foundation with Jotai

## Project Overview

**Objective**: Render a basic Singapore MRT network schematic using D3.js with Jotai-managed station data.  
**Deliverables**:

- Non-interactive visualization of stations and connections
- Centralized state management for station data
- Automatic node positioning via D3 force simulation
- Color-coded stations by line affiliation (gray for interchange stations)

## Data Files & Types

### `src/data/mrtData.json`

```typescript
{
  [stationKey: string]: {
    name: string,
    connections: { [targetStationKey: string]: { time: number } }
  }
}
```

### `src/utils/data.ts`

```typescript
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
```

## State Management (Jotai)

### `src/components/store.ts`

```typescript
import { atom } from 'jotai'

/**
 * Contains raw station data from JSON
 */
export const rawStationDataAtom = atom<Record<string, any>>({})

/**
 * Holds processed graph structure with nodes/links
 */
export const stationGraphAtom = atom<StationGraph>({
    nodes: [],
    links: [],
})

/**
 * Tracks D3 simulation initialization status
 */
export const simulationReadyAtom = atom<boolean>(false)
```

## Component Structure

### `Map.tsx` (D3 Visualization)

**Responsibilities**:

- Consume Jotai state for graph data
- Manage D3 force simulation lifecycle
- Render SVG elements based on state
- Maintain simulation coordinates in Jotai

**Props**: None  
**Jotai Dependencies**:

- `stationGraphAtom` for nodes/links data
- `simulationReadyAtom` for load status

### `DataLoader.tsx` (Data Initialization)

**Responsibilities**:

- Load JSON data on mount
- Process raw data into graph structure
- Update Jotai atoms with processed data

**Jotai Interactions**:

- Sets `rawStationDataAtom` and `stationGraphAtom`
- Updates `simulationReadyAtom` when complete

## Implementation Steps

1. **State Setup**:

    - Create Jotai atoms for data management
    - Initialize empty state in store.ts

2. **Data Loading**:

    - Create DataLoader component to fetch mrtData.json
    - Process raw data into StationNode/StationLink structures
    - Update stationGraphAtom with processed data

3. **Color Assignment**:

    ```typescript
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
    ```

4. **D3 Integration**:

    - Initialize force simulation when stationGraphAtom updates
    - Store node positions in StationNode x/y properties
    - Sync simulation status via simulationReadyAtom

5. **Rendering Logic**:
    - Draw SVG elements using data from stationGraphAtom
    - Update node positions on simulation tick
    - Apply color scheme based on StationNode properties

## Visualization Requirements

| Element          | Style Rules                        |
| ---------------- | ---------------------------------- |
| Station Node     | Radius: 5px, Stroke: 1px white     |
| Connection Line  | Stroke: #cccccc, 1px width         |
| Interchange Node | Fill: #777777                      |
| Labels           | 10px sans-serif, offset from nodes |

## Development Setup

Install required packages:

```bash
npm install d3 @types/d3 jotai
```

## Expected Behavior

1. DataLoader initializes and processes MRT data on mount
2. Jotai atoms update with graph structure
3. Map component auto-updates when atoms change
4. D3 simulation runs with Jotai-managed data
5. Nodes settle into force-directed layout
6. Color coding reflects line affiliations
