## Объявление компонентов

### [Однофайловый компонент (сокращенно — SFC)](https://ru.vuejs.org/v2/guide/single-file-components.html) — наиболее распространённый

<<< @/docs/.vuepress/components/SFCButton.vue

<SFCButton>SFC</SFCButton>

### Шаблонные строки (или литералы шаблонов в ES6)

```js
Vue.component('my-btn', {
  template: `
    <button class="btn-primary" @click.prevent="handleClick">
      <slot></slot>(clicked - {{count}})
    </button>
  `,
  data() {
    return {
      text: 'Click me',
    };
  },
  methods: {
    handleClick() {
      this.count++;
      console.log('clicked', this.count);
    }
  }
});
```

### [Render-функция](https://ru.vuejs.org/v2/guide/render-function.html)

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

### [JSX](https://ru.vuejs.org/v2/guide/render-function.html#JSX)

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
    <slot></slot>(clicked - {{count}})
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

#### Ссылки:

- [🇷🇺 Официальная документация — Однофайловые компоненты](https://ru.vuejs.org/v2/guide/single-file-components.html)
- [🇷🇺 Официальная документация — Render-функции и JSX](https://ru.vuejs.org/v2/guide/render-function.html)
- [🇺🇸 7 способов определения шаблона компонента в VueJS ](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

## Взаимодействие компонента

### Входные параметры и события

В целом, компонент Vue следует однонаправленному потоку данных, то есть входные параметры передаются вниз ([см. официальное руководство](https://ru.vuejs.org/v2/guide/components-props.html#%D0%9E%D0%B4%D0%BD%D0%BE%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)), а события — наверх. Входные параметры — это данные только для чтения, поэтому невозможно изменить входные параметры дочерних компонентов. При изменении входных параметров, дочерние компоненты будут автоматически повторно отрендерены (входные параметры являются реактивными источниками данных). Дочерние компоненты могут генерировать событие только к непосредственному родительскому компоненту, так что он может изменять `data`, сопоставляемые с `props` дочернего компонента.

```vue
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

#### Ссылки:

- [🇷🇺 Официальная документация — Входные параметры](https://vuejs.org/v2/guide/components-props.html)
- [🇺🇸 Паттерны взаимодействия компонента Vue.js](https://alligator.io/vuejs/component-communication/)
- [🇺🇸 Создание пользовательских полей ввода с помощью Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
- [🇺🇸 Взаимодействие дочерних компонентов Vue](https://vegibit.com/vue-sibling-component-communication/)
- [🇺🇸 Управление состоянием во Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
- [🇺🇸 Взаимодействие во Vue.js, часть 2: родительский и дочерний компоненты](https://gambardella.info/2017/09/13/vue-js-communication-part-2-parent-child-components/)

## Обработка событий компонента

#### Ссылки:

- [🇷🇺 Официальная документация — Пользовательские события](https://ru.vuejs.org/v2/guide/components-custom-events.html)
- [🇺🇸 Использование событий Vue для сокращения объявлений входных параметров](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
- [🇺🇸 Хуки компонента Vue.js как события](https://alligator.io/vuejs/component-event-hooks/)
- [🇺🇸 Создание глобальной шины событий с помощью Vue.js](https://alligator.io/vuejs/global-event-bus/)
- [🇺🇸 Шина событий Vue.js + Промисы](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)

## Условный рендеринг компонента

### Директивы (`v-if` / `v-else` / `v-else-if` / `v-show`)

`v-if`

```html
<h1 v-if="true">Рендеринг только, если условие v-if равняется true</h1>
```

Использование `v-if` и `v-else`

```html
<h1 v-if="true">Рендеринг только, если условие v-if равняется true</h1>
<h1 v-else>Рендеринг только, если условие v-if равняется false</h1>
```

Использование `v-else-if`

```html
<div v-if="type === 'A'">Рендеринг только, если `type` равняется `A`</div>
<div v-else-if="type === 'B'">Рендеринг только, если `type` равняется `B`</div>
<div v-else-if="type === 'C'">Рендеринг только, если `type` равняется `C`</div>
<div v-else>Рендеринг если `type` не равен ни `A`, ни `B`, ни `C`</div>
```

Использование `v-show`

```html
<h1 v-show="true">Всегда рендерится, но виден только в том случае, если условия `v-show` равняются true</h1>
```

Если вы хотите по условию отобразить более одного элемента, вы можете использовать директивы (`v-if` / `v-else` / `v-else-if` /`v-show`) на элементе `<template>`. Обратите внимание, что элемент `<template>` фактические не будет отображаться в DOM. Это как невидимая обёртка.

```html
<template v-if="true">
  <h1>Все элементы</h1>
  <p>будут отрендерены в DOM,</p>
  <p>за исключением элемента `template`</p>
</template>
```

### Render-функция или JSX

Если вы используете JSX в своем Vue-приложении, то можете применять все техники, например использования выражения `if else` и `switch case`, а также тернарные и логические операторы.

Использование выражения `if else`

```jsx
export default {
  data() {
    return {
      isTruthy: true,
    };
  },
  render(h) {
    if (this.isTruthy) {
      return <h1>Рендеринг, если значение равно true</h1>;
    } else {
      return <h1>Рендеринг, если значение равно false</h1>;
    }
  },
};
```

Использование выражения `switch case`

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

Или можно использовать сопоставление с помощью объекта для упрощения выражений `switch case`

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

Использование тернарного оператора

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
          <h1>Рендеринг, если значение равно true</h1>
        ) : (
          <h1>Рендеринг, если значение равно false</h1>
        )}
      </div>
    );
  },
};
```

Использование логического оператора

```jsx
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  render(h) {
    return <div>{this.isLoading && <h1>Загрузка ...</h1>}</div>;
  },
};
```
#### Ссылки

- [🇷🇺 Официальная документация — Условный рендеринг](https://vuejs.org/v2/guide/conditional.html)
- [🇺🇸 Разница между v-if и v-show [с видео в конце]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Динамический компонент

### `<component>` с атрибутом `is`

- [Пример 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
- [Пример 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
- [Пример 3](https://alligator.io/vuejs/dynamic-components/)

```html
<component :is="currentTabComponent"></component>
```

В приведённом выше примере отрендеренный компонент будет уничтожаться, если другой компонент должен будет рендериться в `<component>`. Если необходимо, чтобы компоненты сохраняли свои экземпляры без их уничтожения в теге `<component>`, можно обернуть `<component>` в тег `<keep-alive>`:

```html
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

#### Ссылки

- [🇷🇺 Официальная документация — Динамические компоненты](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
- [🇷🇺 Официальная документация — Динамические и асинхронные компоненты](https://vuejs.org/v2/guide/components-dynamic-async.html)
- [🇺🇸 Шаблоны динамических компонентов с Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Композиция

#### Библиотека

- [Proppy - Functional props composition for components](https://proppyjs.com/)

### Простой пример композиции

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

#### Ссылки

- [🇷🇺 Официальная документация — Разбиение приложения на компоненты](https://ru.vuejs.org/v2/guide/index.html#%D0%A0%D0%B0%D0%B7%D0%B1%D0%B8%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)

### Расширение компонента

Если вы хотите расширить один Vue-компонент, можно поступить следующим образом:

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

#### Ссылки:

- [🇷🇺 Официальная документация — extends](https://ru.vuejs.org/v2/api/#extends)
- [🇺🇸 Расширение компонентов VueJS](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

### Примеси

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
    {{ text }}
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

#### Ссылки:

- [🇷🇺 Официальная документация — mixins](https://ru.vuejs.org/v2/guide/mixins.html)
- [🇺🇸 Практическое использование компонентов и примисей в Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)

### Слоты (по умолчанию)

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
    Логин
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

#### Ссылки:

- [🇷🇺 Официальная документация — Содержимое слотов](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%81%D0%BB%D0%BE%D1%82%D0%BE%D0%B2)
- [🇺🇸 Понимание слотов компонентов с помощью Vue.js](https://alligator.io/vuejs/component-slots/)
- [🇺🇸 Составление пользовательских элементов с помощью слотов и именованными слотами](https://alligator.io/web-components/composing-slots-named-slots/)
- [🇺🇸 Написание абстрактных компонентов во Vue.js](https://alligator.io/vuejs/vue-abstract-components/)
([🇷🇺 перевод](https://medium.com/devschacht/vue-abstract-components-bc4bc2b89baf))

### Именованные слоты

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
    <h1>Здесь может быть заголовок страницы</h1>
  </template>

  <p>Абзац для основного контента.</p>
  <p>И еще один.</p>

  <template slot="footer">
    <p>Здесь некоторые контактные данные</p>
  </template>
</base-layout>
```

#### Ссылки

- [🇷🇺 Официальная документация — Именованные слоты](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D1%82%D1%8B)

### Слоты с ограниченной областью видимости

```html
<template>
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <!-- У нас есть слот для каждого todo, передавая его -->
      <!-- в объект `todo` в виде входного параметра для слота. -->
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

#### Ссылки:

- [🇷🇺 Официальная документация — Слоты с ограниченной областью видимости](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BB%D0%BE%D1%82%D1%8B-%D1%81-%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%D1%8E-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8)
- [🇺🇸 Разбираемся со слотами с ограниченной областью видимости](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
- [🇺🇸 Понимание слотов с ограниченной областью видимости во Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
- [🇺🇸 Слоты с ограниченной областью видимости компонента во Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
- [🇺🇸 Трюк к пониманию слотов с ограниченной областью видимости во Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
- [🇺🇸 Мощность слотов в Vue](https://pineco.de/power-scoped-slots-vue/)
- [🇺🇸 Создание компонента, управляемого с клавиатуры, списка с помощью Vue.js и слотов с ограниченной областью видимости](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)

### Render Props

В большинстве случаев вы можете использовать слоты с ограниченной областью видимости вместо рендеринга входных параметров. Но в некоторых случаях это может быть полезно.

С однофайловым компонентом `SFC`

```vue
<template>
  <div id="app">
    <Mouse :render="__render"/>
  </div>
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
- {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
```

С использованием `JSX`

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

#### Ссылки:

- [🇷🇺 Официальная документация — Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
- [🇺🇸 Использование рендеринга входных параметров в Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
- [🇺🇸 Использование рендеринга входных параметров Vue.js!](https://medium.com/js-dojo/use-a-vue-js-render-prop-98880bc44e05)

## Передача входных параметров

Иногда вам может понадобиться передать входные параметры и обработчики дочернему компоненту, не объявляя всех входных параметров дочернего компонента. Вы можете привязать `$attrs` и `$listeners` в дочернем компоненте и установить [`inheritAttrs` на `false`](https://ru.vuejs.org/v2/api/#inheritAttrs) (в противном случае `div` и `child-component` получат атрибуты).

#### PassingProps.vue

<<< @/docs/.vuepress/components/PassingProps.vue

Из родительского компонента вы можете сделать следующее:

#### PassedProps.vue

<<< @/docs/.vuepress/components/PassedProps.vue

#### Рабочий пример:

<PassedProps></PassedProps>

#### Ссылки:

- [🇺🇸 Прозрачные компоненты-обёртки во Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Компоненты высшего порядка (они же HOC)

#### Ссылки:

- [🇺🇸 Компоненты высшего порядка Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
- [🇺🇸 Нужны ли нам компоненты высшего порядка порядка во Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
- [🇺🇸 Компоненты высшего порядка во Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)


## Внедрение зависимостей

Vue поддерживает механизм предоставления и внедрения объекта во всех потомки, независимо от глубины иерархии компонентов, при условии, что компоненты находятся в одной и той же цепочке родителей. Обратите внимание, что привязки `provide` и `inject` **не являются*- реактивными, пока вы не передадите наблюдаемый объект.

```vue
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

С приведенной выше иерархией компонентов в качестве примера для получения данных из `parent-component` вам нужно передавать данные (объект) в качестве `props` компоненту `child-component` и компоненту `grand-child-component`. Однако, если `parent-component` предоставляет (`provide`) данные (объект), `grand-child-component` может просто определить свойство `inject` для получения объекта, предоставляемого `parent-component`.

#### Ссылки:

- [🇷🇺 Официальный API](https://vuejs.org/v2/api/#provide-inject)
- [🇷🇺 Официальное руководство](https://ru.vuejs.org/v2/guide/components-edge-cases.html#%D0%92%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9)
- [🇺🇸 Взаимодействие компонента](https://alligator.io/vuejs/component-communication/#provide--inject)
- [🇺🇸 Внедрение зависимостей в приложении Vue.js с TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)


### Provide / Inject

::: tip
Вы также можете использовать `@Provide`, `@Inject` из [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
:::

#### ThemeProvider.vue

<<< @/docs/.vuepress/components/ThemeProvider.vue

#### ThemeButton.vue

<<< @/docs/.vuepress/components/ThemeButton.vue

```vue
<theme-provider>
  <theme-button secondary>Themed Button</theme-button>
</theme-provider>
```

#### Working Example:

<ThemeProvider>
  <ThemeButton secondary>Themed Button</ThemeButton>
</ThemeProvider>

## Обработка ошибок

### Хук `errorCaptured`

#### ErrorBoundary.vue

<<< @/docs/.vuepress/components/ErrorBoundary.vue

#### ThrowError.vue

<<< @/docs/.vuepress/components/ThrowError.vue

```vue
<error-boundary>
  <throw-error></throw-error>
</error-boundary>
```

#### Рабочий пример:

<ErrorBoundary>
  <ThrowError></ThrowError>
</ErrorBoundary>

#### References

- [🇺🇸 Обработка ошибок в Vue с границами ошибок](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)
- [Пример 1](https://jsfiddle.net/Linusborg/z84wspcg/)

## Советы по продуктивности

Наблюдение при создании

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
