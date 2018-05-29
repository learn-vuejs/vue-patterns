# vue-patterns

Useful Vue patterns, techniques, tips and tricks

## Component Declaration

### Single File Component(a.k.a: SFC)

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

```jsx
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

### Mixins

References:

* [Practical use of Components and Mixins in Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)

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

### Slots

References:

* [Understanding Component Slots with Vue.js](https://alligator.io/vuejs/component-slots/)


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

References:

* [Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
* [Understanding scoped slots in Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
* [Scoped Component Slots in Vue.js](https://alligator.io/vuejs/scoped-component-slots/)



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

References:

* [Official API](https://vuejs.org/v2/api/#provide-inject)
* [Official Guide](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)
* [Component Communication](https://alligator.io/vuejs/component-communication/#provide--inject)

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

## Higher Order Component

References

* [Higher Order Components in Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
* [Do we need Higher Order Components in Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)

## Render Prop

## Passing Props

## Async

## Flux (Vuex)

## ETC

References

* [Decouple Vuex modules with the Mediator pattern](https://itnext.io/decouple-vuex-actions-with-the-mediator-pattern-58a8879de1b4)
* [Extending VueJS Components](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)
* [Handling Errors in Vue with Error Boundaries](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)
* [Vuex getters are great, but don’t overuse them](https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414)
* [Leveraging Render Props in Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
* [Reusable Vuex Mutation Functions](https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b)
* [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/)
* [The Trick to Understanding Scoped Slots in Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
* [Chris Fritz - Vue.js Anti-Patterns (and How to Avoid Them)](http://www.fullstackradio.com/87)
* [4 AJAX Patterns For Vue.js Apps](https://medium.com/js-dojo/4-ajax-patterns-for-vue-js-apps-add915fc9168)
* [3 Code Splitting Patterns For VueJS and Webpack](https://medium.com/js-dojo/3-code-splitting-patterns-for-vuejs-and-webpack-b8fff1ea0ba4)
* [Refactoring Vue: Cleaning Up a List of Posts With Better Component Splitting and More ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Feed)
* [The easiest way to improve your Vue.js application. Part 1](https://codeburst.io/the-easiest-way-to-improve-your-vue-js-application-part-1-51f068652872)
* [Using JSX with Vue and Why You Should Care](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20News)
* [Advanced Vue Component Design](https://adamwathan.me/advanced-vue-component-design/)
* [Compound components](https://forum.vuejs.org/t/compound-components/30139)
* [81: Evan You - Advanced Vue Component Design](https://player.fm/series/series-1401837/81-evan-you-advanced-vue-component-design)
* [A pattern to handle ajax requests in Vuex](https://medium.com/@lachlanmiller_52885/a-pattern-to-handle-ajax-requests-in-vuex-2d69bc2f8984)
* [Six random issues and their solutions in VueJS.](https://medium.com/@stijlbreuk/six-random-issues-and-their-solutions-in-vuejs-b16d470a6462)
* [Creating Multi-root Vue.js Components](https://zendev.com/2018/05/07/multi-root-vue-components.html)
* [Refactoring Vue: Cleaning Up a List of Posts With Better Component Splitting and More ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Feed)
* [Examples of Vue’s Clean Code](https://webdesign.tutsplus.com/tutorials/examples-of-vues-clean-code--cms-29619)
* [Composing computed properties in Vue.js](https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079)
* [Understanding Vue.js Reactivity in Depth with Object.defineProperty()](https://www.timo-ernst.net/blog/2017/07/26/understanding-vue-js-reactivity-depth-object-defineproperty/)
* [Templating in Vue: Separation of Concerns or Separation of Technology or something else?](https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4)
* [Stashing Vue components data](https://medium.com/@kelin2025/components-stash-f2e14603a874)
* [Common mistakes to avoid while working with Vue.js](https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)
* [Creating Reusable Transitions in Vue](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)
* [vue-advanced-workshop](https://github.com/d-levin/vue-advanced-workshop)
* [[vuex Mutations] Single Changes vs. Single Responsibility](https://forum.vuejs.org/t/vuex-mutations-single-changes-vs-single-responsibility/16396)
* [Vue.js — Considerations and Tricks](https://blog.webf.zone/vue-js-considerations-and-tricks-fa7e0e4bb7bb)
* [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)
* [7 Secret Patterns Vue Consultants Don’t Want You to Know](https://www.youtube.com/watch?v=7YZ5DwlLSt8)
* [When VueJS Can't Help You](https://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/)
* [Do it with Elegance: How to Create Data-Driven User Interfaces in Vue](https://blog.rangle.io/how-to-create-data-driven-user-interfaces-in-vue/)
* [Creating Vue.js Component Instances Programmatically](https://css-tricks.com/creating-vue-js-component-instances-programmatically/)
* [Composing Custom Elements With Slots And Named Slots](https://alligator.io/web-components/composing-slots-named-slots/)
* [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)
