// Navbar
// The navbar is CSS-only.

// Switch
window.addEventListener("DOMContentLoaded", () => {
  initSwitch();
});

function initSwitch() {
  const switchInput = document.querySelector("#switch");
  if (!switchInput) return;

  new Switch(switchInput);
}

class Switch {
  constructor(el) {
    this.el = el;
    this.body = document.body;
    this.removePristine = this.removePristine.bind(this);

    this.el.addEventListener("change", this.handleChange.bind(this));
    this.el.addEventListener("focus", this.removePristine);
    this.el.addEventListener("click", this.removePristine);
  }

  handleChange(event) {
    const nextTheme = event.target.checked ? "dark" : "light";
    const currentTheme = this.body.dataset.theme || "light";

    if (currentTheme === nextTheme) {
      return;
    }

    this.body.dataset.transition = nextTheme;
    this.body.classList.add("theme-transitioning");

    if (this.themeTimeout) {
      clearTimeout(this.themeTimeout);
    }
    if (this.cleanupTimeout) {
      clearTimeout(this.cleanupTimeout);
    }

    this.themeTimeout = window.setTimeout(() => {
      this.body.dataset.theme = nextTheme;
    }, 520);

    this.cleanupTimeout = window.setTimeout(() => {
      delete this.body.dataset.transition;
      this.body.classList.remove("theme-transitioning");
    }, 760);
  }

  removePristine() {
    this.el.removeAttribute("data-pristine");
  }
}
