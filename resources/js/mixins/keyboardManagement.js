export default {
  data() {
    return {
      cmdPressed: false,
      ctrlPressed: false
    }
  },
  mounted() {
    this.$el.addEventListener('keydown', this.keyListening)
  },
  methods: {
    attemptToSave(e) {
      if ((this.cmdPressed || this.ctrlPressed) && e.keyCode === 83) {
        e.preventDefault()

        this.$store.dispatch('updatePages', this.$store.state.pages.pages)
      }
    },
    attemptToRefresh(e) {
      if ((this.cmdPressed || this.ctrlPressed) && e.keyCode === 82) {
        e.preventDefault()

        if (this.$store.getters.loading && window.confirm('Page updating, your changes could be lost. Refresh ?')) {
          window.location.reload()
        } else if (!this.$store.getters.loading) {
          window.location.reload()
        }
      }
    },
    keyListening(e) {
      this.attemptToSave(e)
      this.attemptToRefresh(e)

      this.clearKeys()

      this.cmdPressed = e.keyCode === 91
      this.ctrlPressed = e.keyCode === 17
    },
    clearKeys() {
      this.cmdPressed = false
      this.ctrlPressed = false
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('keydown', this.keyListening)
  }
}
