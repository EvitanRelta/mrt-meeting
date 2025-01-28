# JSON format for MRT data

## `mrtData.json`

Station metadata, connecting stations, travel times between stations.

```json
{
    "NS1/EW24": {
        "name": "Jurong East",
        "connections": {
            // represents which station this station connects to
            "NS2": { "time": 2 }, // time represents the time taken to go from the current station to this station
            "EW25": { "time": 3 },
            "EW23": { "time": 4 }
        }
    }
    // ...
}
```

## `mapPositions.json`

X, Y position of each stations on the displayed map. Used for visually positioning the nodes on the map. X and Y are integers ranging from 0 to 1000.

```json
{
    "NS1/EW24": { "x": 10, "y": 150 },
    "NS2": { "x": 1000, "y": 132 }
    // ...
}
```
