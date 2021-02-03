fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
.then(response => console.log(response))

let src

fetch("https://aws.random.cat/meow")
.then(response => response.json())
.then(response => {
    src = response.file
    let imagen = document.createElement("IMG")
    imagen.setAttribute("src", src)
    let container = document.getElementById("container")
    container.append(imagen)
})


