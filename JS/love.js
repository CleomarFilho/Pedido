let buttonNot = document.getElementById("button2");

buttonNot.addEventListener("mouseover", function () {
  buttonNot.innerText = "Óbvio que sim";
});

buttonNot.addEventListener("mouseout", function () {
  buttonNot.innerText = "Não";
});
