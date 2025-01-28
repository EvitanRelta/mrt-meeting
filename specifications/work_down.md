# Work Done

All the work completed so far in this repository.

## Version 0: Initial Setup and Configuration

- Set up a default Vite + TypeScript boilerplate.
- Configured Prettier for automatic code formatting.

## Version 1: Basic MRT Data Visualization

**New Data Added:** `mrtData.json` – Contains station metadata, connecting stations, and travel times between stations.

- Implemented loading of `src/data/mrtData.json`.
- Created a basic D3 graph to display MRT data, with station nodes dynamically positioned.

## Version 2: Improved MRT Data Visualization

### Version 2.1: Enhanced Station Positioning and Styling

**New Data Added:** `mapPositions.json` – Provides X, Y coordinates for each station to visually position nodes on the map.

- Fixed station node positions using the coordinates from `mapPositions.json`.
- Added color coding to station nodes based on their associated MRT line(s).

### Version 2.2: Zoom Functionality

- Implemented zoom in/out functionality for better user interaction with the map.

### Version 2.3: Refactor, Bug Fixing, and Minor Zoom Improvements

- Fixed minor typing errors and UI bugs.
- Updated X, Y coordinates in `mapPositions.json` to range from `[0, 1000]` instead of `[0, 100]`.
- Improved readability of graph nodes by scaling them based on zoom level and hiding node labels when zoomed out.
