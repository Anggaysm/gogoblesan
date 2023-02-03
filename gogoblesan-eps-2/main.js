const input = document.getElementById("inputValue");
const selek = document.getElementById("selection");
const targetSatu = document.getElementById("targetObject1");
const targetDua = document.getElementById("targetObject2");
function update() {
  const opsi = selek.options.selectedIndex;

  switch (opsi) {
    case 1:
      targetSatu.style.backgroundColor = input.value;
      break;
    case 2:
      targetDua.style.color = input.value;
      break;
    case 3:
      targetDua.style.fontSize = input.value + "px";
      break;
    case 4:
      targetDua.style.fontFamily = input.value;
      break;
    case 5:
      targetSatu.style.width = input.value + "px";
      break;
    case 6:
      targetSatu.style.height = input.value + "px";
      break;
  }
}
