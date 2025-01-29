# Version 3.1: Station Selection Interface

## Objective
Implement an interactive station selection system that allows users to build and manage a list of participants' starting stations through direct map interaction.

## Key Features

### 1. Selected Stations List Component
 ensp]- New left sidebar component displaying selected stations
- List items show:
  - Station code
  - Station name
  - Remove button
- Maintain order of selection
- Responsive layout that works with existing map

### 2. D3 Node Interaction
- Clicking station nodes toggles selection:
  - First click: Selects station (adds to list with visual feedback)
  - Click on selected node: Deselects (removes from list)
- Visual indicators for selected nodes:
  - 5px colored border matching line color
  - 20% scale increase
- Click handling must coexist with existing drag-pan:
  - Only trigger selection if no drag movement detected
  - 5px movement threshold during mousedown

### 3. State Management
- New Jotai atom `selectedStationsAtom`:
  ```typescript
  const selectedStationsAtom = atom<Set<string>>(new Set())
  ```
- Station codes stored in Set for deduplication
- Automatic list sorting by MRT line codes

### 4. UI Requirements
- Mobile-responsive two-column layout:
  - 30% width for selected stations list
  - 70% width for D3 map
- List header showing participant count
- Empty state message when no stations selected

## Technical Approach

### Backend Services
- No API changes required - purely frontend feature

### Component Updates
1. `Map.tsx`:
   - Add D3 click handlers with coordinate translation
   - Update node rendering with selection styles
   - Prevent selection during pan operations

2. New `SelectedStationsList.tsx`:
   - Display and manage selected stations
   - Handle station removal via click/button

3. `App.tsx` layout update:
   - Split view between list and map
   - Shared state via Jotai

### Testing
1. Interaction tests:
   - Click selection/deselection
   - Pan vs click differentiation
   - Cross-browser event handling

2. Visual regression:
   - Selected node styling
   - List updates with various stations
   - Mobile layout boundaries
