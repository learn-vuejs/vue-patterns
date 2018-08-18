<template>
  <button class="btn btn-primary" @click="$emit('click')">{{childPropA}}</button>
</template>

<script>
export default {
  props: {
    childPropA: String,
  },
};
</script>
