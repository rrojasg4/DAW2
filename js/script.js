/*fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
.then(response => console.log(response))*/

  fetch("https://aws.random.cat/meow")
.then(response => response.json())
.then(el => console.log(el))
 
 

let container = document.getElementById("container")
let image = document.createElement("IMG")
fetch("https://aws.random.cat/meow", )
.then(r =>r.json())
.then(r =>{
    image.setAttribute("src", r.file)
})

container.append(image)
//https://aws.random.cat/meow */

fetch("https://cat-fact.herokuapp.com/facts")
.then(response => console.log(response))


//fetch("https://cors-anywhere.herokuapp.com/https://aws.random.cat/meow").then(r=>r.json()).then(r=>console.log(r))