function ubahLatar() {
  const inputWarna = document.getElementById("inputHexa");
  const tombol = document.querySelector("button");

  tombol.addEventListener("click", function () {
    const warnanya = inputWarna.value;
    const warnaBaru = document.getElementById("targetObject");
    warnaBaru.classList.remove("bg-primary");
    warnaBaru.classList.add(`bg-[${warnanya}]`);
    warnaBaru.classList.add(`bg-${warnanya}-500`);
  });
}
