let input = document.querySelector(".block__form-input");
let btn = document.querySelector(".block__form-btn");
let blockList = document.querySelector(".block__list");

const createNewElement = (text) => {
    let newElem = document.createElement("li");
    let deleteBtn = document.createElement("button");

    deleteBtn.className = "block__list-delete";
    deleteBtn.textContent = "Сделано";

    newElem.className = "block__list-elem";
    newElem.textContent = text;
    newElem.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', ()=>{
        newElem.className = "block__list__elem-delete";
        setTimeout(()=>{
            blockList.removeChild(newElem);
        }, 1000);
        
    })
    blockList.appendChild(newElem);
}

createNewElement('Изучить React Native');
createNewElement('Попробовать Vue.js');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value !== ""){
        createNewElement(input.value);
        input.value = "";
    }
});