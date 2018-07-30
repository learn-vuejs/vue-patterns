<template>
  <p class="demo">
    <button class="btn" :style="{ color: '#fff', backgroundColor: primary && theme.primaryColor }">
      <slot></slot>
    </button>
  </p>
</template>

<script>
export default {
  inject: {
    theme: {
      default: {
        primaryColor: 'darkseagreen',
      },
    },
  },
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
