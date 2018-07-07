# vue-patterns

[English](README.md) | [中文](README-zh.md)

有用的Vue模式，技巧，提示和技巧以及有帮助的精选链接。

- [组件声明](#组件声明)
  - [单文件组件 (SFC) - 最常用](#单文件组件-sfc---最常用)
  - [字符串模板 (ES6模板字面值)](#字符串模板-es6模板字面值)
  - [渲染函数](#渲染函数)
  - [JSX](#jsx)
  - [vue-class-component](#vue-class-component)
- [组件通信](#组件通信)
  - [Props 和 Events](#props和events)
- [组件事件处理](#组件事件处理)
- [组件条件渲染](#组件条件渲染)
  - [指令 (v-if / v-else / v-else-if / v-show)](#指令-v-if--v-else--v-else-if--v-show)
  - [JSX](#jsx-1)
- [动态组件](#动态组件)
  - [带is属性的组件](#带is属性的组件)
- [构建](#构建)
  - [基础构建](#基础构建)
  - [扩展](#扩展)
  - [混入](#混入)
  - [插槽 (默认)](#插槽-默认)
  - [Named 插槽](#named-插槽)
  - [Scoped 插槽](#scoped-插槽)
  - [渲染 Props](#渲染-props)
- [传递 Props](#传递-props)
- [高阶组件 (HOC)](#高阶组件-HOC)
- [依赖注入](#依赖注入)
  - [Provide / Inject](#provide--inject)
  - [@Provide / @Inject Decorator](#provide--inject-decorator)
- [错误处理](#错误处理)
  - [错误捕获钩子](#错误捕获钩子)
- [高效提示](#高效提示)
- [有帮助的链接](#有帮助的链接)
  - [重构](#重构)
  - [状态管理](#状态管理)
  - [Vuex](#vuex)
  - [Mobx](#mobx)
  - [无渲染组件](#无渲染组件)
  - [文件结构](#文件结构)
  - [提示技巧](#提示技巧)
  - [路由](#路由)
  - [Anti Patterns](#anti-patterns)
  - [视频 / 音频](#视频--音频)
  - [仓库](#仓库)
  - [付费](#付费)
  - [Typescript](#typescript)
  - [Flowtype](#flowtype)
  - [GraphQL](#graphql)
  - [Misc](#misc)

## 组件声明

### 单文件组件 (SFC) - 最常用

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

### 字符串模板 (ES6模板字面值)

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

### 渲染函数

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

#### 参考:

* [7 Ways To Define A Component Template in VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

## 组件通信

### Props和Events

基本上，vue组件遵循单向数据流，即props向下（[参见官方指南](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow) 和 event向上。
props是只读数据，因此无法从子组件更改props。
当props更改时，子组件将自动重新渲染（props是响应性数据源）。
子组件只能将event事件直接发送到父组件，因此父组件可以更改`data`，映射到子组件的`props`。

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

#### 参考:

* [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)
* [Creating Custom Inputs With Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
* [Vue Sibling Component Communication](https://vegibit.com/vue-sibling-component-communication/)
* [Managing State in Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)

## 组件事件处理

#### 参考:

* [Leveraging Vue events to reduce prop declarations](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
* [Vue.js Component Hooks as Events](https://alligator.io/vuejs/component-event-hooks/)
* [Creating a Global Event Bus with Vue.js](https://alligator.io/vuejs/global-event-bus/)
* [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)

## 组件条件渲染

### 指令 (`v-if` / `v-else` / `v-else-if` / `v-show`)

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

如果要有条件地渲染多个元素，
你可以在`<template>`元素上使用指令（`v-if` /`v-else` /`v-else-if` /`v-show`）。
请注意，`<template>`元素实际上并未渲染为DOM。 它是一个不可见的封装。

```html
<template v-if="true">
  <h1>All the elements</h1>
  <p>will be rendered into DOM</p>
  <p>except `template` element</p>
</template>
```

### JSX

如果在vue应用程序中使用JSX，则可以应用所有技术，例如`if else`和`switch case`语句以及`ternary`和`logical`运算符。

`if else` 声明

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

`switch case` 声明

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

或者你可以使用 `object` 映射来简化 `switch case`

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

三元运算符

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

逻辑运算符

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
#### 参考
* [Difference Between v-if and v-show [With Video at End]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## 动态组件

### 带is属性的组件

* [Example 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
* [Example 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
* [Example 3](https://alligator.io/vuejs/dynamic-components/)

```html
<component :is="currentTabComponent"></component>
```

在上面的代码示例中，如果在`<component>`中呈现不同的组件，则将销毁渲染的组件。 如果你想让组件保持它们的实例而不在`<component>`标签中被销毁，你可以将`<component>`标签包装在`<keep-alive>`标签中，如下所示：

```html
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

#### 参考

* [Dynamic Component Templates with Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## 构建

#### 库

* [Proppy - Functional props composition for components](https://proppyjs.com/)

### 基础构建

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

### 扩展

当你想要扩展单个vue组件时

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

#### 参考:

* [Extending VueJS Components](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

### 混入

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

#### 参考:

* [Practical use of Components and Mixins in Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)


### 插槽 (默认)

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

#### 参考:

* [Understanding Component Slots with Vue.js](https://alligator.io/vuejs/component-slots/)
* [Composing Custom Elements With Slots And Named Slots](https://alligator.io/web-components/composing-slots-named-slots/)
* [Writing Abstract Components with Vue.js](https://alligator.io/vuejs/vue-abstract-components/)

### Named 插槽

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

### Scoped 插槽

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

#### 参考:

* [Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
* [Understanding scoped slots in Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
* [Scoped Component Slots in Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
* [The Trick to Understanding Scoped Slots in Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
* [The Power of Scoped Slots in Vue](https://pineco.de/power-scoped-slots-vue/)

### 渲染 Props

在大多数情况下，您可以使用 `scoped` 插槽而不是渲染 `props`。 但是，在某些情况下它可能有用。

单文件组件(`SFC`)中

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

`JSX`中

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

#### 参考:

* [Leveraging Render Props in Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
* [Use a Vue.js Render Prop!](https://medium.com/js-dojo/use-a-vue-js-render-prop-98880bc44e05)

## 传递 Props

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

#### 参考:

* [Transparent Wrapper Components in Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## 高阶组件 (HOC)

#### 参考:

* [Higher Order Components in Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
* [Do we need Higher Order Components in Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
* [Higher-Order Components in Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## 依赖注入

Vue支持依赖/注入机制，无论组件层次结构有多深，只要它们位于同一父链中，就可以将`object`提供给它的所有后代。 请注意，`provide`和`inject`绑定不是响应式的，除非你传递一个观察对象。

```html
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

在上面的示例组件层次结构中，为了从`parent-component`派生数据，您应该将数据（对象）作为`props`传递给`child-component`和`grand-child-component`。 但是，如果`parent-component``提供`数据（对象），`grand-child-component`只能从`parent-component`定义`inject`提供的对象。

#### 参考:

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

## 错误处理

### 错误捕获钩子

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

#### 参考

* [Handling Errors in Vue with Error Boundaries](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)

## 高效提示

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

## 有帮助的链接

### Style Guide

* [Official - Style Guide](https://vuejs.org/v2/style-guide/)
* [Vue.js Component Style Guide](https://github.com/pablohpsilva/vuejs-component-style-guide)

### 重构

* [Refactoring Vue: Cleaning Up a List of Posts With Better Component Splitting and More ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20Feed)
* [Clean up your Vue modules with ES6 Arrow Functions](https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7)
* [Examples of Vue’s Clean Code](https://webdesign.tutsplus.com/tutorials/examples-of-vues-clean-code--cms-29619)
* [Optimizing Performance with Computed Properties](https://codingexplained.com/coding/front-end/vue-js/optimizing-performance-computed-properties)

### 状态管理

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

### Mobx

* [Build A View-Framework-Free Data Layer Based on MobX — Integration With Vue (1)](https://itnext.io/build-a-view-framework-free-data-layer-based-on-mobx-integration-with-vue-1-8b524b86c7b8)

### 无渲染组件

* [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/)
* [Building Renderless Components to Handle CRUD Operations in Vue.js](https://markus.oberlehner.net/blog/building-renderless-components-to-handle-crud-operations-in-vue/)

#### 示例

* [Renderless Calendar component](https://codesandbox.io/s/v65lx0xvy5)

### 文件结构

* [How you can improve your workflow using the JavaScript console](https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472)
* [How to Structure a Vue.js Project](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)
* [Large-scale Vuex application structures](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
* [Vue.js Application Structure and CSS Architecture](https://markus.oberlehner.net/blog/vue-application-structure-and-css-architecture/)

### 提示技巧

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


### 路由

* [Navigation Guards - Official](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards)
* [Vue Router Navigation Guards with Vuex](https://serversideup.net/vue-router-navigation-guards-vuex/)

### Anti Patterns

* [Chris Fritz - Vue.js Anti-Patterns (and How to Avoid Them)](http://www.fullstackradio.com/87)
* [Common mistakes to avoid while working with Vue.js](https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)
* [Avoid This Common Anti-Pattern In Full-Stack Vue/Laravel Apps](https://vuejsdevelopers.com/2017/08/06/vue-js-laravel-full-stack-ajax/)
* [[Video] - VueNYC - Three Vue code smells, and what you can do about them - Matt Rothenberg (@mattrothenberg)](https://www.youtube.com/watch?v=z5UWVOeIsUQ)

### 视频 / 音频

* [81: Evan You - Advanced Vue Component Design](https://player.fm/series/series-1401837/81-evan-you-advanced-vue-component-design)
* [7 Secret Patterns Vue Consultants Don’t Want You to Know](https://www.youtube.com/watch?v=7YZ5DwlLSt8)

### 仓库

* [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
* [7-secret-patterns](https://github.com/chrisvfritz/7-secret-patterns)
* [Vue.js-2-Design-Patterns-and-Best-Practices](https://github.com/PacktPublishing/Vue.js-2-Design-Patterns-and-Best-Practices)

### 付费

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
