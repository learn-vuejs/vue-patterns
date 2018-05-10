# vue-patterns

Vue patterns, techniques, tips and tricks

## Component Declaration

### Use Single File Component(a.k.a: SFC)

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

### Use JSX

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

### Use String Template

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

### Use [vue-class-component](https://github.com/vuejs/vue-class-component)

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

## Conditional

### Use Directives (`v-if` / `v-else` / `v-else-if` / `v-show`)

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

### Use `<component>` with `is` attribute

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

### Use Basic Composition

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

### Use Extends

When you want to extend a single vue component

```html
<template>
  <button class="button-primary" @click.prevent="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import BaseButton from './BaseButton';

export default {
  extends: BaseButton,
};
</script>
```

### Mixins

```html
<template>

</template>

<script>
const Mixin1 = {};

const Mixin2 = {
  created() {

  }
};

export default {
  mixins: [Mixin1, Mixin2],
};
</script>
```

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

### Use [@Provide / @Inject Decorator](https://github.com/kaorun343/vue-property-decorator)

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

## Render Prop

## Slots (scoped slots)

## Passing Props

## Async

## Flux (Vuex)
