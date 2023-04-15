let red = document.getElementById("red");
let green = document.getElementById("green");
let btn = document.getElementById("btn");

let name = document.getElementById("name").value;
let profesion = document.getElementById("profession").value;
let age = document.getElementById("age").value;

btn.addEventListener("click",  function(){
    if(name=="" || profesion=="" || age=="" ){
        red.style.display = "none";
        green.style.display = "block";
    }
    else{
        red.style.display = "block";
        green.style.display = "none"; 
    }
});


btn.addEventListener("click", (event) => {
    // standard code to prevent your page from reloading
    event.preventDefault();
    addTask(name, profesion, age);
    //modal.style.display = "none";
  });
  
  
  function addTask(name, profesion, age) {
    let tasks = [name, profesion, age];
    let li = document.createElement('li');
    tasks.forEach(function (curr) {
      let p = document.createElement('p');
      p.textContent = curr;
      li.appendChild(p);
    
    })};
