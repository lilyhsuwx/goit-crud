import {getIceCream} from "./appi/getIceCream";
import {addIceCream} from "./appi/addIceCream";
import { deleteIceCream } from "./appi/deleteIceCream";


const listEl = document.querySelector(".list");
const btnOpen = document.querySelector(".open");
const backdropEl = document.querySelector(".backdrop"); 
const formEl = document.querySelector("form");

getIceCream().then(res => createIceMurcup(res))

function createIceMurcup(arr) {
    const item = arr.map(({id, name, price, calories, image,  description,   type}) => {
        return `<li id="${id}" class="item">
                    <img class="img" src="${image}" alt="${name}">
                    <h2>Назва: ${name}</h2>
                    <p>Опис: ${description}</p>
                    <p>Ціна: ${price}</p>
                    <p>Калорійність: ${calories}</p>
                    <p>Тип: ${type}</p>
                    <div class="wrap">
                        <button class="edit" type="button" data-action="edit">Edit</button>
                        <button class="delete" type="button" data-action="delete">Delete</button>
                    </dev>
                </li>`
    }).join("");
    listEl.innerHTML = item;
}

btnOpen.addEventListener("click",openModal)

function openModal() {
    backdropEl.style.display = "flex";
    backdropEl.style.pointerEvents = "auto"
}

function closeModal() {
    backdropEl.style.display = "none";
    backdropEl.style.pointerEvents = "none"
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal()
    }
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.link.value);
    
    const data = {
        image: e.currentTarget.elements.link.value,
        name: e.currentTarget.elements.name.value,
        price: e.currentTarget.elements.price.value,
        type: e.currentTarget.elements.type.value,
        description: e.currentTarget.elements.desc.value,
        calories: e.currentTarget.elements.calories.value
    }
    addIceCream(data)
    .then(getIceCream)
    .then(res => createIceMurcup(res))
    .finally(() => {
        formEl.reset();
        closeModal();
    });
    
})

listEl.addEventListener("click", (evt) => {

    if (evt.target.nodeName !== "BUTTON") {
        return;
    }
   
    const action = evt.target.dataset.action;
    const li = evt.target.closest("li");
    const id = li.id;


    if(action === "delete") {
        deleteIceCream(id).then(getIceCream).then(res => createIceMurcup(res))
    }

    if(action ===  "edit") {
        openModal() 
    }
    
})