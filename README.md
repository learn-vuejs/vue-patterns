# vue-patterns

Vue patterns, techniques, tips and tricks

## Conditional Rendering

### Use Directive (`v-if` / `v-else` / `v-else-if` / `v-show`)

`v-if`

```html
<h1 v-if="true">Render only if v-if condition is true</h1>
```

`v-if` and `v-else`

```html
<h1 v-if="true">Render only if v-if condition is true</h1>
<h1 v-else>Render only if v-if condition is false</h1>
```

`v-else-if`

```html
<div v-if="type === 'A'">Render only if `type` is equal to `A`</div>
<div v-else-if="type === 'B'">Render only if `type` is equal to `B`</div>
<div v-else-if="type === 'C'">Render only if `type` is equal to `C`</div>
<div v-else>Render if `type` is not `A` or `B` or `C`</div>
```

`v-show`

```html
<h1 v-show="true">Always rendered, but it should be visible only if `v-show` conditions is true</h1>
```

If you want to conditionally render more than one element,
you can use directives(`v-if` / `v-else` / `v-else-if` /`v-show`) on a `<template>` element.
Notice that `<template>` element is not actually rendered into DOM. It is an invisible wrapper.

```html
<template v-if="true">
  <h1>All the elements</h1>
  <p>will be rendered into DOM</p>
  <p>except `template` element</p>
</template>
```

### Use JSX

### Use Special Attribute (is)

### Use Map

## Props Passing

## Higher Order Component

## Provide / Inject

## Mixins

## Async

## Flux (Vuex)

## Dependency injection
