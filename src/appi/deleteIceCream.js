export function deleteIceCream(id) {
     const options = {
        method: "DELETE",
    }
    return fetch(`http://localhost:3000/iceCreams/${id}`, options)
}