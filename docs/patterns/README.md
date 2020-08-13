## Component Declaration

### [Single File Component (a.k.a. SFC)](https://vuejs.org/v2/guide/single-file-components.html) - Most Common

<<< @/docs/.vuepress/components/SFCButton.vue

<SFCButton>SFC</SFCButton>

### String Template (or ES6 Template Literal)

```js
Vue.component('my-btn', {
  template: `
    <button class="btn-primary" @click.prevent="handleClick">
      <slot></slot>(clicked - {{count}})
    </button>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      console.log('clicked', this.count);
    },
  },
});
```

### [Render Function](https://vuejs.org/v2/guide/render-function.html)

```js
Vue.component('my-btn', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      console.log('clicked', this.count);
    },
  },
  render(h) {
    return h(
      'button',
      {
        attrs: {
          class: 'btn-primary',
        },
        on: {
          click: this.handleClick,
        },
      },
      this.$slots.default
    );
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
      <button class="btn-primary" @click.prevent="handleClick">
        {this.$slots.default}(clicked - {{count}})
      </button>
    );
  },
});
```

### [vue-class-component](https://github.com/vuejs/vue-class-component)

```vue
<template>
  <button class="btn-primary" @click.prevent="handleClick">
    <slot></slot>(clicked - {{ count }})
  </button>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default MyBtn extends Vue {
  count = 0;

  handleClick() {
    this.count++;
    console.log('clicked', this.count);
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

- [Official - Single File Component](https://vuejs.org/v2/guide/single-file-components.html)
- [Official - Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
- [7 Ways To Define A Component Template in VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)
- [Writing multiple Vue components in a single file](https://codewithhugo.com/writing-multiple-vue-components-in-a-single-file/)

## Component Communication

### Props and Events

Basically, vue components follow one-way data flow, that is props down ([See official guide](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)) and events up.
Props are read-only data, so it's impossible to change props from child components.
When props change, child components will be rerendered automatically (`props` are a reactive data source).
Child components can only emit events to their direct parent, so that the parent component may change `data`, mapped to the child component's `props`.

```vue
<template>
  <button @click="$emit('click');">{{ text }}</button>
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

```vue
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
    },
  },
};
</script>
```

#### References:

- [Official - Props](https://vuejs.org/v2/guide/components-props.html)
- [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)
- [Creating Custom Inputs With Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
- [Vue Sibling Component Communication](https://vegibit.com/vue-sibling-component-communication/)
- [Managing State in Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
- [Vue.js communication part 2: parent-child components](https://gambo.io/vue-js-communication-part-2-parent-child-components/)
- [Design Patterns for Communication Between Vue.js Components](https://code.tutsplus.com/tutorials/design-patterns-for-communication-between-vuejs-component--cms-32354)

## Component Events Handling

#### References:

- [Official - Custom Events](https://vuejs.org/v2/guide/components-custom-events.html)
- [Leveraging Vue events to reduce prop declarations](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
- [Vue.js Component Hooks as Events](https://alligator.io/vuejs/component-event-hooks/)
- [Creating a Global Event Bus with Vue.js](https://alligator.io/vuejs/global-event-bus/)
- [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)
- [Modifying component data with event emitters in Vue.js](https://blog.logrocket.com/modifying-component-data-with-event-emitters-in-vue-js/)

## Component Conditional Rendering

### Directives (`v-if` / `v-else` / `v-else-if` / `v-show`)

`v-if`

```vue
<h1 v-if="true">Render only if v-if condition is true</h1>
```

`v-if` and `v-else`

```vue
<h1 v-if="true">Render only if v-if condition is true</h1>
<h1 v-else>Render only if v-if condition is false</h1>
```

`v-else-if`

```vue
<div v-if="type === 'A'">Render only if `type` is equal to `A`</div>
<div v-else-if="type === 'B'">Render only if `type` is equal to `B`</div>
<div v-else-if="type === 'C'">Render only if `type` is equal to `C`</div>
<div v-else>Render if `type` is not `A` or `B` or `C`</div>
```

`v-show`

```vue
<h1 v-show="true">
  Always rendered, but it should be visible only if `v-show` conditions is true
</h1>
```

If you want to conditionally render more than one element,
you can use directives(`v-if` / `v-else` / `v-else-if` /`v-show`) on a `<template>` element.
Notice that the `<template>` element is not actually rendered into the DOM. It is an invisible wrapper.

```vue
<template v-if="true">
  <h1>All the elements</h1>
  <p>will be rendered into DOM</p>
  <p>except `template` element</p>
</template>
```

### Render Function or JSX

If you use render functions or JSX in your vue application, you can apply all the techniques, such as the `if else` and `switch case` statements and `ternary` and `logical` operators.

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

- [Official - Conditional Rendering](https://vuejs.org/v2/guide/conditional.html)
- [Difference Between v-if and v-show [With Video at End]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Dynamic Component

### `<component>` with `is` attribute

- [Example 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
- [Example 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
- [Example 3](https://alligator.io/vuejs/dynamic-components/)

```vue
<component :is="currentTabComponent"></component>
```

With the above code example, the rendered component will be destroyed if a different component is rendered in `<component>`. If you want components to keep their instances without being destroyed within the `<component>` tag, you can wrap the `<component>` tag in a `<keep-alive>` tag like so:

```vue
<keep-alive> <component :is="currentTabComponent"></component> </keep-alive>
```

#### References

- [Official - Dynamic Components](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
- [Official - Dynamic & Async Components](https://vuejs.org/v2/guide/components-dynamic-async.html)
- [Dynamic Component Templates with Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Functional Component

A functional component is a special SFC, it is basically a component that is **stateless** (meaning no script tag). It only accepts `props` in order to display data.

In order to make a SFC a functional one you add the the `functional` attribute to the `<template>` tag like this: `<template functional>`

**fp-component.vue**
```vue
<template functional>
  <h1>{{ props.title }}</h1>
  <p>{{ props.description }}</p>
</template>
```
**index.vue**
```vue
<template>
  <fp-component v-bind="{ title: 'FP Component', description: 'Only takes props' }" />
</template>

<script>
import FPComponent from './fp-component';

export default {
  components: {
    FPComponent
  }
}
</script>
```

The benefits of using a **Functional Component** over a **Stateful Component**:

- Faster rendering
- Lighter memory usage

## Renderless Component

A renderless component is basically a component that does not render any HTML to the DOM but inside provides reusable JavaScript logic abstracted into a SFC.

A renderless component makes use of the **Slots API** in order to achieve what we want.

<small><strong>Renderless.vue</strong></small>
```html 
<script>
export default {
  render() {
    return this.$scopedSlots.default({ name: 'John' });
  }
};
</script>
```
The only job of **Renderless.vue** is to provide the prop `name`

<small><strong>App.vue</strong></small>
```html
<template>
  <renderless v-slot="{ name }">
    <p>{{ name }}</p>
  </renderless>
</template>

<script>
import Renderless from './Renderless.vue';

export default {
  components: {
    Renderless,
  }
};
</script>
```

The neat thing about using a Renderless Component is that we can seperate our logic from our markup.

## Composition

#### Library

- [Proppy - Functional props composition for components](https://proppyjs.com/)

### Basic Composition

```vue
<template>
  <div class="component-b"><component-a></component-a></div>
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

- [Official - Composing with Components](https://vuejs.org/v2/guide/#Composing-with-Components)

### Extends

When you want to extend a single vue component

```vue
<template>
  <button class="button-primary" @click.prevent="handleClick">
    {{ buttonText }}
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

- [Official - extends](https://vuejs.org/v2/api/#extends)
- [Extending VueJS Components](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

### Mixins

```js
// closableMixin.js
export default {
  props: {
    isOpen: {
      default: true,
    },
  },
  data: function() {
    return {
      shown: this.isOpen,
    };
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
    },
  },
};
```

```vue
<template>
  <div
    v-if="shown"
    class="alert alert-success"
    :class="'alert-' + type"
    role="alert"
  >
    {{ text }}
    <i class="pull-right glyphicon glyphicon-remove" @click="hide"></i>
  </div>
</template>

<script>
import closableMixin from './mixins/closableMixin';

export default {
  mixins: [closableMixin],
  props: ['text'],
};
</script>
```

#### References:

- [Official - mixins](https://vuejs.org/v2/guide/mixins.html)
- [Practical use of Components and Mixins in Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)


> 2.6.0+

> If you use Vue version above 2.6.0, Vue introduces new unified slot api, which is `v-slot`.
> It replaces the slot and slot-scope attributes, which are deprecated, but have not been removed and are still documented here.
> You can refer to deprecated API [here](https://vuejs.org/v2/guide/components-slots.html#Deprecated-Syntax).

### Slots (Default)

```vue
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

```vue
<template>
  <v-btn>
    <span class="fa fa-user"></span> Login
  </v-btn>
</template>

<script>
import VBtn from './VBtn';

export default {
  components: {
    VBtn,
  },
};
</script>
```

#### References:

- [Official - Slot Content](https://vuejs.org/v2/guide/components-slots.html#Slot-Content)
- [Understanding Component Slots with Vue.js](https://alligator.io/vuejs/component-slots/)
- [Composing Custom Elements With Slots And Named Slots](https://alligator.io/web-components/composing-slots-named-slots/)
- [Writing Abstract Components with Vue.js](https://alligator.io/vuejs/vue-abstract-components/)

### Named Slots

BaseLayout.vue

```vue
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

```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

Vue provides shorthand syntax for named slots.
You can replace [`v-slot:` with `#`](https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand).

#### References

- [Official - Named Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)
- [Vue.js Component Composition with Slots](https://medium.com/@fdietz/vue-js-component-composition-with-slots-eda311579218)

### Scoped Slots

```vue
<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <!-- We have a slot for each todo, passing it the -->
      <!-- `todo` object as a slot prop. -->
      <slot v-bind:todo="todo"> {{ todo.text }} </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
```

```vue
<template>
  <todo-list v-bind:todos="todos">
    <template v-slot:default="{ todo }">
      <span v-if="todo.isComplete">✓</span>
      {{ todo.text }}
    </template>
  </todo-list>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        { text: "todo 1", isComplete: true },
        { text: "todo 2", isComplete: false },
        { text: "todo 3", isComplete: false },
        { text: "todo 4", isComplete: true }
      ]
    };
  }
};
</script>
```

#### References:

- [Official - Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)
- [Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
- [Understanding scoped slots in Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
- [Scoped Component Slots in Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
- [The Trick to Understanding Scoped Slots in Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
- [The Power of Scoped Slots in Vue](https://pineco.de/power-scoped-slots-vue/)
- [Building a list keyboard control component with Vue.js and scoped slots](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)
- [How I finally got my head around Scoped Slots in Vue](https://medium.com/@ross_65916/how-i-finally-got-my-head-around-scoped-slots-in-vue-c37238d4d4cc)

### Render Props

In most cases, you can use scoped slots instead of render props. But, it might be useful in some cases.

with `SFC`

```vue
<template>
  <div id="app"><Mouse :render="__render" /></div>
</template>

<script>
import Mouse from './Mouse.js';
export default {
  name: 'app',
  components: {
    Mouse,
  },
  methods: {
    __render({ x, y }) {
      return (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      );
    },
  },
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
  name: 'Mouse',
  props: {
    render: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
  render(h) {
    return (
      <div style={{ height: '100%' }} onMousemove={this.handleMouseMove}>
        {this.$props.render(this)}
      </div>
    );
  },
};

export default Mouse;
```

#### References:

- [Official - Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
- [Leveraging Render Props in Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
- [Using React-Style Callback Props With Vue: Pros and Cons](https://medium.com/js-dojo/using-react-style-callback-props-with-vue-pros-and-cons-e0ee7455695b)

## Passing Props & Listeners

Sometimes, you may want to pass props and listeners to a child component without having to declare all props for the child component.
You can bind `$attrs` and `$listeners` in the child component and set [`inheritAttrs` to `false`](https://vuejs.org/v2/api/#inheritAttrs) (otherwise both, `div` and `child-component` will receive the attributes)

#### PassingProps.vue

<<< @/docs/.vuepress/components/PassingProps.vue

From the parent component, you can do this:

#### PassedProps.vue

<<< @/docs/.vuepress/components/PassedProps.vue

#### Working Example:

<PassedProps></PassedProps>

#### References:

- [Transparent Wrapper Components in Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Higher Order Component (a.k.a. HOC)

#### References:

- [Higher Order Components in Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
- [Do we need Higher Order Components in Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
- [Higher-Order Components in Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## Provider / Consumer

The Provider / Consumer pattern is very simple, it aims at separating stateful logic from the presentation. We need two components to create this pattern.

**Provider.vue**

```html
<template>
  <div>
    <slot v-bind="{ state, actions }" />
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return {
        label: 'button',
      };
    },
    actions() {
      return {
        click: this.click,
      };
    },
  },
  methods: {
    click() {
      console.log('Clicked');
    },
  },
}
</script>
```

`Provider.vue` is responsible for containing all the stateful logic, we are successfully separating it from the presentation. We are making use of the `Slots API` as a data provider.

**Consumer.vue**

```html
<template functional>
  <div>
    <p>{{ props.state.label }}</p>
    <button @click="props.actions.click">CLICK</button>
  </div>
</template>
```

`Consumer.vue` is responsible for containing the presentation, note that we are using a [Functional Component](#functional-component).

**App.vue**

```html
<template>
  <provider v-slot="{ state, actions }">
    <consumer v-bind="{ state, actions }" />
  </provider>
</template>

<script>
import Provider from './Provider.vue';
import Consumer from './Consumer.vue';

export default {
  components: {
    Provider,
    Consumer,
  },
};
</script>
```

This pattern provides a neat way of allowing us to compose clean and decoupled components. Check out the example on [CodeSandbox](https://codesandbox.io/embed/vue-template-qp83z)

## Dependency injection

Vue supports provide / inject mechanism to provide `object` into all its descendants, regardless of how deep the component hierarchy is, as long as they are in the same parent chain. Notice that `provide` and `inject` bindings are **not** reactive, unless you pass down an observed object.

```vue
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

With the above example component hierarchy, in order to derive data from `parent-component`, you should pass down data(object) as `props` to `child-component` and `grand-child-component`. However, if `parent-component` `provide` data(object), `grand-child-component` can just define `inject` provided object from `parent-component`.

#### References:

- [Official API](https://vuejs.org/v2/api/#provide-inject)
- [Official Guide](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)
- [Component Communication](https://alligator.io/vuejs/component-communication/#provide--inject)
- [Dependency Injection in Vue.js App with TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)

### Provide / Inject

::: tip
You can also use [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)'s `@Provide`, `@Inject`
:::

#### ThemeProvider.vue

<<< @/docs/.vuepress/components/ThemeProvider.vue

#### ThemeButton.vue

<<< @/docs/.vuepress/components/ThemeButton.vue

```vue
<theme-provider>
  <p class="demo">
    <button class="btn">Normal Button</button>
    <theme-button secondary>Themed Button</theme-button>
  </p>
</theme-provider>
```

#### Working Example:

<ThemeProvider>
  <p class="demo">
    <button class="btn">Normal Button</button>
    <ThemeButton secondary>Themed Button</ThemeButton>
  </p>
</ThemeProvider>

## Handling Errors

### `errorCaptured` Hook

#### ErrorBoundary.vue

<<< @/docs/.vuepress/components/ErrorBoundary.vue

#### ThrowError.vue

<<< @/docs/.vuepress/components/ThrowError.vue

```vue
<error-boundary> <throw-error></throw-error> </error-boundary>
```

#### Working Example:

<ErrorBoundary>
  <ThrowError></ThrowError>
</ErrorBoundary>

#### References

- [Handling Errors in Vue with Error Boundaries](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)
- [Example 1](https://jsfiddle.net/Linusborg/z84wspcg/)

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
