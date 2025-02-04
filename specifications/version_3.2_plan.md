# Version 3.2 plan: implementing the station scoring feature.

Key objectives:

1. Implement the Weighted Squared Travel Time (WSTT) scoring algorithm as defined in specifications/scoring_metric.md
2. Calculate scores for just 1 station: Jurong East, based on currently selected stations
3. Console log the score for Jurong East
4. No UI change needed

Breakdown of tasks:

1. Algorithm Implementation

    - Create new file `src/utils/scoring.ts`
    - Implement Dijkstra's algorithm for finding shortest paths between stations
    - Implement WSTT scoring formula
    - Implement min-max scaling of scores
    - Make the functions pure functions

2. State Management Updates

    - Add new `stationScoresAtom` to store calculated scores
    - Create `scoreCalculationAtom` derived atom that:
      * Watches `selectedStationsAtom`
      * Calls scoring functions when selected stations change
      * Returns scores mapped to station IDs
    - Add `stationScoreEffectAtom` for console logging
    - Add type definitions for scoring results
