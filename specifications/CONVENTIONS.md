# Coding conventions

## For React, prefer React Hooks like:

```js
export const Map = () => { ... }
```

## Prefer inline exports like:

```js
// Good
export const Map = () => { ... }

// Bad
const Map = () => { ... }
export { Map }

// Worse, please don't use default exports
const Map = () => { ... }
export default Map
```

## Prefer single-line if/else statements

```js
// Good
if (next.has(d.id)) next.delete(d.id)
else next.add(d.id)

// Bad
if (next.has(d.id)) {
    next.delete(d.id)
} else {
    next.add(d.id)
}
```
