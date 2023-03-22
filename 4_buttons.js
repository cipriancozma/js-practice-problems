const createButtons = () => {
  for (let i = 1; i <= 5; i++) {
    let testId = document.getElementById("test");
    let button = document.createElement("button");
    button.innerHTML = "Button " + i;
    button.onclick = function () {
      alert("This is button " + i);
    };
    testId.appendChild(button);
  }
};

createButtons();
