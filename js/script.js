let factSpace = document.getElementById("factSpace")

let new_fact = document.getElementById("new_fact")

const generateBox = (r, file)=>{  //generate the items to append to the box with the facts and the img
  let box = document.createElement("DIV")
  let text = document.createElement("p")
  
  let image = document.createElement("IMG")
  image.setAttribute("src", file)

  image.classList.add("factBox__image")
  text.classList.add("factBox__text")
  box.classList.add("factBox")

  text.textContent= r
  box.append(image)  
  box.append(text)

  factSpace.append(box)
}


//API Key 7e18d3fc-422a-45bb-9618-60726532227d
const generateFact = ()=>{  //get both img and text and generate the box
  fetch("https://catfact.ninja/facts")
  .then(response => response.json())
  .then(res=> {

    fetch("https://api.thecatapi.com/v1/images/search?api_key=7e18d3fc-422a-45bb-9618-60726532227d")
    .then(r =>r.json())
    .then(r => {
      generateBox(res.data[0].fact, r[0].url)
    })
  })
}

const deleteFacts = ()=>{ //delete all children of a box, to swipe the first one and append the new one
  console.log("working")
  while(factSpace.firstChild){
    factSpace.lastChild.remove()
  }
}
const newFact = ()=>{ //generate a new box and delete the old ones
  deleteFacts()
  generateFact()

}
generateFact()

new_fact.addEventListener("click", newFact) 

