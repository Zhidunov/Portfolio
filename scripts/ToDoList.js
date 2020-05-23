let input = document.querySelector(".block__form-input");
let btn = document.querySelector(".block__form-btn");
let blockList = document.querySelector(".block__list");

const createNewElement = (text) => {
    let newElem = document.createElement("p");
    newElem.className = "block__list-elem";
    newElem.textContent = text;
    blockList.appendChild(newElem);
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value !== ""){
        createNewElement(input.value);
        input.value = "";
    }
});