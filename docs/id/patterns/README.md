## Deklarasi Komponen

### [Satu File Komponen (a.k.a. SFC)](https://vuejs.org/v2/guide/single-file-components.html) - Paling Umum

<<< @/docs/.vuepress/components/SFCButton.vue

<SFCButton>SFC</SFCButton>

### Templat String (atau ES6 Templat Literal)

```js
Vue.component("my-btn", {
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
      console.log("clicked", this.count);
    },
  },
});
```

### [Fungsi Render](https://vuejs.org/v2/guide/render-function.html)

```js
Vue.component("my-btn", {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      console.log("clicked", this.count);
    },
  },
  render(h) {
    return h(
      "button",
      {
        attrs: {
          class: "btn-primary",
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

#### Referensi:

- [Panduan Resmi - Satu File Komponen](https://vuejs.org/v2/guide/single-file-components.html)
- [Panduan Resmi - Fungsi Render & JSX](https://vuejs.org/v2/guide/render-function.html)
- [7 Cara Menempatkan Komponen Pada VueJS](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)
- [Membuat Banyak Komponen Vue Di Satu File](https://codewithhugo.com/writing-multiple-vue-components-in-a-single-file/)

## Komunikasi Komponen

### Props dan Events

Pada dasarnya, Vue komponen mengikuti aliran data satu arah, yaitu props down ([Lihat Panduan Resmi](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)) dan events up.
Props hanya dapat dibaca. Jadi, mustahil untuk mengganti Props dari komponen anak.
Ketika props berubah, komponen anak akan dirender kambali secara otomatis (`props` adalah sumber data reaktif).
Komponen anak hanya dapat meng-emit events langsung ke komponen induk mereka, sehingga komponen induk dapat mengubah `data`, yang ditujukan langsung ke `props` komponen anak.

```vue
<template>
  <button @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: "v-btn",
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
      buttonText: "initial button text",
    };
  },
  methods: {
    handleClick() {
      this.buttonText = `Button clicked ${++this.clickCount}`;
      console.log("clicked", this.buttonText);
    },
  },
};
</script>
```

#### Referensi:

- [Panduan Resmi - Props](https://vuejs.org/v2/guide/components-props.html)
- [Vue.js Pola Komunikasi Komponen](https://alligator.io/vuejs/component-communication/)
- [Membuat Kustom Input Dengan Vue.js](https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/)
- [Komunikasi Komponen Terdekat Pada Vue](https://vegibit.com/vue-sibling-component-communication/)
- [Manangani State Di Dalam Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
- [Vue.js Komunikasi Bagian 2: Induk-Anak Komponen](https://gambo.io/vue-js-communication-part-2-parent-child-components/)
- [Pola Desain Untuk Komunikasi Antar Komponen Vue.js](https://code.tutsplus.com/tutorials/design-patterns-for-communication-between-vuejs-component--cms-32354)

## Menangani Events Pada Komponen

#### Referensi:

- [Panduan Resmi - Kustom Event](https://vuejs.org/v2/guide/components-custom-events.html)
- [Memanfaatkan Vue Events Untuk Mengurangi Deklarasi Prop](https://itnext.io/leveraging-vue-events-to-reduce-prop-declarations-e38f5dce2aaf)
- [Vue.js Komponen Hooks Sebagai Events](https://alligator.io/vuejs/component-event-hooks/)
- [Membuat Global Event Bus Dengan Vue.js](https://alligator.io/vuejs/global-event-bus/)
- [Vue.js Event Bus + Promises](https://medium.com/@jesusgalvan/vue-js-event-bus-promises-f83e73a81d72)
- [Memodifikasi Data Komponen Dengan Event Emitters Di Dalam Vue.js](https://blog.logrocket.com/modifying-component-data-with-event-emitters-in-vue-js/)

## Rendering komponen kondisional

### Directive (`v-if` / `v-else` / `v-else-if` / `v-show`)

`v-if`

```vue
<h1 v-if="true">Render only if v-if condition is true</h1>
```

`v-if` dan `v-else`

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

Jika kamu ingin kondisinonal di render lebih dari satu elemen, kamu dapat menggunakan Directive(`v-if` / `v-else` / `v-else-if` /`v-show`) pada sebuah `<template>` elemen.
Perlu dicatat, `<template>` elemen sebenarya tidak di rendem pada DOM. Dia adalah pembukus yang tidak kelihatan.

```vue
<template v-if="true">
  <h1>All the elements</h1>
  <p>will be rendered into DOM</p>
  <p>except `template` element</p>
</template>
```

### Fungsi Render atau JSX

Jika kamu menggunakan fungsi render atau JSX di aplikasi vue mu, kamu dapat menggunakan semua teknik seperti pernyataan `if else` , pernyataan `switch case`, pernyataan `ternary` dan operator `logical`.

Pernyataan `if else`

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

Pernyataan `switch case`

```jsx
import Info from "./Info";
import Warning from "./Warning";
import Error from "./Error";
import Success from "./Success";

export default {
  data() {
    return {
      type: "error",
    };
  },
  render(h) {
    switch (this.type) {
      case "info":
        return <Info text={text} />;
      case "warning":
        return <Warning text={text} />;
      case "error":
        return <Error text={text} />;
      default:
        return <Success text={text} />;
    }
  },
};
```

atau kamu dapat menggunakan `object` peta untuk menyederhanakan `switch case`

```jsx
import Info from "./Info";
import Warning from "./Warning";
import Error from "./Error";
import Success from "./Success";

const COMPONENT_MAP = {
  info: Info,
  warning: Warning,
  error: Error,
  success: Success,
};

export default {
  data() {
    return {
      type: "error",
    };
  },
  render(h) {
    const Comp = COMPONENT_MAP[this.type || "success"];

    return <Comp />;
  },
};
```

Operator `ternary`

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

Operator `logical`

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

#### Referensi

- [Panduan Resmi - Rendering Kondisional](https://vuejs.org/v2/guide/conditional.html)
- [Perbedaan Antara v-if Dan v-show [Disertai Video Pada Akhir]](https://dzone.com/articles/difference-between-v-if-and-v-show-with-a-video)

## Dinamik Komponen

### `<component>` dengan `is` atribut

- [Contoh 1](https://jsfiddle.net/chrisvfritz/o3nycadu/)
- [Contoh 2](https://jsfiddle.net/chrisvfritz/b2qj69o1/)
- [Contoh 3](https://alligator.io/vuejs/dynamic-components/)

```vue
<component :is="currentTabComponent"></component>
```

Dengan contoh kode diatas, komponen terender akan hilangkan jika sebuah komponen yang berbeda sedang dirender di `<component>`. Jika kamu ingin komponen menjaga instan-nya tanpa menghancurkan mereka di dalam `<component>` tag, kamu dapat membungkus `<component>` tag di dalam sebuah `<keep-alive>` tag seperti berikut:

```vue
<keep-alive> <component :is="currentTabComponent"></component> </keep-alive>
```

#### Referensi

- [Panduan Resmi - Dinamik Komponen](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
- [Panduan Resmi - Dinamik & Async Komponen](https://vuejs.org/v2/guide/components-dynamic-async.html)
- [Dinamik komponen templat Vue.js](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb)

## Fungsional Komponen

Sebuah fungsional komponen adalah sebuah SFC komponen khusus, pada dasarnya adalah sebuah komponen yang **stateless** (artinya tanpa script tag). Dia hanya menerima `props` untuk menampilkan data.

Untuk membuat sebuah fungsional SFC kamu dapat menambahkan `functional` atribut pada `<template>` tag seperti ini: `<template functional>`

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
  <fp-component
    v-bind="{ title: 'FP Component', description: 'Only takes props' }"
  />
</template>

<script>
import FPComponent from "./fp-component";

export default {
  components: {
    FPComponent,
  },
};
</script>
```

Manfaat dari menggunakan sebuah **Fungsional Komponen** ketimbang sebuah **Stateful Komponen**:

- Lebih cepat di render
- Penggunaan memori lebih kecil

## Komponen Tanpa Render

Komponen tanpa render pada dasarnya adalah komponen yang tidak melakukan render HTML apapun pada DOM tetapi di dalam menyediakan logic abstrak JavaScript yang dapat digunakan kembali pada sebuah SFC.

Sebuah komponen tanpa render memanfaatkan **Slots API** untuk mencapai apa yang kita inginkan.

<small><strong>Renderless.vue</strong></small>

```html
<script>
  export default {
    render() {
      return this.$scopedSlots.default({ name: "John" });
    },
  };
</script>
```

Tugas dari **Renderless.vue** hanya menyediakan prop `name`

<small><strong>App.vue</strong></small>

```html
<template>
  <renderless v-slot="{ name }">
    <p>{{ name }}</p>
  </renderless>
</template>

<script>
  import Renderless from "./Renderless.vue";

  export default {
    components: {
      Renderless,
    },
  };
</script>
```

Hal yang menarik tentang menggunakan komponen tanpa render adalah bahwa kita dapat memisahkan logika dari markup.

## Komposisi

#### Referensi

- [Proppy - Komposisi Fungsional Props untuk Komponen](https://proppyjs.com/)

### Komposisi Dasar

```vue
<template>
  <div class="component-b"><component-a></component-a></div>
</template>

<script>
import ComponentA from "./ComponentA";

export default {
  components: {
    ComponentA,
  },
};
</script>
```

#### Referensi

- [Panduan Resmi - Komposisi Dengan Komponen](https://vuejs.org/v2/guide/#Composing-with-Components)

### Extends

Saat kamu ingin memperluas sebuah komponen

```vue
<template>
  <button class="button-primary" @click.prevent="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
import BaseButton from "./BaseButton";

export default {
  extends: BaseButton,
  props: ["buttonText"],
};
</script>
```

#### Referensi:

- [Panduan Resmi - Extends](https://vuejs.org/v2/api/#extends)
- [Memperluas Komponen VueJS](https://medium.com/js-dojo/extending-vuejs-components-42fefefc688b)

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
import closableMixin from "./mixins/closableMixin";

export default {
  mixins: [closableMixin],
  props: ["text"],
};
</script>
```

#### Referensi:

- [Panduan Resmi - Mixins](https://vuejs.org/v2/guide/mixins.html)
- [Latihan menggunakan Komponen Dan Mixins Di Vue JS](http://www.qcode.in/practical-use-of-components-and-mixins-in-vue-js/)

> 2.6.0+

> Jika kamu menggunakan Vue versi 2.6.0 keatas, Vue memperkenalkan slot api terpadu baru, yaitu `v-slot`.
> Dia mengganti slot dan slot-scope atribut, yang telah usang, tetapi belum dihilangkan dan masih terdokumentasi disini.
> Kamu dapat melihat Api yang telah usang [Disini](https://vuejs.org/v2/guide/components-slots.html#Deprecated-Syntax).

### Slots (Default)

```vue
<template>
  <button class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VBtn",
};
</script>
```

```vue
<template>
  <v-btn> <span class="fa fa-user"></span> Login </v-btn>
</template>

<script>
import VBtn from "./VBtn";

export default {
  components: {
    VBtn,
  },
};
</script>
```

#### Referensi:

- [Panduan Resmi - Konten Slot](https://vuejs.org/v2/guide/components-slots.html#Slot-Content)
- [Pemahaman Slot Komponen Dengan Vue.js](https://alligator.io/vuejs/component-slots/)
- [Mixins Kustom Elemen Dengan Slots Dan Penamaan Slots](https://alligator.io/web-components/composing-slots-named-slots/)
- [Membuat Komponen Abstrak Dengan Vue.js](https://alligator.io/vuejs/vue-abstract-components/)

### Penamaan Slots

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

Vue menyediakan penyerhanaan sintak untuk penamaan slots.
Kamu dapat mengganti [`v-slot:` dengan `#`](https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand).

#### Referensi

- [Panduan Resmi - Penamaan Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)
- [Komposisi Komponen Vue.js Dengan Slots](https://medium.com/@fdietz/vue-js-component-composition-with-slots-eda311579218)

### Lingkup Slots

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
  name: "TodoList",
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
    TodoList,
  },
  data() {
    return {
      todos: [
        { text: "todo 1", isComplete: true },
        { text: "todo 2", isComplete: false },
        { text: "todo 3", isComplete: false },
        { text: "todo 4", isComplete: true },
      ],
    };
  },
};
</script>
```

#### Referensi:

- [Panduan Resmi - Lingkup Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)
- [Tempatkan Pikiran Anda sekitar Lingkupan Slot Vue.js](https://medium.com/js-dojo/getting-your-head-around-vue-js-scoped-slots-281bf82a1e4e)
- [Memahami Lingkup Slot pada Vue.js](https://medium.com/corebuild-software/understanding-scoped-slots-in-vue-js-db5315a42391)
- [Lingkup Slot Komponen Di Dalam Vue.js](https://alligator.io/vuejs/scoped-component-slots/)
- [Trik Untuk Memahami Lingkup Slot Di Dalam Vue.js](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)
- [Kekuatan Lingkupan Slots Di Dalam Vue](https://pineco.de/power-scoped-slots-vue/)
- [Membuat Daftar Komponen Kontrol Keyboard Dengan Vue.js Dan Lingkup Slot](https://medium.com/@tkwebdev/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-c74db4fcf84f)
- [Bagaimana Akhirnya Saya Menempatkan Pikiran Sekitar Lingkup Slots DI Dalam Vue](https://medium.com/@ross_65916/how-i-finally-got-my-head-around-scoped-slots-in-vue-c37238d4d4cc)

### Render Props

Dalam kebanyakan kasus, kamu dapat menggunakan lingkupan slot menggantikan render props. Tetapi, mungkin berguna dalam beberapa kasus.

Dengan `SFC`

```vue
<template>
  <div id="app"><Mouse :render="__render" /></div>
</template>

<script>
import Mouse from "./Mouse.js";
export default {
  name: "app",
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

dengan `JSX`

```js
const Mouse = {
  name: "Mouse",
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
      <div style={{ height: "100%" }} onMousemove={this.handleMouseMove}>
        {this.$props.render(this)}
      </div>
    );
  },
};

export default Mouse;
```

#### Referensi:

- [Panduan Resmi - Fungsi Render & JSX](https://vuejs.org/v2/guide/render-function.html)
- [Memanfaatkan Render Props Di Dalam Vue](https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d)
- [Menggunakan React-Style Callback Props Dengan Vue: Pro dan Kontra](https://medium.com/js-dojo/using-react-style-callback-props-with-vue-pros-and-cons-e0ee7455695b)

## Mewariskan Props & Listeners

Terkadang, Kamu ingin mewariskan props dan listener ke komponen anak tanpa harus mendeklasikan semua props untuk komponen anak.
Kamu dapat menggunakan `$attrs` dan `$listeners` di dalam komponen dan menempatkan [`inheritAttrs` ke `false`](https://vuejs.org/v2/api/#inheritAttrs) (jika tidak keduanya, `div` dan `child-component` akan menerima atributnya)

#### PassingProps.vue

<<< @/docs/.vuepress/components/PassingProps.vue

Dari induk komponen, kamu dapat melakukan ini:

#### PassedProps.vue

<<< @/docs/.vuepress/components/PassedProps.vue

#### Contoh Kerja:

<PassedProps></PassedProps>

#### Referensi:

- [Pembungkus Komponen Transparan Di Dalam Vue](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)

## Komponen Tertinggi (a.k.a. HOC)

#### Referensi:

- [Komponen Tertinggi Di Dalam Vue.js](https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176)
- [Apakah Kita Membutuhkan Komponen Tertinggi Di Dalam Vue.js?](https://medium.com/bethink-pl/do-we-need-higher-order-components-in-vue-js-87c0aa608f48)
- [Komponen-Tertinggi Di Dalam Vue.js](https://medium.com/tldr-tech/higher-order-components-in-vue-js-38b500c6d49f)

## Provider / Consumer

Pola Provider / Consumer sangat sederhana, ini bertujuan untuk memisahkan logika stateful dari presentasi. Kita membutuhkan dua komponen untuk membuat pola ini.

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
          label: "button",
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
        console.log("Clicked");
      },
    },
  };
</script>
```

`Provider.vue` bertanggung jawab untuk mengisi semua logika stateful, kita sudah sukses memisahkannya dari presentasi. Kita melakukanya menggunakan `Slots API` sebagai data provider.

**Consumer.vue**

```html
<template functional>
  <div>
    <p>{{ props.state.label }}</p>
    <button @click="props.actions.click">CLICK</button>
  </div>
</template>
```

`Consumer.vue` bertanggung jawab untuk mengisi presentasi, perlu diingat kita menggunakan sebuah [Fungsional Komponen](#functional-component).

**App.vue**

```html
<template>
  <provider v-slot="{ state, actions }">
    <consumer v-bind="{ state, actions }" />
  </provider>
</template>

<script>
  import Provider from "./Provider.vue";
  import Consumer from "./Consumer.vue";

  export default {
    components: {
      Provider,
      Consumer,
    },
  };
</script>
```

Pola ini menyediakan cara yang rapi untuk memungkinkan kita menyusun komponen yang bersih dan terpisah. Lihat contoh di [CodeSandbox](https://codesandbox.io/embed/vue-template-qp83z)

## Dependency injection

Vue mendukung mekanisme provide / inject untuk menyediakan `object` kepada semua turunannya, terlepas dari bagaimana dalam hirarki komponennya, selama mereka masih berada di rantai induk yang sama. Perlu dicatat bahawa ikatan `provide` dan `inject` **tidak** reaktiv, kecuali kamu mewariskan object yang diamati.

```vue
<parent-component>
  <child-component>
    <grand-child-component></grand-child-component>
  </child-component>
</parent-component>
```

Dengan contoh hirarki komponen diatas, untuk mendapatkan data dari `parent-component`, kamu harus mewariskan data (object) sebagai `props` ke `child-component` dan `grand-child-component`. Bagaimanapun, jika `parent-component` `provide` data (object),`grand-child-component` hanya dapat mendefinisikan `inject` object yang tersedia dari `parent-component`.

#### Referensi:

- [Panduan Resmi API](https://vuejs.org/v2/api/#provide-inject)
- [Panduan Resmi](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)
- [Komunikasi Komponen](https://alligator.io/vuejs/component-communication/#provide--inject)
- [Dependency Injection Di Dalam Vue.js App Dengan TypeScript](https://blog.kloud.com.au/2017/03/22/dependency-injection-in-vuejs-app-with-typescript/)

### Provide / Inject

::: tip
Kamu dapat menggunakan [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)'s `@Provide`, `@Inject`
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

#### Contoh Kerja:

<ThemeProvider>
  <p class="demo">
    <button class="btn">Normal Button</button>
    <ThemeButton secondary>Themed Button</ThemeButton>
  </p>
</ThemeProvider>

## Menangani Error

### `errorCaptured` Hook

#### ErrorBoundary.vue

<<< @/docs/.vuepress/components/ErrorBoundary.vue

#### ThrowError.vue

<<< @/docs/.vuepress/components/ThrowError.vue

```vue
<error-boundary> <throw-error></throw-error> </error-boundary>
```

#### Contoh Kerja:

<ErrorBoundary>
  <ThrowError></ThrowError>
</ErrorBoundary>

#### Referensi

- [Mengatasi Error Dalam Vue Dengan Batas Kesalahan](https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b)
- [Contoh 1](https://jsfiddle.net/Linusborg/z84wspcg/)

## Tips Produktivitas

mengamati saat pembuatan

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
