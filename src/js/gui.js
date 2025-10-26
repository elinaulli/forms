export default class Gui {
  constructor() {
    this.widget = document.querySelector(".widget");
    this.inputText = document.querySelector(".input");
    this.form = document.querySelector(".form");
    this.button = document.querySelector(".button_popover");

    this.popover = document.querySelector(".popover");
    this.popoverTitle = this.popover.querySelector("h3");
    this.popoverText = document.querySelector(".popover_text");
  }

  drawUi() {
    this.popoverText.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }
}
