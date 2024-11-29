let userInput = document.getElementById("user_input");
let text = document.querySelector(".text");
let taskButton = document.getElementById("task-btn");

window.onload = function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${item.user} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    newEle.querySelector("i").addEventListener("click", function () {
      remove(item.id, newEle);
    });
  }
};

taskButton.addEventListener("click", function showText() {
  if (userInput.value === "") {
    alert("Please add something");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${userInput.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    const taskId = Date.now();

    let items = {
      id: taskId,
      user: userInput.value,
    };

    userInput.value = "";

    newEle.querySelector("i").addEventListener("click", function () {
      remove(taskId, newEle);
    });
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(items);
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);
  }
});

function remove(id, newEle) {
  newEle.remove();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
