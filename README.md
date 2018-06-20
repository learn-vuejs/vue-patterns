# vue-patterns

Useful Vue patterns, techniques, tips and tricks and helpful curated links.

- [Component Declaration](#component-declaration)
  - [Single File Component(a.k.a: SFC) - Most Common](#single-file-componentaka-sfc---most-common)
  - [String Template (or es6 Template Literal)](#string-template-or-es6-template-literal)
  - [Render Function](#render-function)
  - [JSX](#jsx)
  - [vue-class-component](#vue-class-component)
- [Component Conditional Rendering](#component-conditional-rendering)
  - [Directives (v-if / v-else / v-else-if / v-show)](#directives-v-if--v-else--v-else-if--v-show)
  - [JSX](#jsx-1)
- [Dynamic Component](#dynamic-component)
  - [<component> with is attribute](#component-with-is-attribute)
- [Composition](#composition)
  - [Basic Composition](#basic-composition)
  - [Extends](#extends)
  - [Mixins](#mixins)
  - [Slots (Default)](#slots-default)
  - [Named Slots](#named-slots)
  - [Scoped Slots](#scoped-slots)
  - [Render Props](#render-props)
- [Passing Props](#passing-props)
- [Higher Order Component (a.k.a HOC)](#higher-order-component-aka-hoc)
- [Dependency injection](#dependency-injection)
  - [Provide / Inject](#provide--inject)
  - [@Provide / @Inject Decorator](#provide--inject-decorator)
- [Handling Errors](#handling-errors)
  - [errorCaptured Hook](#errorcaptured-hook)
- [Productivity Tips](#productivity-tips)
- [Useful Links](#useful-links)
  - [Component Communication](#component-communication)
  - [Refactoring](#refactoring)
  - [Vuex](#vuex)
  - [Mobx](#mobx)
  - [Renderless Component](#renderless-component)
  - [Tips & Tricks](#tips--tricks)
  - [Anti Patterns](#anti-patterns)
  - [Videos / Audios](#videos--audios)
  - [Paid](#paid)
  - [Misc](#misc)

## Component Declaration

### Single File Component(a.k.a: SFC) - Most Common

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

### String Template (or es6 Template Literal)

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

### Render Function

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

### JSX

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

* [7 Ways To Define A Component Template in VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

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

## Composition

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

export deafult {
  mixins: [closableMixin],
  props: ['text']
};
</script>
```

#### References:

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

* [Understanding Component Slots with Vue.js](https://alligator.io/vuejs/component-slots/)
* [Composing Custom Elements With Slots And Named Slots](https://alligator.io/web-components/composing-slots-named-slots/)

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

* [Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
* [Understanding scoped slots in Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
* [Scoped Component Slots in Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
* [The Trick to Understanding Scoped Slots in Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
* [The Power of Scoped Slots in Vue](https://pineco.de/power-scoped-slots-vue/)

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

* [Leveraging Render Props in Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
* [Use a Vue.js Render Prop!](https://medium.com/js-dojo/use-a-vue-js-render-prop-98880bc44e05)

## Passing Props

Sometimes, you may want to pass props and listeners to child component without having to declare all child component's props.
You can simply bind `$attrs` and `$listeners` to child component

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

## Higher Order Component (a.k.a HOC)

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
</ancestor-component>
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

### Component Communication

* [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)
* [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)
* [Leveraging Vue events to reduce prop declarations](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
* [Control DOM Outside Your Vue.js App with portal-vue](https://alligator.io/vuejs/portal-vue/)
* [Creating Custom Inputs With Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
* [Creating a Global Event Bus with Vue.js](https://alligator.io/vuejs/global-event-bus/)

### Refactoring

* [Refactoring Vue: Cleaning Up a List of Posts With Better Component Splitting and More ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Feed)
* [Clean up your Vue modules with ES6 Arrow Functions](https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7)
* [Examples of Vue’s Clean Code](https://webdesign.tutsplus.com/tutorials/examples-of-vues-clean-code--cms-29619)
* [Optimizing Performance with Computed Properties](https://codingexplained.com/coding/front-end/vue-js/optimizing-performance-computed-properties)

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

### Mobx

* [Build A View-Framework-Free Data Layer Based on MobX — Integration With Vue (1)](https://itnext.io/build-a-view-framework-free-data-layer-based-on-mobx-integration-with-vue-1-8b524b86c7b8)

### Renderless Component

* [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/)
* [Building Renderless Components to Handle CRUD Operations in Vue.js](https://markus.oberlehner.net/blog/building-renderless-components-to-handle-crud-operations-in-vue/)

### Folder Structure

* [How you can improve your workflow using the JavaScript console](https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472)

### Tips & Tricks

* [How To Build Vue Components Like A Pro 😎](https://blog.bitsrc.io/how-to-build-vue-components-like-a-pro-fd89fd4d524d)
* [Four tips for working with Vue.js](https://itnext.io/four-tips-for-working-with-vue-js-b362d97de852)
* [Tips from a Lowly VueJS Developer](https://medium.com/@denny.headrick/tips-from-a-lowly-vuejs-developer-381b6956aece)
* [Throttling and Debouncing Events with Vue.js and lodash](https://alligator.io/vuejs/lodash-throttle-debounce/)
* [Are partially applied functions in event handlers possible?](https://forum.vuejs.org/t/are-partially-applied-functions-in-event-handlers-possible/10187)
* [Vue.js — Considerations and Tricks](https://blog.webf.zone/vue-js-considerations-and-tricks-fa7e0e4bb7bb)
* [Six random issues and their solutions in VueJS.](https://medium.com/@stijlbreuk/six-random-issues-and-their-solutions-in-vuejs-b16d470a6462)
* [When VueJS Can't Help You](https://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/)

### Repos

* [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
* [7-secret-patterns](https://github.com/chrisvfritz/7-secret-patterns)
* [Vue.js-2-Design-Patterns-and-Best-Practices](https://github.com/PacktPublishing/Vue.js-2-Design-Patterns-and-Best-Practices)

### Anti Patterns

* [Chris Fritz - Vue.js Anti-Patterns (and How to Avoid Them)](http://www.fullstackradio.com/87)
* [Common mistakes to avoid while working with Vue.js](https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)

### Videos / Audios

* [81: Evan You - Advanced Vue Component Design](https://player.fm/series/series-1401837/81-evan-you-advanced-vue-component-design)
* [7 Secret Patterns Vue Consultants Don’t Want You to Know](https://www.youtube.com/watch?v=7YZ5DwlLSt8)


### Paid

* [Advanced Vue Component Design](https://adamwathan.me/advanced-vue-component-design/)


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
* [Templating in Vue: Separation of Concerns or Separation of Technology or something else?](https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4)
* [Looping through Object Properties](https://codingexplained.com/coding/front-end/vue-js/looping-object-properties)
* [Cancelling async operations in Vue.js](https://codeburst.io/cancelling-async-operations-in-vue-js-3d0f3c2de598)
* [Scoped styles with v-html](https://medium.com/@brockreece/scoped-styles-with-v-html-c0f6d2dc5d8e)
* [Pagination With Vuejs](https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b)
* [What does the ‘h’ stand for in Vue’s render method?](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/)
* [How To Build Vue Components That Play Nice](https://vuejsdevelopers.com/2018/06/18/vue-components-play-nicely/)
* [Making responsive Vue components with ResizeObserver](https://itnext.io/making-adaptive-vue-components-with-resizeobserver-123b5ebb20ae)
* [An imperative guide to forms in Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-7536bfa374e0)
