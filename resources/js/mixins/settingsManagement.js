export default {
  data() {
    return {
      fontSizes: {
        small: '10px',
        regular: '13px',
        large: '16px'
      },
      backgroundColors: {
        white: '#eeeeee',
        dark: '#303437'
      },
      fontColors: {
        white: '#303437',
        dark: '#eeeeee'
      }
    }
  },
  computed: {
    getFontSize() {
      return this.fontSizes[this.$store.state.settings.settings['font-size']]
    },
    getBackgroundColor() {
      return this.backgroundColors[this.$store.state.settings.settings['color-mode']]
    },
    getFontColor() {
      return this.fontColors[this.$store.state.settings.settings['color-mode']]
    }
  }
}
