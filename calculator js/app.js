let btns = document.getElementsByTagName("button");
let input = document.getElementById("input");
let string = "";
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (btns[i].innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else if (btns[i].innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (btns[i].innerHTML === "C") {
      string = "";
      input.value = string;
    } else {
      string += btns[i].innerHTML;
      input.value = string;
    }
  });
}
