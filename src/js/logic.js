export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.togglePopover = this.togglePopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
  }

  init() {
    this.gui.drawUi();
    this.gui.button.addEventListener("click", this.togglePopover);
    document.addEventListener("click", this.hidePopover);
  }

  hidePopover(e) {
    // Скрываем только если клик не по кнопке и не по popover
    if (e.target !== this.gui.button && !this.gui.popover.contains(e.target)) {
      this.gui.popover.classList.add("hidden");
    }
  }

  togglePopover(e) {
    e.preventDefault();
    e.stopPropagation();

    const position = e.target.getBoundingClientRect();
    const width = e.target.offsetWidth;

    if (this.gui.popover.classList.contains("hidden")) {
      // Показываем popover
      this.gui.popover.classList.remove("hidden");
      this.gui.popoverTitle.innerHTML = "Button";
      this.gui.popover.style.left = `${(position.left + width / 2 - 250 / 2).toFixed()}px`;
      this.gui.popover.style.top = `${(position.top - this.gui.popover.offsetHeight - 5).toFixed()}px`;
    } else {
      // Скрываем popover
      this.gui.popover.classList.add("hidden");
    }
  }
}
