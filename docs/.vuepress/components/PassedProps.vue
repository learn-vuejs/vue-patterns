<template>
  <p class="demo">
    <passing-props
      title="This is from <passing-props />"
      childPropA="This is from <passing-props-child />"
      @click="handleClickPassingPropsChildComponent"
    >
    </passing-props>
  </p>
</template>

<script>
import PassingProps from './PassingProps';

export default {
  components: {
    PassingProps,
  },
  methods: {
    handleClickPassingPropsChildComponent() {
      console.log('This event comes from `<passing-props-child />`');
      alert('This event comes from `<passing-props-child />`');
    },
  },
};
</script>
