// only for preventing animations from firing on load
window.addEventListener("DOMContentLoaded",() => {
	const c = new Switch("#switch");
});

class Switch {
	constructor(el) {
		this.el = document.querySelector(el);
		this.el?.addEventListener("change",this.removePristine);
	}
	removePristine() {
		this.removeAttribute("data-pristine");
	}
}