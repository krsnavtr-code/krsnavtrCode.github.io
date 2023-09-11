// Show Hide Password and Change Icon
class Password {
    constructor(passwordDiv) {
      this.passwordDiv = document.querySelector(passwordDiv)
      this.passwordField = document.querySelector(`#showHidePw`)
      this.toggle = document.querySelector(`#toggleIcon`)
      this.toggle.addEventListener("click", this.showHidePw.bind(this, this.passwordField, this.toggle))
    }
    showHide(passwordField, toggle) {
      if(passwordField.type == "password") {
        console.log(`password`)
      } else {
        console.log(`text`)
      }
    }
  }