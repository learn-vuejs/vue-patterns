<script>
export default {
  provide: {
    theme: {
      primaryColor: '#3eaf7c',
      secondaryColor: '#1FA2FF'
    },
  },
  render(h) {
    return this.$slots.default[0];
  },
};
</script>
