# Version 3.2 plan: implementing the proof-of-concept station scoring feature.

Key objectives:

1. Implement the Weighted Squared Travel Time (WSTT) scoring algorithm as defined in specifications/scoring_metric.md
2. Calculate scores for just 1 station: Jurong East, based on currently selected stations
3. Console log the score for Jurong East
4. No UI change needed
5. No changes to state management yet either

Breakdown of tasks:

1. Algorithm Implementation

    - Create new file `src/utils/scoring.ts`
    - Implement Dijkstra's algorithm for finding shortest paths between stations
    - Implement WSTT scoring formula
    - Implement min-max scaling of scores
    - Make the functions pure functions
