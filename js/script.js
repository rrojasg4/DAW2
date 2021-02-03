fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
.then(response => console.log(response))

fetch("https://cloud-herokuapp.com/https://purr.objects-us-east-1.dream.io/i/Eu8F6.jpg")
.then(response => response.json())
.then(response => console.log(response))