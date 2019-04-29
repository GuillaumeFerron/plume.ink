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

        if ((this.$store.getters.loading || this.$store.state.pages.modified) && window.confirm('Page modified, your changes could be lost. Refresh ?')) {
          this.reload()
        } else if (!this.$store.getters.loading) {
          this.reload()
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
    },
    reload() {
      $('.reload-container').addClass('rotate')
      this.$store.dispatch('getPages')
        .then((response) => {
          $('.reload-container').removeClass('rotate')
        })
        .catch(() => {
          $('.reload-container').removeClass('rotate')
        })
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('keydown', this.keyListening)
  }
}
