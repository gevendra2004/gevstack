function select(el) {
	document.querySelector(".navsearch").classList.remove("active")
	document.querySelector(".active").classList.remove("active")
	
	el.classList.add("active")
	
	document.body.style.setProperty('--activeclr', el.dataset.clr);
}
function selectsearch() {
	console.log("select")
	const el = document.querySelector(".navsearch")
	el.classList.toggle("active")
	if (el.classList.contains("active")) {
		document.querySelector(".searchbox").focus()
	}
}