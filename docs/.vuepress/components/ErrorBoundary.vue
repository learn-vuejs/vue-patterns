<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: false,
      errorMessage: '',
    };
  },
  errorCaptured(err, vm, info) {
    this.error = true;
    this.errorMessage = `Sorry, error occured in ${info}`;

    return false;
  },
  render(h) {
    if (this.error) {
      return h('p', { class: 'demo bg-danger' }, this.errorMessage);
    }

    return this.$slots.default[0];
  },
};
</script>
