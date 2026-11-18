let person1=document.querySelector("#person1");
let person2=document.querySelector("#person2");
let scoreDiv=document.querySelector("#score");
let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fsScore = Math.floor(Math.random()*100);
    scoreDiv.innerText = `friendship score = ${fsScore} %`;
})
