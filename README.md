# vue-patterns

> Useful Vue patterns, techniques, tips and tricks and helpful curated links.

## Translations

* [简体中文](https://github.com/ZYSzys/vue-patterns-cn)
* [繁體中文](https://github.com/yoyoys/vue-patterns-cht)


## Table of Contents

- [Component Declaration](#component-declaration)
  - [Single File Component (a.k.a. SFC) - Most Common](#single-file-component-aka-sfc---most-common)
  - [String Template (or ES6 Template Literal)](#string-template-or-es6-template-literal)
  - [Render Function](#render-function)
  - [JSX](#jsx)
  - [vue-class-component](#vue-class-component)
- [Component Communication](#component-communication)
  - [Props and Events](#props-and-events)
- [Component Events Handling](#component-events-handling)
- [Component Conditional Rendering](#component-conditional-rendering)
  - [Directives (v-if / v-else / v-else-if / v-show)](#directives-v-if--v-else--v-else-if--v-show)
  - [JSX](#jsx-1)
- [Dynamic Component](#dynamic-component)
  - [component with is attribute](#component-with-is-attribute)
- [Composition](#composition)
  - [Basic Composition](#basic-composition)
  - [Extends](#extends)
  - [Mixins](#mixins)
  - [Slots (Default)](#slots-default)
  - [Named Slots](#named-slots)
  - [Scoped Slots](#scoped-slots)
  - [Render Props](#render-props)
- [Passing Props](#passing-props)
- [Higher Order Component (a.k.a. HOC)](#higher-order-component-aka-hoc)
- [Dependency injection](#dependency-injection)
  - [Provide / Inject](#provide--inject)
  - [@Provide / @Inject Decorator](#provide--inject-decorator)
- [Handling Errors](#handling-errors)
  - [errorCaptured Hook](#errorcaptured-hook)
- [Productivity Tips](#productivity-tips)
- [Useful Links](#useful-links)
  - [Style Guide](#style-guide)
  - [Refactoring](#refactoring)
  - [State Management](#state-management)
  - [Vuex](#vuex)
  - [Mobx](#mobx)
  - [Renderless Component](#renderless-component)
  - [Folder Structure](#folder-structure)
  - [Tips & Tricks](#tips--tricks)
  - [Router](#router)
  - [Anti Patterns](#anti-patterns)
  - [Videos / Audios](#videos--audios)
  - [Repos](#repos)
  - [Paid](#paid)
  - [Typescript](#typescript)
  - [Flowtype](#flowtype)
  - [GraphQL](#graphql)
  - [Misc](#misc)
- [Fullstack Vue Book](#fullstack-vue-book)

## Component Declaration

### [Single File Component (a.k.a. SFC)](https://vuejs.org/v2/guide/single-file-components.html) - Most Common

```html
<template>
  <button class="btn-primary" @click.prevent="handleClick">
    {{text}}
  </button>
</template>

<script>
export default {
  data() {
    return {
      text: 'Click me',
    };
  },
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
}
</script>

<style scoped>
.btn-primary {
  background-color: blue;
}
</style>
```

### String Template (or ES6 Template Literal)

```js
Vue.component('my-btn', {
  template: `
    <button class="btn-primary" @click.prevent="handleClick">
      {{text}}
    </button>
  `,
  data() {
    return {
      text: 'Click me',
    };
  },
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
});
```

### [Render Function](https://vuejs.org/v2/guide/render-function.html)

```js
Vue.component('my-btn', {
  data() {
    return {
      text: 'Click me',
    };
  },
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
  render(h) {
    return h('button', {
        attrs: {
          class: 'btn-primary'
        },
        on: {
          click: this.handleClick,
        },
    });
  },
});
```

### [JSX](https://vuejs.org/v2/guide/render-function.html#JSX)

```jsx
Vue.component('my-btn', {
  data() {
    return {
      text: 'Click me',
    };
  },
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
  render() {
    return (
      <button class="btn-primary" onClick={this.handleClick}>
        {{this.text}}
      </button>
    );
  },
});
```

### [vue-class-component](https://github.com/vuejs/vue-class-component)

```html
<template>
  <button class="btn-primary" @click.prevent="handleClick">
    {{text}}
  </button>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default MyBtn extends Vue {
  text = 'Click me';

  handleClick() {
    console.log('clicked');
  }
}
</script>

<style scoped>
.btn-primary {
  background-color: blue;
}
</style>
```

#### References:

* [Official - Single File Component](https://vuejs.org/v2/guide/single-file-components.html)
* [Official - Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
* [7 Ways To Define A Component Template in VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

## Component Communication

### Props and Events

Basically, vue component follows one-way data flow, that is props down([See official guide](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)) and event up.
Props are read-only data, so it's impossible to change props from child components.
When props changes, child components will be rerendered automatically(props are reactive data source).
Child components can only emit event to direct parent, so that the parent component may change `data`, mapped to the child component's `props`.

```html
<template>
  <button @click="$emit('click')">{{text}}</button>
</template>

<script>
export default {
  name: 'v-btn',
  props: {
    text: String,
  },
};
</script>
```

```html
<template>
  <v-btn :text="buttonText" @click="handleClick"></v-btn>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
      buttonText: 'initial button text',
    };
  },
  methods: {
    handleClick() {
      this.buttonText = `Button clicked ${++this.clickCount}`;
      console.log('clicked', this.buttonText);
    }
  }
};
</script>
```

#### References:

* [Official - Props](https://vuejs.org/v2/guide/components-props.html)
* [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)
* [Creating Custom Inputs With Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
* [Vue Sibling Component Communication](https://vegibit.com/vue-sibling-component-communication/)
* [Managing State in Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
* [Vue.js communication part 2: parent-child components](https://gambardella.info/2017/09/13/vue-js-communication-part-2-parent-child-components/)

## Component Events Handling

#### References:

* [Official - Custom Events](https://vuejs.org/v2/guide/components-custom-events.html)
* [Leveraging Vue events to reduce prop declarations](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
* [Vue.js Component Hooks as Events](https://alligator.io/vuejs/component-event-hooks/)
* [Creating a Global Event Bus with Vue.js](https://alligator.io/vuejs/global-event-bus/)
* [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)

## Component Conditional Rendering

### Directives (`v-if` / `v-else` / `v-else-if` / `v-show`)

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

### JSX

If you use JSX in your vue application, you can apply all the techniques such as `if else` and `switch case` statement and `ternary` and `logical` operator.

`if else` statement

```jsx
export default {
  data() {
    return {
      isTruthy: true,
    };
  },
  render(h) {
    if (this.isTruthy) {
      return <h1>Render value is true</h1>;
    } else {
      return <h1>Render value is false</h1>;
    }
  },
};
```

`switch case` statement

```jsx
import Info from './Info';
import Warning from './Warning';
import Error from './Error';
import Success from './Success';

export default {
  data() {
    return {
      type: 'error',
    };
  },
  render(h) {
    switch (this.type) {
      case 'info':
        return <Info text={text} />;
      case 'warning':
        return <Warning text={text} />;
      case 'error':
        return <Error text={text} />;
      default:
        return <Success text={text} />;
    }
  },
};
```

or you can use `object` map to simplify `switch case`

```jsx
import Info from './Info';
import Warning from './Warning';
import Error from './Error';
import Success from './Success';

const COMPONENT_MAP = {
  info: Info,
  warning: Warning,
  error: Error,
  success: Success,
};

export default {
  data() {
    return {
      type: 'error',
    };
  },
  render(h) {
    const Comp = COMPONENT_MAP[this.type || 'success'];

    return <Comp />;
  },
};
```

`ternary` operator

```jsx
export default {
  data() {
    return {
      isTruthy: true,
    };
  },
  render(h) {
    return (
      <div>
        {this.isTruthy ? (
          <h1>Render value is true</h1>
        ) : (
          <h1>Render value is false</h1>
        )}
      </div>
    );
  },
};
```

`logical` operator

```jsx
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  render(h) {
    return <div>{this.isLoading && <h1>Loading ...</h1>}</div>;
  },
};
```
#### References

* [Official - Conditional Rendering](https://vuejs.org/v2/guide/conditional.html)
* [Difference Between v-if and v-show [With Video at End]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Dynamic Component

### `<component>` with `is` attribute

* [Example 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
* [Example 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
* [Example 3](https://alligator.io/vuejs/dynamic-components/)

```html
<component :is="currentTabComponent"></component>
```

With the above code example, rendered component will be destroyed if a different component is rendered in `<component>`. If you want components to keep their instances without being destroyed within `<component>` tag, you can wrap the `<component>` tag in a `<keep-alive>` tag like so:

```html
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

#### References

* [Official - Dynamic Components](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
* [Official - Dynamic & Async Components](https://vuejs.org/v2/guide/components-dynamic-async.html)
* [Dynamic Component Templates with Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Composition

#### Library

* [Proppy - Functional props composition for components](https://proppyjs.com/)

### Basic Composition

```html
<template>
  <div class="component-b">
    <component-a></component-a>
  </div>
</template>

<script>
import ComponentA from './ComponentA';

export default {
  components: {
    ComponentA,
  },
};
</script>
```

#### References

* [Official - Composing with Components](https://vuejs.org/v2/guide/#Composing-with-Components)

### Extends

When you want to extend a single vue component

```html
<template>
  <button class="button-primary" @click.prevent="handleClick">
    {{buttonText}}
  </button>
</template>

<script>
import BaseButton from './BaseButton';

export default {
  extends: BaseButton,
  props: ['buttonText'],
};
</script>
```

#### References:

* [Official - extends](https://vuejs.org/v2/api/#extends)
* [Extending VueJS Components](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

### Mixins

```js
// closableMixin.js
export default {
  props: {
    isOpen: {
      default: true
    }
  },
  data: function() {
    return {
      shown: this.isOpen
    }
  },
  methods: {
    hide: function() {
      this.shown = false;
    },
    show: function() {
      this.shown = true;
    },
    toggle: function() {
      this.shown = !this.shown;
    }
  }
}
```

```html
<template>
  <div v-if="shown" class="alert alert-success" :class="'alert-' + type" role="alert">
    {{text}}
    <i class="pull-right glyphicon glyphicon-remove" @click="hide"></i>
  </div>
</template>

<script>
import closableMixin from './mixins/closableMixin';

export default {
  mixins: [closableMixin],
  props: ['text']
};
</script>
```

#### References:

* [Official - mixins](https://vuejs.org/v2/guide/mixins.html)
* [Practical use of Components and Mixins in Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)


### Slots (Default)

```html
<template>
  <button class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VBtn',
};
</script>
```

```html
<template>
  <v-btn>
    <span class="fa fa-user"></span>
    Login
  </v-btn>
</template>

<script>
import VBtn from './VBtn';

export default {
  components: {
    VBtn,
  }
};
</script>
```

#### References:

* [Official - Slot Content](https://vuejs.org/v2/guide/components-slots.html#Slot-Content)
* [Understanding Component Slots with Vue.js](https://alligator.io/vuejs/component-slots/)
* [Composing Custom Elements With Slots And Named Slots](https://alligator.io/web-components/composing-slots-named-slots/)
* [Writing Abstract Components with Vue.js](https://alligator.io/vuejs/vue-abstract-components/)

### Named Slots

BaseLayout.vue

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

App.vue

```html
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

#### References

* [Official - Named Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)

### Scoped Slots

```html
<template>
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <!-- We have a slot for each todo, passing it the -->
      <!-- `todo` object as a slot prop.                -->
      <slot v-bind:todo="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => ([]),
    }
  },
};
</script>
```

```html
<template>
  <todo-list v-bind:todos="todos">
      <template slot-scope="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
  </todo-list>
</template>

<script>
import TodoList from './TodoList';

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        { todo: 'todo 1', isComplete: true },
        { todo: 'todo 2', isComplete: false },
        { todo: 'todo 3', isComplete: false },
        { todo: 'todo 4', isComplete: true },
      ];
    };
  },
};
</script>
```

#### References:

* [Official - Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)
* [Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
* [Understanding scoped slots in Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
* [Scoped Component Slots in Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
* [The Trick to Understanding Scoped Slots in Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
* [The Power of Scoped Slots in Vue](https://pineco.de/power-scoped-slots-vue/)
* [Building a list keyboard control component with Vue.js and scoped slots](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)

### Render Props

In most cases, you can use scoped slots instead of render props. But, it might be useful in some case.

with `SFC`

```html
<template>
  <div id="app">
    <Mouse :render="__render"/>
  </div>
</template>

<script>
import Mouse from "./Mouse.js";
export default {
  name: "app",
  components: {
    Mouse
  },
  methods: {
    __render({ x, y }) {
      return (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      );
    }
  }
};
</script>
<style>
* {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
```

with `JSX`

```js
const Mouse = {
  name: "Mouse",
  props: {
    render: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    handleMouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  },
  render(h) {
    return (
      <div style={{ height: "100%" }} onMousemove={this.handleMouseMove}>
        {this.$props.render(this)}
      </div>
    );
  }
};

export default Mouse;
```

#### References:

* [Official - Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
* [Leveraging Render Props in Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
* [Use a Vue.js Render Prop!](https://medium.com/js-dojo/use-a-vue-js-render-prop-98880bc44e05)

## Passing Props

Sometimes, you may want to pass props and listeners to child component without having to declare all child component's props.
You can bind `$attrs` and `$listeners` in child component and set [`inheritAttrs` to `false`](https://vuejs.org/v2/api/#inheritAttrs) (otherwise both, `div` and `child-component` will receive the attributes)

```html
<template>
  <div>
    <h1>{{title}}</h1>
    <child-component v-bind="$attrs" v-on="$listeners"></child-component>
  </div>
</template>

<script>
export default {
  name: 'PassingPropsSample'
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: 'Hello, Vue!'
    }
  }
};
</script>
```

From parent component, you can do like this:
```html
<template>
  <passing-props-sample
    title="Hello, Passing Props"
    childPropA="This props will properly mapped to <child-component />"
    @click="handleChildComponentClick"
  >
  </passing-props-sample>
</template>

<script>
import PassingPropsSample from './PassingPropsSample';

export default {
  components: {
    PassingPropsSample
  },
  methods: {
    handleChildComponentClick() {
      console.log('child component clicked');
    }
  }
};
</script>
```

#### References:

* [Transparent Wrapper Components in Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Higher Order Component (a.k.a. HOC)

#### References:

* [Higher Order Components in Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
* [Do we need Higher Order Components in Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
* [Higher-Order Components in Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## Dependency injection

Vue supports provide / inject mechanism to provide `object` into all its descendants, regardless of how deep the component hierarchy is, as long as they are in the same parent chain. Notice that `provide` and `inject` bindings are **not** reactive, unless you pass down an observed object.

```html
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

With above example component hierarchy, in order to derive data from `parent-component`, you should pass down data(object) as `props` to `child-component` and `grand-child-component`. However, if `parent-component` `provide` data(object), `grand-child-component` can just define `inject` provided object from `parent-component`.

#### References:

* [Official API](https://vuejs.org/v2/api/#provide-inject)
* [Official Guide](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)
* [Component Communication](https://alligator.io/vuejs/component-communication/#provide--inject)
* [Dependency Injection in Vue.js App with TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)

### Provide / Inject

```js
// ParentComponent.vue

export default {
  provide: {
    theme: {
      primaryColor: 'blue',
    },
  },
};
```

```html
// GrandChildComponent.vue

<template>
  <button :style="{ backgroundColor: primary && theme.primaryColor }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inject: ['theme'],
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
```

### [@Provide / @Inject Decorator](https://github.com/kaorun343/vue-property-decorator)

```js
// ParentComponent.vue

import { Component, Vue, Provide } from 'vue-property-decorator';

@Component
export class ParentComponent extends Vue {
  @Provide
  theme = {
    primaryColor: 'blue',
  };
}
```

```html
// GrandChildComponent.vue

<template>
  <button :style="{ backgroundColor: primary && theme.primaryColor }">
    <slot></slot>
  </button>
</template>

<script>
import { Component, Vue, Inject, Prop } from 'vue-property-decorator';

export class GrandChildComponent extends Vue {
  @Inject() theme;

  @Prop({ default: true })
  primary: boolean;
};
</script>
```

## Handling Errors

### `errorCaptured` Hook

```js
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: false,
      errorMessage: '',
    };
  },
  errorCaptured (err, vm, info) {
    this.error = true;
    this.errorMessage = `${err.stack}\n\nfound in ${info} of component`;

    return false;
  },
  render (h) {
    if (this.error) {
      return h('pre', { style: { color: 'red' }}, this.errorMessage);
    }

    return this.$slots.default[0]
  }
};
```

```
<error-boundary>
  <another-component/>
</error-boundary>
```

#### Examples

* [Example 1](https://jsfiddle.net/Linusborg/z84wspcg/)

#### References

* [Handling Errors in Vue with Error Boundaries](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)

## Productivity Tips

watch on create

```js
// don't
created() {
  this.fetchUserList();
},
watch: {
  searchText: 'fetchUserList',
}
```

```js
// do
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```

## Useful Links

### Style Guide

* [Official - Style Guide](https://vuejs.org/v2/style-guide/)
* [Vue.js Component Style Guide](https://github.com/pablohpsilva/vuejs-component-style-guide)

### Refactoring

* [Refactoring Vue: Cleaning Up a List of Posts With Better Component Splitting and More ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Feed)
* [Clean up your Vue modules with ES6 Arrow Functions](https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7)
* [Examples of Vue’s Clean Code](https://webdesign.tutsplus.com/tutorials/examples-of-vues-clean-code--cms-29619)
* [Optimizing Performance with Computed Properties](https://codingexplained.com/coding/front-end/vue-js/optimizing-performance-computed-properties)
* [Simplify Your Components with Computed Setters](https://tahazsh.com/vuebyte-computed-setters)

### State Management

* [Managing State in Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)

### Vuex

* [Decouple Vuex modules with the Mediator pattern](https://itnext.io/decouple-vuex-actions-with-the-mediator-pattern-58a8879de1b4)
* [Vuex getters are great, but don’t overuse them](https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414)
* [Reusable Vuex Mutation Functions](https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b)
* [A pattern to handle ajax requests in Vuex](https://medium.com/@lachlanmiller_52885/a-pattern-to-handle-ajax-requests-in-vuex-2d69bc2f8984)
* [[vuex Mutations] Single Changes vs. Single Responsibility](https://forum.vuejs.org/t/vuex-mutations-single-changes-vs-single-responsibility/16396)
* [Components and How They Interact in Vue and Vuex](https://dzone.com/articles/how-do-components-interact-in-vue-and-what-is-vuex)
* [Why VueX Is The Perfect Interface Between Frontend and API](https://codeburst.io/why-vuex-is-the-perfect-interface-between-frontend-and-api-271d92161709)
* [Composing actions with Vuex](https://codeburst.io/composing-actions-with-vuex-b63466264a37)
* [How to Build Complex, Large-Scale Vue.js Apps With Vuex](https://code.tutsplus.com/tutorials/how-to-build-complex-large-scale-vuejs-applications-with-vuex--cms-30952)
* [Should I Store This Data in Vuex?](https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/)
* [Anyway, this is how to use v-model with Vuex. Computed setter in action.](https://itnext.io/anyway-this-is-how-to-use-v-model-with-vuex-computed-setter-in-action-320eb682c976)
* [5 Vuex Plugins For Your Next VueJS Project](https://medium.com/js-dojo/5-vuex-plugins-for-your-next-vuejs-project-df9902a70de2)

### Mobx

* [Build A View-Framework-Free Data Layer Based on MobX — Integration With Vue (1)](https://itnext.io/build-a-view-framework-free-data-layer-based-on-mobx-integration-with-vue-1-8b524b86c7b8)

### Renderless Component

* [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/)
* [Building Renderless Components to Handle CRUD Operations in Vue.js](https://markus.oberlehner.net/blog/building-renderless-components-to-handle-crud-operations-in-vue/)

#### Examples

* [Renderless Calendar component](https://codesandbox.io/s/v65lx0xvy5)

### Folder Structure

* [How you can improve your workflow using the JavaScript console](https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472)
* [How to Structure a Vue.js Project](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)
* [Large-scale Vuex application structures](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
* [Vue.js Application Structure and CSS Architecture](https://markus.oberlehner.net/blog/vue-application-structure-and-css-architecture/)

### Tips & Tricks

* [How To Build Vue Components Like A Pro 😎](https://blog.bitsrc.io/how-to-build-vue-components-like-a-pro-fd89fd4d524d)
* [Four tips for working with Vue.js](https://itnext.io/four-tips-for-working-with-vue-js-b362d97de852)
* [Tips from a Lowly VueJS Developer](https://medium.com/@denny.headrick/tips-from-a-lowly-vuejs-developer-381b6956aece)
* [Throttling and Debouncing Events with Vue.js and lodash](https://alligator.io/vuejs/lodash-throttle-debounce/)
* [Are partially applied functions in event handlers possible?](https://forum.vuejs.org/t/are-partially-applied-functions-in-event-handlers-possible/10187)
* [Vue.js — Considerations and Tricks](https://blog.webf.zone/vue-js-considerations-and-tricks-fa7e0e4bb7bb)
* [Six random issues and their solutions in VueJS.](https://medium.com/@stijlbreuk/six-random-issues-and-their-solutions-in-vuejs-b16d470a6462)
* [When VueJS Can't Help You](https://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/)
* [Things that won’t work using Vue](https://winnercrespo.com/things-that-wont-work-using-vue/)
* [Tip#15 Delay execution with _.debounce](https://medium.com/vuejs-tips/tip-15-delay-execution-with-debounce-6a93b759bb06)


### Router

* [Navigation Guards - Official](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards)
* [Vue Router Navigation Guards with Vuex](https://serversideup.net/vue-router-navigation-guards-vuex/)

### Anti Patterns

* [Chris Fritz - Vue.js Anti-Patterns (and How to Avoid Them)](http://www.fullstackradio.com/87)
* [Common mistakes to avoid while working with Vue.js](https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)
* [Avoid This Common Anti-Pattern In Full-Stack Vue/Laravel Apps](https://vuejsdevelopers.com/2017/08/06/vue-js-laravel-full-stack-ajax/)
* [[Video] - VueNYC - Three Vue code smells, and what you can do about them - Matt Rothenberg (@mattrothenberg)](https://www.youtube.com/watch?v=z5UWVOeIsUQ)

### Videos / Audios

* [81: Evan You - Advanced Vue Component Design](https://player.fm/series/series-1401837/81-evan-you-advanced-vue-component-design)
* [7 Secret Patterns Vue Consultants Don’t Want You to Know](https://www.youtube.com/watch?v=7YZ5DwlLSt8)

### Repos

* [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
* [7-secret-patterns](https://github.com/chrisvfritz/7-secret-patterns)
* [Vue.js-2-Design-Patterns-and-Best-Practices](https://github.com/PacktPublishing/Vue.js-2-Design-Patterns-and-Best-Practices)

### Paid

* [Advanced Vue Component Design](https://adamwathan.me/advanced-vue-component-design/)
* [Advanced Vue.js Features from the Ground Up](https://frontendmasters.com/courses/advanced-vue/)


### Typescript

* [Vue + TypeScript: A Match Made in Your Code Editor](https://css-tricks.com/vue-typescript-a-match-made-in-your-code-editor/)
* [Writing Class-Based Components with Vue.js and TypeScript](https://alligator.io/vuejs/typescript-class-components/)

### Flowtype

### GraphQL

---

### Misc

* [Creating an Interpose Vue component from a React implementation](https://itnext.io/creating-an-interpose-vue-component-from-a-react-implementation-80d367a695c6)
* [Composing computed properties in Vue.js](https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079)
* [4 AJAX Patterns For Vue.js Apps](https://medium.com/js-dojo/4-ajax-patterns-for-vue-js-apps-add915fc9168)
* [3 Code Splitting Patterns For VueJS and Webpack](https://medium.com/js-dojo/3-code-splitting-patterns-for-vuejs-and-webpack-b8fff1ea0ba4)
* [The easiest way to improve your Vue.js application. Part 1](https://codeburst.io/the-easiest-way-to-improve-your-vue-js-application-part-1-51f068652872)
* [Using JSX with Vue and Why You Should Care](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20News)
* [Compound components](https://forum.vuejs.org/t/compound-components/30139)
* [Creating Multi-root Vue.js Components](https://zendev.com/2018/05/07/multi-root-vue-components.html)
* [Understanding Vue.js Reactivity in Depth with Object.defineProperty()](https://www.timo-ernst.net/blog/2017/07/26/understanding-vue-js-reactivity-depth-object-defineproperty/)
* [Templating in Vue: Separation of Concerns or Separation of Technology or something else?](https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4)
* [Stashing Vue components data](https://medium.com/@kelin2025/components-stash-f2e14603a874)
* [Creating Reusable Transitions in Vue](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)
* [vue-advanced-workshop](https://github.com/d-levin/vue-advanced-workshop)
* [Do it with Elegance: How to Create Data-Driven User Interfaces in Vue](https://blog.rangle.io/how-to-create-data-driven-user-interfaces-in-vue/)
* [Creating Vue.js Component Instances Programmatically](https://css-tricks.com/creating-vue-js-component-instances-programmatically/)
* [Managing User Permissions in a Vue.js App](https://dzone.com/articles/managing-user-permissions-in-a-vuejs-app)
* [Render Functional Components in Vue.js](https://alligator.io/vuejs/render-functional-components/)
* [Looping through Object Properties](https://codingexplained.com/coding/front-end/vue-js/looping-object-properties)
* [Cancelling async operations in Vue.js](https://codeburst.io/cancelling-async-operations-in-vue-js-3d0f3c2de598)
* [Scoped styles with v-html](https://medium.com/@brockreece/scoped-styles-with-v-html-c0f6d2dc5d8e)
* [Pagination With Vuejs](https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b)
* [What does the ‘h’ stand for in Vue’s render method?](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/)
* [How To Build Vue Components That Play Nice](https://vuejsdevelopers.com/2018/06/18/vue-components-play-nicely/)
* [Making responsive Vue components with ResizeObserver](https://itnext.io/making-adaptive-vue-components-with-resizeobserver-123b5ebb20ae)
* [An imperative guide to forms in Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-7536bfa374e0)
* [Vue.js: the good, the meh, and the ugly](https://medium.com/@Pier/vue-js-the-good-the-meh-and-the-ugly-82800bbe6684)
* [Dynamic Vue.js Layout Components](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/)
* [Advanced Vue.js concepts: mixins, custom directives, filters, transitions, and state management](https://blog.logrocket.com/advanced-vue-js-concepts-mixins-custom-directives-filters-transitions-and-state-management-ca6955905156)
* [Introducing the Single Element Pattern](https://medium.freecodecamp.org/introducing-the-single-element-pattern-dfbd2c295c5d)
* [Control DOM Outside Your Vue.js App with portal-vue](https://alligator.io/vuejs/portal-vue/)
* [Add i18n and manage translations of a Vue.js powered website](https://medium.com/hypefactors/add-i18n-and-manage-translations-of-a-vue-js-powered-website-73b4511ca69c)
* [Managing Complex Waiting Experiences on Web UIs](https://medium.com/@fkadev/managing-complex-waiting-experiences-on-web-uis-29534d2d92a8)
* [Vue.js — Forms, components and considerations](https://blog.webf.zone/vue-js-forms-components-and-considerations-d81b3ffe9efb)

## Fullstack Vue Book

[![Fullstack Vue Book](https://www.fullstack.io/assets/images/vue-github.png)](https://gumroad.com/a/462206067)
