console.log("Hello From Gyanaranjan 👋");

let jokecontent = document.getElementById("jokecont");
let button = document.getElementById("btn");

const url=("https://v2.jokeapi.dev/joke/Programming?type=single");

function jokegenerator(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        let jk = data.joke;
        jokecontent.innerHTML = jk;

    })
}
button.addEventListener("click",jokegenerator)
jokegenerator()