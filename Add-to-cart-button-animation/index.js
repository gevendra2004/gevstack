const button = document.querySelector("button");
let timer;
let timer2;

button.addEventListener("click", function () {
  if (!this.classList.contains("added")) {
    clearTimeout(timer);
    clearTimeout(timer2);
  }

  if (
    this.classList.contains("tapis-roulant") &&
    !this.classList.contains("added")
  ) {
    document.querySelector(
      ".tapis-roulant>div:nth-child(4)>div"
    ).style.animationPlayState = "paused";
    document.querySelector(
      ".tapis-roulant>div:nth-child(2)>div"
    ).style.animationPlayState = "paused";
    this.style.pointerEvents = "none";
    this.classList.add("canceled");
    setTimeout(() => {
      this.style.pointerEvents = "initial";
      this.classList.remove("tapis-roulant");
      this.classList.remove("canceled");
    }, 1000);
  }

  if (!this.classList.contains("tapis-roulant")) {
    this.classList.add("tapis-roulant");
    document.querySelector(
      ".tapis-roulant>div:nth-child(4)>div"
    ).style.animationPlayState = "running";
    document.querySelector(
      ".tapis-roulant>div:nth-child(2)>div"
    ).style.animationPlayState = "running";
    timer = setTimeout(() => {
      this.classList.add("added");
      this.style.pointerEvents = "none";
      timer2 = setTimeout(() => {
        this.classList.remove("added");
        this.classList.remove("tapis-roulant");
        this.style.pointerEvents = "initial";
      }, 1600);
    }, 1400);
  }
});
