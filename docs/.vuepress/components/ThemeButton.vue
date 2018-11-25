<template>
  <button class="btn" :style="{ color: '#fff', backgroundColor: (primary && theme.primaryColor) || (secondary && theme.secondaryColor)  }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inject: {
    theme: {
      default: {},
    },
  },
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
