// const variables
const dialog = document.querySelector("#dialog_product");
const edit_btn = document.querySelector("#edit");
const add_btn = document.querySelector("#add");
const dialod_animal = document.querySelector("#animal").value;
const dialog_description = document.querySelector("#description").value;
const dialog_product =  document.querySelector("#cost").value;


let animalData = []


// function hide element
function hide(element){
    element.style.display = "none";
}

// function show
function show(element){
    element.style.display = "block";
}


// on add button
function Onadd(){
    show(dialog);
    hide(edit_btn)

  

}

// on concel 
function Onconcel(){
    hide(dialog)
}


// On add button
function Oncreate(){
    hide(dialog);
    readerdata()
}


function readerdata(){
    let animal = {}
    animal.name = document.querySelector("#animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    // animal.id =( animalNews.length)+1;
    animal.url = document.querySelector("#url").value;

    animalData.push(animal);

    document.querySelector("#animal").value = "";
    document.querySelector("#description").value= "";
    document.querySelector("#cost").value = "";
    document.querySelector("#currency").value = "";
    document.querySelector("#url").value = "";

    saveData();
}


function saveData() {
    localStorage.setItem("animalData", JSON.stringify(animalData));
    loadproduct()
}
  
function loadproduct() {
    let alldata = JSON.parse(localStorage.getItem("animalData"));
    console.log(alldata)

  
}


// function showData(){
//     let table = document.querySelector("#product-container");
    
//     let 
// }


// showData()











