fetch("https://catfact.ninja/facts")
.then(response => response.json())
.then(response => console.log(response.data[0].fact))
//https://documenter.getpostman.com/view/1946054/S11HvKSz?version=latest#61c57071-557d-4fc4-a677-ac822e71f35f
let src

fetch("https://aws.random.cat/meow")
.then(response => response.json())
.then(response => {
    src = response.file
    let imagen = document.createElement("IMG")
    imagen.setAttribute("src", src)
    imagen.classList.add("image")
    let container = document.getElementById("container")
    container.append(imagen)
})


