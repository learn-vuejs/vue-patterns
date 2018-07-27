<template>
  <p class="demo">
    <button class="btn btn-danger" @click.prevent="throwError()">Error Thrown Button ({{count}})</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count() {
      throw new Error('error');
    },
  },
  methods: {
    throwError() {
      this.count++;
    },
  },
};
</script>
