## Declaración de componentes

### [Componentes de un Solo archivo (alias — SFC)](https://es.vuejs.org/v2/guide/single-file-components.html) - Más común

<<< @/docs/.vuepress/components/SFCButton.vue

<SFCButton>SFC</SFCButton>

### Plantilla de cadena de texto

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

### [Función de renderizado](https://es.vuejs.org/v2/guide/render-function.html)

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

### [JSX](https://es.vuejs.org/v2/guide/render-function.html#JSX)

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

#### Referencias:

- [🇪🇸 Documentación - Componentes de un Solo archivo](https://es.vuejs.org/v2/guide/single-file-components.html)
- [🇪🇸 Documentación - Funciones de renderizado y JSX](https://es.vuejs.org/v2/guide/render-function.html)
- [🇺🇸 7 Maneras de definir una plantilla de componente en VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)
- [🇺🇸 Escribir múltiple componentes de Vue en un solo archivo](https://codewithhugo.com/writing-multiple-vue-components-in-a-single-file/)

## Comunicación de componentes

### Propiedades y Eventos

Básicamente, los componentes de vue siguen un flujo en un sólo sentido, esto es propiedades hacia los hijos ([Ver la guía oficial](https://es.vuejs.org/v2/guide/components-props.html#Flujo-de-datos-unidireccional)) y eventos hacia el padre.
Las props son información de solo lectura, así que es imposible cambiar las props desde un componente hijo.
Cuando las props cambian, los componentes hijo serán renderizados de nuevo automáticamente (las `props` son una fuente de información reactiva).
Los componentes hijo solo pueden emitir eventos a sus padres directos, de tal manera que el componente padre puede cambiar su `data`, que está asignada a las `props` del componente hijo.

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

#### Referencias:

- [🇪🇸 Documentación - Propiedades](https://es.vuejs.org/v2/guide/components-props.html)
- [🇺🇸 Patrones de comunicacion de componentes Vue.js](https://alligator.io/vuejs/component-communication/)
- [🇺🇸 Crear controles de entrada personalizados con Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
- [🇺🇸 Comunicación de componentes hermanos en Vue](https://vegibit.com/vue-sibling-component-communication/)
- [🇺🇸 Manejar el Estado en Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
- [🇺🇸 Comunicación de Vue.js parte 2: componentes padre-hijo](https://gambardella.info/2017/09/13/vue-js-communication-part-2-parent-child-components/)
- [🇺🇸 Patrones de diseño para comunicación entre componentes de Vue.js](https://code.tutsplus.com/tutorials/design-patterns-for-communication-between-vuejs-component--cms-32354)

## Eventos personalizados

#### Referencias:

- [🇪🇸 Documentación - Eventos personalizados](https://es.vuejs.org/v2/guide/components-custom-events.html)
- [🇺🇸 Aprovechar los eventos de Vue para reducir declaraciones de propiedades](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
- [🇺🇸 Hooks de componentes de Vue.js como Eventos](https://alligator.io/vuejs/component-event-hooks/)
- [🇺🇸 Crear un Bus de eventos global con Vue.js](https://alligator.io/vuejs/global-event-bus/)
- [🇺🇸 Bus de eventos de Vue.js + Promesas](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)
- [🇺🇸 Modificar la data de un componente con emisores de eventos en Vue.js](https://blog.logrocket.com/modifying-component-data-with-event-emitters-in-vue-js/)

## Renderización Condicional de Componentes

### Directivas (`v-if` / `v-else` / `v-else-if` / `v-show`)

`v-if`

```vue
<h1 v-if="true">Render only if v-if condition is true</h1>
```

`v-if` y `v-else`

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

Si necesitas renderizar condicionalmente más de un elemento, puedes usar las directivas (`v-if` / `v-else` / `v-else-if` /`v-show`) en un elemento `<template>`.
Ten en cuenta que el elemento `<template>` no se renderiza en el DOM. Es un contenedor invisible.

```vue
<template v-if="true">
  <h1>All the elements</h1>
  <p>will be rendered into DOM</p>
  <p>except `template` element</p>
</template>
```

### Función de Renderizado o JSX

Si usas funciones de renderizado o JSX en tu aplicación vue, puedes aplicar todas las técnicas, tales como declaraciones `if else` y `switch case` y operadores `ternarios` y `logicos`.

Declaración `if else`

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

Declaración `switch case`

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

o puedes utilizar un `objeto` diccionario para simplificar el `switch case`

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

Operador `ternario`

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

Operador `lógico`

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

#### Referencias

- [🇪🇸 Documentación - Renderización condicional](https://es.vuejs.org/v2/guide/conditional.html)
- [🇺🇸 Diferencia entre  v-if y v-show [Con video al final]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Componentes Dinámico

### `<component>` con atributo `is`

- [Ejemplo 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
- [Ejemplo 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
- [Ejemplo 3](https://alligator.io/vuejs/dynamic-components/)

```vue
<component :is="currentTabComponent"></component>
```

Con el ejemplo de código de arriba, el componente renderizado será destruido si un componente diferente es asignado en la propiedad `is`. Si deseas que los componentes mantengan sus instancias y su estado sin ser destruido, puedes envolver la etiqueta `<component>` en otra etiqueta `<keep-alive>` de la siguiente manera:

```vue
<keep-alive> <component :is="currentTabComponent"></component> </keep-alive>
```

#### Referencias

- [🇪🇸 Documentación - Componentes Dinámicos](https://es.vuejs.org/v2/guide/components.html#Componentes-dinamicos)
- [🇪🇸 Documentación - Componentes Dinámicos & Asíncronos](https://es.vuejs.org/v2/guide/components-dynamic-async.html)
- [🇺🇸 Plantillas de Componentes Dinámicos con Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Componente Funcional

Un componente funcional es un SFC especial, es básicamente un componente **sin estado** (es decir, sin etiqueta de script). Solamente acepta `props` para mostrar datos.

Para poder hacer un SFC un componente funcional, necesitas agregar el atributo `functional` a la etiqueta de `<template>` de la siguiente manera `<template functional>`

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

Beneficios de usar un **Componente Funcional** sobre un **Componente con Estado**:

- Renderizado más rápido
- Menor uso de memoria

## Componente sin renderizado

Un componente sin renderizado es básicamente un componente que no renderiza ningún HTML en el DOM pero proporciona lógica JavaScript reutilizable abstraída en un SFC.

Un componente sin renderizado utiliza la **API de Slots** para lograr lo que queremos.

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
El único trabajo de **Renderless.vue** es proporcionar la prop `name`

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

Lo bueno de utilizar Componentes sin renderizado es que nos permite separar nuestra lógica del HTML.

## Composición

#### Librería

- [🇺🇸 Proppy - Composición de props funcionales para componentes](https://proppyjs.com/)

### Composición básica

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

#### Referencias

- [🇪🇸 Documentación - Composición con Componentes](https://es.vuejs.org/v2/guide/index.html#Composicion-con-Componentes)

### Extends

Cuando quieres extender un solo componente de vue

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

- [🇪🇸 Documentación - extends](https://es.vuejs.org/v2/api/#extends)
- [🇺🇸 Extendiendo Componentes VueJS](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

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

#### Referencias:

- [🇪🇸 Documentación - mixins](https://es.vuejs.org/v2/guide/mixins.html)
- [🇺🇸 Uso práctico de Componentes y Mixins en Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)


> 2.6.0+

> Si usas Vue en la versión 2.6.0 o mayor, Vue introdujo una nueva y unificada api para slots, que es `v-slot`.
> Reemplaza los atributos slot y slot-scope, que son obsoletos, pero no han sido removidos y se encuentran todavía documentados aquí.
> Puedes hacer referencia la API obsoleta [aquí](https://es.vuejs.org/v2/guide/components-slots.html#Slots-con-Scope).

### Slots (Por defecto)

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

- [🇪🇸 Documentación - Contenido del slot](https://es.vuejs.org/v2/guide/components-slots.html#Slots-con-Scope)
- [🇺🇸 Entendiendo los Slots en componentes con Vue.js](https://alligator.io/vuejs/component-slots/)
- [🇺🇸 Componiendo Elementos Personalizados con Slots y Slots nombrados](https://alligator.io/web-components/composing-slots-named-slots/)
- [🇺🇸 Escribiendo Components Abstractos con Vue.js](https://alligator.io/vuejs/vue-abstract-components/)

### Slots Nombrados

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

Vue proporciona una sintaxis abreviada para slots nombrados.
Puedes remplazar  [`v-slot:` con `#`](https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand)

#### Referencias

- [🇪🇸 Documentación - Slots Nombrados](https://es.vuejs.org/v2/guide/components-slots.html#Slots-Nombrados)
- [🇺🇸 Vue.js Composición de Componentes con Slots](https://medium.com/@fdietz/vue-js-component-composition-with-slots-eda311579218)

### Slots con Scope

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

#### Referencias:

- [🇪🇸 Documentación - Slots con Scope](https://es.vuejs.org/v2/guide/components-slots.html#Slots-con-Scope)
- [🇺🇸 Comprende de pies a cabeza los Slots con Scope en Vue.js](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
- [🇺🇸 Entendiendo Slots con Scope en Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
- [🇺🇸 Componentes y Slots con Scope en Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
- [🇺🇸 El Truco para entender Slots con Scope en Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
- [🇺🇸 El poder de Slots con Scope en Vue](https://pineco.de/power-scoped-slots-vue/)
- [🇺🇸 Construye un Componente lista con Vue.js y Slots con Scope](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)
- [🇺🇸 Cómo finalmente comprendí los Slots con Scope en Vue](https://medium.com/@ross_65916/how-i-finally-got-my-head-around-scoped-slots-in-vue-c37238d4d4cc)

### Props de Renderizado

En la mayoría de los casos, puedes usar slots con scope en vez de props de renderizado. Pero, puede llegar a ser util en algunas ocasiones.

con `SFC`

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

con `JSX`

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

#### Referencias:

- [🇪🇸 Documentación - Funciones de renderizado y JSX](https://es.vuejs.org/v2/guide/render-function.html)
- [🇺🇸 Aprovechando Props de Renderizado en Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
- [🇺🇸 Utilizando Callback Props estilo React con Vue: Pros y Contras](https://medium.com/js-dojo/using-react-style-callback-props-with-vue-pros-and-cons-e0ee7455695b)

## Pasando Props y Listeners

En ciertas ocasiones, es posible que quieras pasar props y listeners a un componente hijo sin tener que declarar todas las props del componente hijo.
Puedes ligar `$attrs` y `$listeners` en el componente hijo y establecer [`inheritAttrs` como `false`](https://es.vuejs.org/v2/api/index.html#inheritAttrs) (de lo contrario, `div` y child-component` recibiran los atributos)

#### PassingProps.vue

<<< @/docs/.vuepress/components/PassingProps.vue

Desde el componente padre, puedes hacer esto:

#### PassedProps.vue

<<< @/docs/.vuepress/components/PassedProps.vue

#### Ejemplo:

<PassedProps></PassedProps>

#### Referencias:

- [🇺🇸 Componentes contenedores Transparentes en Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Componentes de orden superior (alias HOC)

#### Referencias:

- [🇺🇸 Componentes de orden superior en Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
- [🇺🇸 ¿Son necesarios los Componentes de orden superior en Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
- [🇺🇸 Componentes de orden superior en Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## Proveedor / Consumidor
El patrón Proveedor / Consumidor es muy sencillo, su objetivo es separar la lógica de la presentación. Necesitamos dos componentes para crear este patrón.

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

`Provider.vue` es responsable de contener la lógica de estado, estamos separándola de la presentación. Podemos hacer uso de la `API de Slots` como proveedor de la información.

**Consumer.vue**

```html
<template functional>
  <div>
    <p>{{ props.state.label }}</p>
    <button @click="props.actions.click">CLICK</button>
  </div>
</template>
```

`Consumer.vue` es responsable de contener la presentación, toma en cuenta que estamos utilizando un [Componente Funcional](#functional-component).

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

Este patrón proporciona una buena manera que nos permite componer componentes limpios y desacoplados. Puedes ver los ejemplos en [CodeSandbox](https://codesandbox.io/embed/vue-template-qp83z)

## Inyección de Dependencia

Vue tiene un mecanismo para proveer / inyectar un `objeto` a todos sus descendientes, sin importar el nivel de profundidad de la jerarquía del componente, siempre y cuando se encuentre dentro de la misma cadena del padre. Vale mencionar que las ligaduras `provide` e `inject` **no** son reactivas, a menos que pasen un objeto observado.

```vue
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

En el ejemplo de la jerarquía de componentes de arriba, para poder derivar información desde `parent-component`, necesitas pasar el data(object) como `props` a `child-component` y a `grand-child-component`. Sin embargo, si `parent-component` utiliza `provide` con el data(object), el componente `grand-child-component` puede definir `inject` para inyectar el objeto que proviene de `parent-component`.

#### Referencias:

- [🇪🇸 Documentación - Provide / Inject](https://es.vuejs.org/v2/api/index.html#provide-inject)
- [🇪🇸 Documentación- Inyección de dependencia](https://es.vuejs.org/v2/guide/components-edge-cases.html#Inyeccion-de-dependencia)
- [🇺🇸 Comunicación de Componentes](https://alligator.io/vuejs/component-communication/#provide--inject)
- [🇺🇸 Inyección de dependencia en una aplicación Vue.js App con TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)

### Provide / Inject

::: tip
Puedes usar también `@Provide`, `@Inject` de [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
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

#### Ejemplo:

<ThemeProvider>
  <p class="demo">
    <button class="btn">Normal Button</button>
    <ThemeButton secondary>Themed Button</ThemeButton>
  </p>
</ThemeProvider>

## Manejando errores

### Hook `errorCaptured`

#### ErrorBoundary.vue

<<< @/docs/.vuepress/components/ErrorBoundary.vue

#### ThrowError.vue

<<< @/docs/.vuepress/components/ThrowError.vue

```vue
<error-boundary> <throw-error></throw-error> </error-boundary>
```

#### Ejemplo:

<ErrorBoundary>
  <ThrowError></ThrowError>
</ErrorBoundary>

#### Referencias

- [🇺🇸 Manejando errores en Vue con Límites de Error](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)
- [Ejemplo 1](https://jsfiddle.net/Linusborg/z84wspcg/)

## Trucos de productividad

watch al crear un componente

```js
// no hagas esto
created() {
  this.fetchUserList();
},
watch: {
  searchText: 'fetchUserList',
}
```

```js
// mejor haz esto
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```
