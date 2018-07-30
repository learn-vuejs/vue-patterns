<template>
  <div>
    <h1>{{title}}</h1>
    <passing-props-child v-bind="$attrs" v-on="$listeners"></passing-props-child>
  </div>
</template>

<script>
import PassingPropsChild from './PassingPropsChild';

export default {
  components: {
    PassingPropsChild,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: 'Hello, Vue!',
    },
  },
};
</script>
