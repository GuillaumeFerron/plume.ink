export default {
  data() {
    return {
      caretPos: 0
    }
  },
  methods: {
    getCaretPosition() {
      this.caretPos = $('#page-editable').caret('pos') + 1
    },
    restoreCaretPosition() {
      $('#page-editable').caret('pos', this.caretPos)
    }
  }
}
