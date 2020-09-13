const btn = document.getElementById("btn-1");
const input = document.getElementById("input-text-1");
const content = document.getElementById("input-content");
const clickCountTarget = document.getElementById("click-count");
const inputCountTarget = document.getElementById("input-count");
var clickCount = 0;
var inputCount = 0;
console.log(btn, input, content);

function handleClick() {
    clickCount++;
    console.log("clicked !!!");
    clickCountTarget.innerText = clickCount;
}

function handleInput() {
    inputCount++;
    console.log("inputed !!!", event, event.target, this, this === event.target)
    content.innerText = event.target.value;
    inputCountTarget.innerText = inputCount;
}

// Long way :
//btn.addEventListener("click", handleClick);
//input.addEventListener("input", handleInput);

// Short way :
btn.onclick = handleClick;
input.oninput = handleInput;