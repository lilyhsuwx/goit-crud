export function addIceCream(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    }
    return fetch("http://localhost:3000/iceCreams", options).then(res => res.json());
}

// export function getIce() {
//     return fetch("http://localhost:3000/iceCreams").then(res => res.json());
// }