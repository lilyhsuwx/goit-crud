import {getIce} from "./appi/getIce"

console.log(getIce);


const listEl = document.querySelector(".list");

getIce().then(res => console.log(res))

function createIceMurcup(arr) {
    const item = arr.map((id, image, calories, description, name, prise, type) => {
        return `<li id="${id}" class="item">
                    <img class="img" src="${image}" alt="">
                    <p>${name}</p>
                    <p>${prise}</p>
                    <p>${type}</p>
                    <p>${description}</p>
                    <p>${calories}</p>
                </li>`
    }).join();
    listEl.innerHTML = item
}

