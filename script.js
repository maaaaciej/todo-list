let button = document.querySelector("#add")
let inputDiv = document.querySelector(".input")
let input = document.querySelector("input")
let container = document.querySelector(".todos")
let lis = document.querySelectorAll("li")

let todo = input.value;
const todos=[];



button.addEventListener("click", function(){
inputDiv.classList.toggle("hide")
})



input.addEventListener("keyup", function(e) {
    if(e.keyCode === 13 && input.value.length>0){
    todos.push(input.value);
    input.value="";
    render()}
    
});



function render(){
    container.innerHTML=""
    for (let i =0; i<todos.length; i++){

    let li =  document.createElement("li")
        li.textContent=todos[i];
        container.appendChild(li);
        li.addEventListener("dblclick", function(){
                    this.parentNode.removeChild(this)
                    todos.splice(i)
            })
        li.addEventListener("click", function(){
                this.classList.toggle("completed")
        })
    }
};




