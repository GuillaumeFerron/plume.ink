export default {
  data() {
    return {
      caretPos: 0
    }
  },
  methods: {
    getCaretPosition() {
      $('#page-editable')[0].focus()
      let _range = document.getSelection().getRangeAt(0)
      let range = _range.cloneRange()
      range.selectNodeContents($('#page-editable')[0])
      range.setEnd(_range.endContainer, _range.endOffset)

      this.caretPos = range.toString().length
    },
    restoreCaretPosition() {
      // $('#page-editable')[0].focus()
      // const sel = window.getSelection()
      // sel.collapse($('#page-editable')[0], this.caretPos)
    }
  }
}
