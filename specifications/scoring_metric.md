# **Scoring Metric Specification: Weighted Squared Travel Time (WSTT)**

**Purpose**: Balance group efficiency and fairness by prioritizing participants with higher weights. Penalizes long travel times quadratically, ensuring participants with higher weights (e.g., busy individuals) have their travel times minimized aggressively.

**Formula**:

```
Score = Σ (weight_i × travel_time_i^2)
```

- `weight_i`: User-assigned priority weight for participant _i_ (higher = more prioritized).
- `travel_time_i`: Shortest-path travel time from participant _i_'s start station to the candidate midpoint.

**Weighting Logic**:

- Weights are floats provided by users.
- Example: If Person A has `weight=3` and Person B has `weight=1`, Person A's travel time is penalized 3× more than Person B's.

**Scoring Process**:

1. For each candidate midpoint station:
    - Calculate the shortest travel time for all participants using Dijkstra's algorithm on the MRT graph.
    - Compute the WSTT score using the formula above.
2. Min-Max scale all scores to [0, 1].
3. Candidate stations are then ranked by ascending WSTT score (lower = better).
