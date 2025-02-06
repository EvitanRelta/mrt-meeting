# Coding conventions

Ensure your code follows these conventions.

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

## Avoid simple low-level comments; prefer higher-level comments

### Bad, comments are too simple, not useful for readers

```js
// Clear any existing timeout
if (hoverTimeoutRef.current !== null) {
    window.clearTimeout(hoverTimeoutRef.current)
}

// Set new timeout
hoverTimeoutRef.current = window.setTimeout(() => { ... }, 500)
```

### Good, explains what code is for

```js
if (hoverTimeoutRef.current !== null) {
    window.clearTimeout(hoverTimeoutRef.current)
}

// Highlight same-line stations only after 0.5s delay
hoverTimeoutRef.current = window.setTimeout(() => { ... }, 500)
```
