# vue-patterns

> This is a fork of https://github.com/learn-vuejs/vue-patterns

> Полезные паттерны, методы, советы и рекомендации, а также тщательно подобранный список ссылок по Vue.

## Переводы

* [简体中文](https://github.com/ZYSzys/vue-patterns-cn)
* [繁體中文](https://github.com/yoyoys/vue-patterns-cht)


## Оглавление

- [Объявление компонента](#component-declaration)
  - [Однофайловый компонент (сокращенно — SFC) — наиболее распространённый](#single-file-component-aka-sfc---most-common)
  - [Шаблонные строки (или литералы шаблонов в ES6)](#string-template-or-es6-template-literal)
  - [Render-функция](#render-function)
  - [JSX](#jsx)
  - [vue-class-component](#vue-class-component)
- [Взаимодействие компонентов](#component-communication)
  - [Входные параметры и события](#props-and-events)
- [Обработка событий компонента](#component-events-handling)
- [Условный рендеринг компонента](#component-conditional-rendering)
  - [Директивы (v-if / v-else / v-else-if / v-show)](#directives-v-if--v-else--v-else-if--v-show)
  - [JSX](#jsx-1)
- [Динамический компонент](#dynamic-component)
  - [компонент с атрибутом](#component-with-is-attribute)
- [Композиция](#composition)
  - [Основная композиция](#basic-composition)
  - [Расширения](#extends)
  - [Примеси](#mixins)
  - [Слоты (по умолчанию)](#slots-default)
  - [Именованные слоты](#named-slots)
  - [Слоты с ограниченной областью видимости](#scoped-slots)
  - [Render Props](#render-props)
- [Передача входных параметров](#passing-props)
- [Компоненты высшего порядка (они же HOC)](#higher-order-component-aka-hoc)
- [Внедрение зависимостей](#dependency-injection)
  - [Provide / Inject](#provide--inject)
  - [Декоратор @Provide / @Inject](#provide--inject-decorator)
- [Обработка ошибок](#handling-errors)
  - [Хук errorCaptured](#errorcaptured-hook)
- [Советы по продуктивности](#productivity-tips)
- [Полезные ссылки](#useful-links)
  - [Рекомендации](#style-guide)
  - [Рефакторинг](#refactoring)
  - [Управление состоянием](#state-management)
  - [Vuex](#vuex)
  - [Mobx](#mobx)
  - [Компоненты](#renderless-component)
  - [Структура каталогов](#folder-structure)
  - [Советы и хитрости](#tips--tricks)
  - [Маршрутизатор](#router)
  - [Антипаттерны](#anti-patterns)
  - [Видео / Аудио](#videos--audios)
  - [Репозитории](#repos)
  - [Платное](#paid)
  - [TypeScript](#typescript)
  - [Flowtype](#flowtype)
  - [GraphQL](#graphql)
  - [Разное](#misc)
- [Книга Fullstack Vue](#fullstack-vue-book)

## Объявление компонентов

### [Однофайловый компонент (сокращенно — SFC)](https://ru.vuejs.org/v2/guide/single-file-components.html) — наиболее распространенный

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
      text: 'Нажми на меня',
    };
  },
  methods: {
    handleClick() {
      console.log('Клик по кнопке');
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

### Шаблонные строки (или литералы шаблонов в ES6)

```js
Vue.component('my-btn', {
  template: `
    <button class="btn-primary" @click.prevent="handleClick">
      {{text}}
    </button>
  `,
  data() {
    return {
      text: 'Нажми на меня',
    };
  },
  methods: {
    handleClick() {
      console.log('Клик по кнопке');
    },
  },
});
```

### [Render-функция](https://ru.vuejs.org/v2/guide/render-function.html)

```js
Vue.component('my-btn', {
  data() {
    return {
      text: 'Нажми на меня',
    };
  },
  methods: {
    handleClick() {
      console.log('Клик по кнопке');
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

### [JSX](https://ru.vuejs.org/v2/guide/render-function.html#JSX)

```jsx
Vue.component('my-btn', {
  data() {
    return {
      text: 'Нажми на меня',
    };
  },
  methods: {
    handleClick() {
      console.log('Клик по кнопке');
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
  text = 'Нажми на меня';

  handleClick() {
    console.log('Клик по кнопке');
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

* [🇷🇺 Официальная документация — Однофайловые компоненты](https://ru.vuejs.org/v2/guide/single-file-components.html)
* [🇷🇺 Официальная документация — Render Functions & JSX](https://ru.vuejs.org/v2/guide/render-function.html)
* [🇺🇸 7 способов определения шаблона компонента в VueJS ](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

## Взаимодействие компонента

### Входные параметры и события

В целом, компонент Vue следует однонаправленному потоку данных, то есть входные параметры передаются вниз ([см. официальное руководство] (https://ru.vuejs.org/v2/guide/components-props.html#%D0%9E%D0%B4%D0%BD%D0%BE%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)), а события — вверх.
Входные параметры — это данные только для чтения, поэтому невозможно изменить входные параметры дочерних компонентов.
При изменении входных параметров, дочерние компоненты будут автоматически повторно отрендерены (входные параметры являются реактивными источниками данных).
Дочерние компоненты могут генерировать событие только к непосредственному родительскому компоненту, так что он может изменять `data`, сопоставляемые с `props` дочернего компонента.

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
      buttonText: 'Стандартное название кнопки',
    };
  },
  methods: {
    handleClick() {
      this.buttonText = `Кнопка нажата ${++this.clickCount}`;
      console.log('Клик по кнопке', this.buttonText);
    }
  }
};
</script>
```

#### Ссылки:

* [🇷🇺 Официальная документация — Входные параметры](https://vuejs.org/v2/guide/components-props.html)
* [🇺🇸 Паттерны взаимодействия компонента Vue.js](https://alligator.io/vuejs/component-communication/)
* [🇺🇸 Создание пользовательских полей ввода с помощью Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
* [🇺🇸 Взаимодействие дочерних компонентов Vue](https://vegibit.com/vue-sibling-component-communication/)
* [🇺🇸 Управление состоянием во Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
* [🇺🇸 Взаимодействие во Vue.js, часть 2: родительский и дочерний компоненты](https://gambardella.info/2017/09/13/vue-js-communication-part-2-parent-child-components/)

## Обработка событий компонента

#### References:

* [🇷🇺 Официальная документация — Пользовательские события](https://ru.vuejs.org/v2/guide/components-custom-events.html)
* [🇺🇸 Использование событий Vue для сокращения объявлений входных параметров](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
* [🇺🇸 Хуки компонента Vue.js как события](https://alligator.io/vuejs/component-event-hooks/)
* [🇺🇸 Создание глобальной шины событий с помощью Vue.js](https://alligator.io/vuejs/global-event-bus/)
* [🇺🇸 Шина событий Vue.js + Промисы](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)

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

If you want to conditionally render more than one element,
you can use directives(`v-if` / `v-else` / `v-else-if` /`v-show`) on a `<template>` element.
Notice that `<template>` element is not actually rendered into DOM. It is an invisible wrapper.


Если вы хотите условно отрендерить более одного элемента,
вы можете использовать директивы (`v-if` /` v-else` / `v-else-if` / `v-show`) в элементе `<template>`.
Обратите внимание, что элемент `<template>` фактически не отображается в DOM. Это невидимая обёртка.

```html
<template v-if="true">
  <h1>Все элменты</h1>
  <p>будут отрендерены в DOM,</p>
  <p>за исключением элемента `template`</p>
</template>
```

### JSX

If you use JSX in your vue application, you can apply all the techniques such as `if else` and `switch case` statement and `ternary` and `logical` operator.

Если вы используете JSX в своем Vue-приложении, то можете применить все техники, например выражение `if else` и `switch case`, а также оператор `ternary` и `logical`.


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

Или вы можете использовать сопоставление в виде `object` для упрощения выражений `switch case`

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

* [🇷🇺 Официальная документация — Условный рендеринг](https://vuejs.org/v2/guide/conditional.html)
* [🇺🇸 Разница между v-if и v-show [с видео в конце]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Динамический компонент

### `<component>` с атрибутом `is`

* [Пример 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
* [Пример 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
* [Пример 3](https://alligator.io/vuejs/dynamic-components/)

```html
<component :is="currentTabComponent"></component>
```

С приведенным выше примером кода отрендеренный компонент будет уничтожен, если другой компонент рендерится в `<component>`. Если вы хотите, чтобы компоненты сохраняли свои экземпляры без их уничтожения в теге `<component>`, вы можете обернуть `<component>` в тег `<keep-alive>` следующим образом:

```html
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

#### Ссылки

* [🇷🇺 Официальная документация — Динамические компоненты](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
* [🇷🇺 Официальная документация — Динамические и асинхронные компоненты](https://vuejs.org/v2/guide/components-dynamic-async.html)
* [🇺🇸 Шаблоны динамических компонентов с Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Композиция

#### Библиотека

* [Proppy - Functional props composition for components](https://proppyjs.com/)

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

* [🇷🇺 Официальная документация — Разбиение приложения на компоненты](https://ru.vuejs.org/v2/guide/index.html#%D0%A0%D0%B0%D0%B7%D0%B1%D0%B8%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)

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

* [🇷🇺 Официальная документация — extends](https://ru.vuejs.org/v2/api/#extends)
* [🇺🇸 Расширение компонентов VueJS](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

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

#### Ссылки:

* [🇷🇺 Официальная документация — mixins](https://ru.vuejs.org/v2/guide/mixins.html)
* [🇺🇸 Практическое использование компонентов и примисей в Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)


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

* [🇷🇺 Официальная документация — Содержимое слотов](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%81%D0%BB%D0%BE%D1%82%D0%BE%D0%B2)
* [🇺🇸 Понимание слотов компонентов с помощью Vue.js](https://alligator.io/vuejs/component-slots/)
* [🇺🇸 Составление пользовательских элементов с помощью слотов и именованными слотами](https://alligator.io/web-components/composing-slots-named-slots/)
* [🇺🇸 Написание абстрактных компонентов во Vue.js](https://alligator.io/vuejs/vue-abstract-components/)
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

* [🇷🇺 Официальная документация — Именованные слоты](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D1%82%D1%8B)

### Scoped Slots

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

* [🇷🇺 Официальная документация — Слоты с ограниченной областью видимости](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BB%D0%BE%D1%82%D1%8B-%D1%81-%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%D1%8E-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8)
* [🇺🇸 Getting Your Head Around Vue.js Scoped Slots](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
* [🇺🇸 Понимание слотов с ограниченной областью видимости во Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
* [🇺🇸 Слоты с ограниченной областью видимости компонента во Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
* [🇺🇸 Трюк к пониманию слотов с ограниченной областью видимости во Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
* [🇺🇸 Мощность слотов в Vue](https://pineco.de/power-scoped-slots-vue/)
* [🇺🇸 Создание компонента, управляемого с клавиатуры, списка с помощью Vue.js и слотов с ограниченной областью видимости](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)

### Render Props

В большинстве случаев вы можете использовать слоты с ограниченной областью видимости вместо рендеринга входных параметров. Но в некоторых случаях это может быть полезно.

С однофайловым компонентом `SFC`

```html
<template>
  <div id="app">
    <Mouse :render="__render" />
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
          Позиция мыши ({x}, {y})
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

С использованием `JSX`

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

#### Ссылки:

* [🇷🇺 Официальная документация — Render Functions & JSX](https://vuejs.org/v2/guide/render-function.html)
* [🇺🇸 Использование рендеринга входных параметров в Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
* [🇺🇸 Использование рендеринга входных параметров Vue.js!](https://medium.com/js-dojo/use-a-vue-js-render-prop-98880bc44e05)

## Передача входных параметров

Иногда вам может понадобиться передать входные параметры и обработчики дочернему компоненту, не объявляя всех входных параметров дочернего компонента.
Вы можете привязать `$attrs` и `$listeners` в дочернем компоненте и установить [`inheritAttrs` на `false`](https://ru.vuejs.org/v2/api/#inheritAttrs) (в противном случае `div` и `child-component` получат атрибуты).

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
      default: 'Привет, Vue!'
    }
  }
};
</script>
```

Из родительского компонента вы можете сделать следующее:

```html
<template>
  <passing-props-sample
    title="Привет, передача входных параметров"
    childPropA="Эти реквизиты будут правильно сопоставлены c <child-component />"
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
      console.log('Клик по кнопке в дочернем компоненте');
    }
  }
};
</script>
```

#### Ссылки:

* [🇺🇸 Прозрачные компоненты-обёртки во Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Компоненты высшего порядка (они же HOC)

#### Ссылки:

* [🇺🇸 Компоненты высшего порядка Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
* [🇺🇸 Нужны ли нам компоненты более высокого порядка в Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
* [🇺🇸 Компоненты высшего порядка во Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## Внедрение зависимостей

Vue поддерживает механизм предоставления и внедрения объекта во всех потомки, независимо от глубины иерархии компонентов, при условии, что компоненты находятся в одной и той же цепочке родителей. Обратите внимание, что привязки `provide` и `inject` **не являются** реактивными, пока вы не передадите наблюдаемый объект.

```html
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

С приведенной выше иерархией компонентов в качестве примера для получения данных из `parent-component` вам нужно передавать данные (объект) в качестве `props` компоненту `child-component` и компоненту `grand-child-component`. Однако, если `parent-component` предоставляет (`provide`) данные (объект), `grand-child-component` может просто определить свойство `inject` для получения объекта, предоставляемого `parent-component`.

#### Ссылки:

* [🇷🇺 Официальный API](https://vuejs.org/v2/api/#provide-inject)
* [🇷🇺 Официальное руководство](https://ru.vuejs.org/v2/guide/components-edge-cases.html#%D0%92%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9)
* [🇺🇸 Взаимодействие компонента](https://alligator.io/vuejs/component-communication/#provide--inject)
* [🇺🇸 Внедрение зависимостей в приложении Vue.js с TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)

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

### [Декоратор @Provide / @Inject](https://github.com/kaorun343/vue-property-decorator)

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

## Обработка ошибок

### Хук `errorCaptured`

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
    this.errorMessage = `${err.stack}\n\nобнаружена в методе ${info} компонента`;

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

#### Примеры

* [Пример 1](https://jsfiddle.net/Linusborg/z84wspcg/)

#### Ссылки

* [🇺🇸 Обработка ошибок в Vue с границами ошибок](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)

## Советы по продуктивности

Наблюдение при создании

```js
// Не делайте так
created() {
  this.fetchUserList();
},
watch: {
  searchText: 'fetchUserList',
}
```

```js
// Делайте так
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```

## Полезные ссылки

### Руководство по стилю

* [🇷🇺 Официальная документация — Рекомендации](https://ru.vuejs.org/v2/style-guide/)
* [🇷🇺 Руководство по разработке компонентов Vue.js](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-RU.md)

### Рефакторинг

* [🇺🇸 Рефакторинг Vue: очистка списка сообщений с лучшим разделением компонентов и с большим количеством ES6](https://mattstauffer.com/blog/refactoring-vue-cleaning-up-a-list-of-posts-with-better-component-splitting-and-more-es6/)
* [🇺🇸 Очистка модулей Vue с помощью стрелочных функций ES6](https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7)
* [🇺🇸 Примеры чистого кода Vue](https://webdesign.tutsplus.com/tutorials/examples-of-vues-clean-code--cms-29619)
* [🇺🇸 Оптимизация производительности с помощью вычисляемых свойств](https://codingexplained.com/coding/front-end/vue-js/optimizing-performance-computed-properties)
* [🇺🇸 Упрощение компонентов с помощью вычисляемых сеттеров](https://tahazsh.com/vuebyte-computed-setters)

### Управление состоянием

* [🇺🇸 Управление состоянием во Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)

### Vuex

* [🇺🇸 Разделение модулей Vuex с паттерном «Посредник»](https://itnext.io/decouple-vuex-actions-with-the-mediator-pattern-58a8879de1b4)
* [🇺🇸 Геттеры Vuex великолепны, но не злоупотребляйте ими](https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414)
* [🇺🇸 Повторное использование функций-мутаций Vuex](https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b)
* [🇺🇸 Паттерн для обработки AJAX-запросов в Vuex](https://medium.com/@lachlanmiller_52885/a-pattern-to-handle-ajax-requests-in-vuex-2d69bc2f8984)
* [🇺🇸 Одиночные изменения мутацией Vuex vs. принципа единственной ответственности](https://forum.vuejs.org/t/vuex-mutations-single-changes-vs-single-responsibility/16396)
* [🇺🇸 Компоненты и способы взаимодействия в Vue и Vuex](https://dzone.com/articles/how-do-components-interact-in-vue-and-what-is-vuex)
* [🇺🇸 Почему VueX — идеальный интерфейс между фронтендом и API](https://codeburst.io/why-vuex-is-the-perfect-interface-between-frontend-and-api-271d92161709)
* [🇺🇸 Композиция действий с Vuex](https://codeburst.io/composing-actions-with-vuex-b63466264a37)
* [🇺🇸 Как создавать сложные, крупномасштабные приложения Vue.js с Vuex](https://code.tutsplus.com/tutorials/how-to-build-complex-large-scale-vuejs-applications-with-vuex--cms-30952)
* [🇺🇸 Должен ли я хранить данные в Vuex?](https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/)
* [🇺🇸 В общем, это как использовать v-model с Vuex. Вычисляемый сеттер в действии.](https://itnext.io/anyway-this-is-how-to-use-v-model-with-vuex-computed-setter-in-action-320eb682c976)

### MobX

* [🇺🇸 Создайте уровень данных представления без фреймворка на основе MobX — интеграция с Vue (1)](https://itnext.io/build-a-view-framework-free-data-layer-based-on-mobx-integration-with-vue-1-8b524b86c7b8)

### Компоненты без рендеринга

* [🇺🇸 Компоненты без рендеринга во Vue.js](https://adamwathan.me/renderless-components-in-vuejs/) ([перевод](https://webformyself.com/renderless-components-rabota-s-komponentami-vo-vue-js/))
* [🇺🇸 Создание компонентов без рендеринга для обработки CRUD-операций во Vue.js](https://markus.oberlehner.net/blog/building-renderless-components-to-handle-crud-operations-in-vue/)

#### Примеры

* [Компонент календаря без рендеринга](https://codesandbox.io/s/v65lx0xvy5)

### Структура каталогов

* [🇺🇸 Как улучшить рабочий процесс с помощью консоли JavaScript](https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472) ([перевод](https://habr.com/company/ruvds/blog/414375/))
* [🇺🇸 Как структурировать проект Vue.js](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)
* [🇺🇸 Крупномасштабная структура приложения Vuex](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
* [🇺🇸 Структура приложения Vue.js и архитектура CSS](https://markus.oberlehner.net/blog/vue-application-structure-and-css-architecture/)

### Советы и хитрости

* [🇺🇸 Как создать Vue-компоненты, как и профессионал 😎](https://blog.bitsrc.io/how-to-build-vue-components-like-a-pro-fd89fd4d524d)
* [🇺🇸 4 совета по работе с Vue.js(https://itnext.io/four-tips-for-working-with-vue-js-b362d97de852) ([перевод](https://habr.com/post/352540/))
* [🇺🇸 Советы для непритязательного разработчика VueJS](https://medium.com/@denny.headrick/tips-from-a-lowly-vuejs-developer-381b6956aece)
* [🇺🇸 Throttling and Debouncing Events with Vue.js and lodash](https://alligator.io/vuejs/lodash-throttle-debounce/)
* [🇺🇸 Возможны ли частично применимые функции в обработчиках событий?](https://forum.vuejs.org/t/are-partially-applied-functions-in-event-handlers-possible/10187)
* [🇺🇸 Vue.js — соображения и трюки](https://blog.webf.zone/vue-js-considerations-and-tricks-fa7e0e4bb7bb) ([перевод](https://medium.com/devschacht/vue-js-considerations-and-tricks-58ec768ac237
))
* [🇺🇸 Шесть случайных пробел и их решения в VueJS](https://medium.com/@stijlbreuk/six-random-issues-and-their-solutions-in-vuejs-b16d470a6462)
* [🇺🇸 Когда VueJS не может помочь вам](https://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/)
* [🇺🇸 То, что не будет работать с использованием Vue](https://winnercrespo.com/things-that-wont-work-using-vue/)
* [🇺🇸 Трюк#15 Отложение выполнение с _.debounce](https://medium.com/vuejs-tips/tip-15-delay-execution-with-debounce-6a93b759bb06)

### Маршрутизатор

* [🇺🇸 Навигационные хуки - Официальная документация](https://router.vuejs.org/ru/guide/advanced/navigation-guards.html#%D0%B3n%D0%BE%D0%B1%D0%B0n%D1%8C%D0%BD%D1%8B%D0%B5-%D1%85%D1%83%D0%BA%D0%B8)
* [🇺🇸 Навигационные хуки Vue-маршрутизатора с Vuex](https://serversideup.net/vue-router-navigation-guards-vuex/)

### Антипаттерны

* [🇺🇸 Chris Fritz - Антипаттерны Vue.js (и как их избежать)](http://www.fullstackradio.com/87)
* [🇺🇸 Распространённые ошибки, которые следует избегать при работе с Vue.js](https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)
* [🇺🇸 Избегайте этого распространённого антипаттерна в приложениях с полным стеком Vue / Laravel](https://vuejsdevelopers.com/2017/08/06/vue-js-laravel-full-stack-ajax/)
* [🇺🇸 [Видео] - VueNYC - Три запаха кода Vue, и что вы можете с ними поделать- Matt Rothenberg (@mattrothenberg)](https://www.youtube.com/watch?v=z5UWVOeIsUQ)

### Видео / Аудио

* [🇺🇸 81: Evan You - Продвинутый дизайн Vue-компонента](https://player.fm/series/series-1401837/81-evan-you-advanced-vue-component-design)
* [🇺🇸 7 секретных шаблонов, про которые Vue-консультанты не хотели бы, чтобы вы о них знали](https://www.youtube.com/watch?v=7YZ5DwlLSt8)

### Repos

* [🇺🇸 vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
* [🇺🇸 7-secret-patterns](https://github.com/chrisvfritz/7-secret-patterns)
* [🇺🇸 Vue.js-2-Design-Patterns-and-Best-Practices](https://github.com/PacktPublishing/Vue.js-2-Design-Patterns-and-Best-Practices)

### Платное

* [🇺🇸 Продвинутый дизайн Vue-компонентов](https://adamwathan.me/advanced-vue-component-design/)
* [🇺🇸 Продвинутые возможности Vue.js с нуля](https://frontendmasters.com/courses/advanced-vue/)


### TypeScript

* [🇺🇸 Vue + TypeScript: A Match Made in Your Code Editor](https://css-tricks.com/vue-typescript-a-match-made-in-your-code-editor/)
* [🇺🇸 Написание компонентов на основе классов с помощью Vue.js и TypeScript](https://alligator.io/vuejs/typescript-class-components/)

### Flowtype

### GraphQL

---

### Разное

* [🇺🇸 Creating an Interpose Vue component from a React implementation](https://itnext.io/creating-an-interpose-vue-component-from-a-react-implementation-80d367a695c6)
* [🇺🇸 Составление вычисляемых свойств в Vue.js](https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079)
* [🇺🇸 4 AJAX-паттерна для приложений Vue.js](https://medium.com/js-dojo/4-ajax-patterns-for-vue-js-apps-add915fc9168)
* [🇺🇸 3 шаблона разделения кода для VueJS и Webpack](https://medium.com/js-dojo/3-code-splitting-patterns-for-vuejs-and-webpack-b8fff1ea0ba4)
* [🇺🇸 Самый простой способ улучшить ваше приложение Vue.js. Часть 1](https://codeburst.io/the-easiest-way-to-improve-your-vue-js-application-part-1-51f068652872)
* [🇺🇸 Использование JSX с Vue и почему вам должно быть не всё равно](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Vue.js%20News)
* [🇺🇸 Составные компоненты](https://forum.vuejs.org/t/compound-components/30139)
* [🇺🇸 Создание многоуровневых компонентов Vue.js](https://zendev.com/2018/05/07/multi-root-vue-components.html)
* [🇺🇸 Понимание реактивности Vue.js в подробностях с помощью Object.defineProperty()](https://www.timo-ernst.net/blog/2017/07/26/understanding-vue-js-reactivity-depth-object-defineproperty/)
* [🇺🇸 Шаблонизация в Vue: разделение проблем или разделение технологий или что-то еще?](https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4)
* [🇺🇸 Хранение данных компонентов Vue](https://medium.com/@kelin2025/components-stash-f2e14603a874)
* [🇺🇸 Создание многоразовых переходов во Vue](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)
* [🇺🇸 vue-advanced-workshop](https://github.com/d-levin/vue-advanced-workshop)
* [🇺🇸 Сделайте элегантно: Как создать пользовательские интерфейсы, основанные на данных во Vue](https://blog.rangle.io/how-to-create-data-driven-user-interfaces-in-vue/)
* [🇺🇸 Создание экземпляров компонентов Vue.js программным путём](https://css-tricks.com/creating-vue-js-component-instances-programmatically/)
* [🇺🇸 Управление разрешениями пользователей в приложении Vue.js](https://dzone.com/articles/managing-user-permissions-in-a-vuejs-app)
* [🇺🇸 Рендеринг функциональных компонентов во Vue.js](https://alligator.io/vuejs/render-functional-components/)
* [🇺🇸 Проход по свойствам объекта](https://codingexplained.com/coding/front-end/vue-js/looping-object-properties)
* [🇺🇸 Отмена асинхронных операций в Vue.js](https://codeburst.io/cancelling-async-operations-in-vue-js-3d0f3c2de598)
* [🇺🇸 Стили с ограниченной областью видимости с помощью v-html](https://medium.com/@brockreece/scoped-styles-with-v-html-c0f6d2dc5d8e)
* [🇺🇸 Постраничная навигация с помощью с Vuejs](https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b)
* [🇺🇸 Функция render() — что такое аргумент h](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/) ([перевод](https://medium.com/devschacht/функция-render-что-такое-аргумент-h-bfc357a82160))
* [🇺🇸 Как писать Vue-компоненты, которые хорошо взаимодействуют](https://vuejsdevelopers.com/2018/06/18/vue-components-play-nicely/) ([перевод](https://medium.com/devschacht/vue-components-play-nicely-cea6e41afe92))
* [🇺🇸 Создание адаптивных компонентов Vue с помощью ResizeObserver](https://itnext.io/making-adaptive-vue-components-with-resizeobserver-123b5ebb20ae)
* [🇺🇸 Обязательное руководство по формам во Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-7536bfa374e0)
* [🇺🇸 Хороший, спорный, злой Vue.js](https://medium.com/@Pier/vue-js-the-good-the-meh-and-the-ugly-82800bbe6684) ([перевод](https://proglib.io/p/from-react-to-vue/))
* [🇺🇸 Динамические компоненты шаблона Vue.js](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/)
* [🇺🇸 Продвинутые концепты Vue.js: примиси, пользовательские директивы, фильтры, переходы и управление состоянием](https://blog.logrocket.com/advanced-vue-js-concepts-mixins-custom-directives-filters-transitions-and-state-management-ca6955905156)
* [🇺🇸 Введение паттерна одиночного элемента](https://medium.freecodecamp.org/introducing-the-single-element-pattern-dfbd2c295c5d)
* [🇺🇸 Управление DOM за пределами вашего приложения Vue.js с помощью portal-vue](https://alligator.io/vuejs/portal-vue/)
* [🇺🇸 Добавление i18n и управление переводами сайта на Vue.js](https://medium.com/hypefactors/add-i18n-and-manage-translations-of-a-vue-js-powered-website-73b4511ca69c)
* [🇺🇸 Управление сложными ожиданиями в пользовательских веб-интерфейсах](https://medium.com/@fkadev/managing-complex-waiting-experiences-on-web-uis-29534d2d92a8)

## Книга Fullstack Vue

[![Fullstack Vue Book](https://www.fullstack.io/assets/images/vue-github.png)](https://gumroad.com/a/462206067)
