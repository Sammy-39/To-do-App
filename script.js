//to add item to to-do list
var listElement = document.querySelector(".list")

var inputElement = document.querySelector(".input")

var inputForm = document.querySelector(".input-form")

inputForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    var itemValue = inputElement.value;
    var listItem = `<li class="list-group-item item"> <span>${itemValue}</span> <i class="fas fa-trash delete"></i> </li>`
   
    if(itemValue.length){
        listElement.innerHTML += listItem
    }
    addDeleteEvent()

    inputForm.reset()
})


function addDeleteEvent(){
    //to delete an item from the to-do list
    var deleteBtnElement = Array.from(document.querySelectorAll(".delete"))
    deleteBtnElement.forEach((x)=> { 
        x.addEventListener('click',(event)=>{
            var targetItem = event.target.parentElement
            document.querySelector(".list").removeChild(targetItem) 
        })
    })
}

addDeleteEvent();


//to search for items in the to-do list
var searchInputElement = document.querySelector(".search-input")

searchInputElement.addEventListener("keyup", (event)=>{

    var val = event.target.value.trim().toLowerCase()

    //to hide unmatched search results
    Array.from(listElement.children).forEach((item)=>{
        if(!item.innerText.toLowerCase().includes(val)){
            item.classList.add("filter")
        }
    })

    //to show matched search results
    Array.from(listElement.children).forEach((item)=>{
        if(item.innerText.toLowerCase().includes(val)){ 
            item.classList.remove("filter")
        }
    })
})