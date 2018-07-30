<script>
export default {
  provide: {
    theme: {
      primaryColor: '#3eaf7c',
    },
  },
  render(h) {
    return this.$slots.default[0];
  },
};
</script>
