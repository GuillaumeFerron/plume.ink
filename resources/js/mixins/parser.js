export default {
  computed: {
    /**
     * Entirely parsed content
     *
     * @param str
     * @returns string
     */
    parsedContent() {
      let parsedStr = this.content

      parsedStr = this.divider(parsedStr)

      return parsedStr
    }
  },
  methods: {
    /**
     * 3 dashes or more will be converted in a divider
     *
     * @param str
     * @returns string
     */
    divider(str) {
      return str.replace(new RegExp('-{3,}', 'g'), '<hr>')
    }
  }
}
