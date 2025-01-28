# Project Overview

The Singapore MRT Meeting Point Planner is an interactive web application designed to simplify group meetups by algorithmically determining optimal midpoint stations. This tool combines public transit data with graph theory to visualize and calculate the most convenient meeting locations based on participants' starting stations. Users interact with a schematic MRT map to select starting points either through clickable station nodes or an autocomplete-enabled search field. The system then computes and visually ranks stations using a heatmap-like opacity scale, where higher opacity indicates better suitability as a midpoint meeting location.

Built with:

- Vite/TypeScript for core functionality
- MUI for UI components
- D3.js for map rendering
- Jotai for state management

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
