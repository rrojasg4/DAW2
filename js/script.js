fetch("https://catfact.ninja/facts")
.then(response => response.json())
.then(response => console.log(response.data[0].fact))

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


