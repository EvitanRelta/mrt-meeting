# Project Overview

The Singapore MRT Meeting Point Planner is an interactive web application designed to simplify group meetups by algorithmically determining optimal midpoint stations. This tool combines public transit data with graph theory to visualize and calculate the most convenient meeting locations based on participants' starting stations. Users interact with a schematic MRT map to select starting points either through clickable station nodes or an autocomplete-enabled search field. The system then computes and visually ranks stations using a heatmap-like opacity scale, where higher opacity indicates better suitability as a midpoint meeting location.

Built with:

- Vite/TypeScript for core functionality
- MUI for UI components
- D3.js for map rendering
- Jotai for state management

# MVP Project Plan - Singapore MRT Meeting Point Planner

## Core MVP Features

- **Basic Interactive Map**: Station nodes with line colors (gray for interchanges), clickable selection
- **Essential Input System**: Text input with station suggestions, selected stations list with removal
- **Minimum Viable Calculation**: Dijkstra's algorithm for shortest paths, sum-of-squares scoring
- **Heatmap Visualization**: Dynamic node opacity (0.2-1.0) based on meeting point suitability
- **Immediate Feedback**: Real-time updates on selection changes

## Directory Structure

```
src/
  components/
    Map.tsx - Main D3 visualization wrapper
    StationInput.tsx - Search input + selections list
    store.ts - Jotai state management
  utils/
    algorithms.ts - Graph traversal + scoring logic
    data.ts - Data loading + TypeScript types
  data/
    mrtData.json - Station metadata, connecting stations, travel times between stations
    mapPositions.json - X, Y position of each stations on the displayed map
  App.tsx - Root component
  main.tsx - Entry point
```

## Iterative Development Phases

### Version 0: Vite Typescript initialization

**Features**:

- Initialize repo using Vite Typescript

### Version 1: Static Map Foundation

**Objective**: Render basic MRT network from JSON data  
**Deliverable**: Non-interactive but complete Singapore MRT map  
**New data given**: `mrtData.json` - Station metadata, connecting stations, travel times between stations  
**Features**:

- Load and parse JSON station data
- Render stations at at non fixed locations, and allow the D3 nodes to move.
- Draw connection lines between stations
- Color nodes by MRT-line affiliation based on the station code prefix (eg. `CC13` and `CE1` belongs circle line and should be colored yellow) (gray for interchanges which have multiple station codes)

### Version 2: Fixing station node positions

**Objective**: Fix location of MRT station nodes based on JSON data   
**Deliverable**: Same as version 1 but station nodes are in fixed positions  
**New data given**: `mapPositions.json` - X, Y position of each stations on the displayed map. Used for visually positioning the nodes on the map.  
**Features**:

- Fix D3 node positions based on X, Y coordinates in `mapPositions.json`.

### Version 3: Selection Mechanism

**Objective**: Enable station selection through UI  
**Deliverable**: Users can select/deselect stations  
**Features**:

- Clickable station nodes with visual feedback
- Text input for manual station entry
- Selected stations list with removal buttons
- Basic state management for selections

### Version 4: Core Algorithm Implementation

**Objective**: Calculate optimal meeting points  
**Deliverable**: Heatmap visualization on ≥2 selections  
**Features**:

- Dijkstra's algorithm for shortest paths
- Score calculation (sum of squared travel times)
- Opacity mapping based on relative scores
- Immediate computation on selection changes

### Version 5: Visualization Polish

**Objective**: Improve map readability and usability  
**Deliverable**: Coherent visual presentation  
**Features**:

- Dynamic opacity scaling (0.2-1.0 range)
- Line-specific color scheme implementation
- Station hover tooltips with names
- Connection line styling improvements

## Key Technical Considerations

1. **D3-React Integration**: Use D3 for calculations while letting React manage DOM updates
2. **State Management**: Jotai store for selected stations and computed scores
3. **Data Structure**: Preprocess JSON into efficient graph representation
4. **Performance**: Accept computation delays for MVP (optimize post-launch)
5. **Edge Cases**: Handle stations with identical names, disconnected nodes

## Post-MVP Considerations

- Mobile responsiveness
- Journey time estimation details
- Advanced search filters
- Shareable URLs
- Performance optimizations
- Accessibility improvements
