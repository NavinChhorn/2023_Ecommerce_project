// const variables
const dialog = document.querySelector("#dialog_product");
const edit_btn = document.querySelector("#edit");
const add_btn = document.querySelector("#add");
const Product_view = document.querySelector("#product-view");
// const delete_btn = document.querySelector("#delete_btn");



let animalData = [
    {
        name:"bird",
        description:"black bird",
        cost:"20$",
        img:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
        
    },
    {
        name:"bird",
        description:"black bird",
        cost:"20$",
        img:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
        
    },
    {
        name:"bird",
        description:"black bird",
        cost:"20$",
        img:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
        
    },
    {
        name:"bird",
        description:"black bird",
        cost:"20$",
        img:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg"
        
    },
]


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
    hide(edit_btn);
    show(add_btn)
    document.querySelector("#nameOf_animal").value = "";
    document.querySelector("#description").value= "";
    document.querySelector("#cost").value = "";
    document.querySelector("#currency").value = "";
    document.querySelector("#url").value = "";


}

// on concel 
function Onconcel(){
    hide(dialog)
}


// On add button
function Oncreate(){
    hide(dialog);
    CreateData()
}


function Onedit(event){
    show(dialog);
    hide(add_btn);
    show(edit_btn);
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    document.querySelector("#nameOf_animal").value = animalData[index].name;
    document.querySelector("#description").value = animalData[index].description;
    document.querySelector("#cost").value = animalData[index].cost;
    document.querySelector("#currency").value = animalData[index].currency;
    document.querySelector("#url").value = animalData[index].img;

    document.querySelector("#edit").addEventListener("click",function(){
        changeData(index);
        index = null;
    });
    console.log(index)
}

function changeData(index){
    hide(dialog)
    let animal = {}
    animal.name = document.querySelector("#nameOf_animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    animal.img = document.querySelector("#url").value;

    animalData[index] = animal;
    saveData();
    console.log(animalData)
}
function deleteData(event){
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    animalData.splice(index, 1);
    saveData();
}


function CreateData(){
    let animal = {}
    animal.name = document.querySelector("#nameOf_animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    animal.img = document.querySelector("#url").value;
    animalData.push(animal);

    
    saveData();
}


function saveData() {
    localStorage.setItem("animalData", JSON.stringify(animalData));
    loadproduct()
}
  
function loadproduct() {
    JSON.parse(localStorage.getItem("animalData"));
    showProduct()

  
}



function showProduct(){
    document.querySelector("#product-container").remove();
    let product_container = document.createElement("div");
    product_container.id ="product-container";
    Product_view.appendChild(product_container);
    for(let i=0 ; i<animalData.length ; i++){
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        product_container.appendChild(card);

        let img = document.createElement("img");
        img.id = "animal";
        img.src = animalData[i].img;
        card.appendChild(img);

        let retail_news = document.createElement("div");
        retail_news.className = "retail_news";
        card.appendChild(retail_news);

        let news = document.createElement("div");
        retail_news.appendChild(news);

        let name = document.createElement("p");
        name.className = "name_animal";
        name.textContent = animalData[i].name;
        news.appendChild(name)

        let cost = document.createElement("p");
        cost.textContent = animalData[i].cost;
        news.appendChild(cost);

        let span = document.createElement("span");
        news.appendChild(span);

        for (let i = 0 ; i<5 ; i++) {
            let img = document.createElement("img");
            img.className = "stars";
            img.src = "../../images/black star.webp";
            span.appendChild(img);
        }

        let action = document.createElement("div");
        action.className = "action";
        retail_news.appendChild(action);
        let img_edit = document.createElement("img");
        img_edit.addEventListener("click",Onedit);
        img_edit.src = "../../images/edit.png";
        action.appendChild(img_edit);

        let img_delete = document.createElement("img");
        img_delete.id = "delete_btn";
        img_delete.src = "../../images/delete.png";
        img_delete.addEventListener("click",deleteData);
        action.appendChild(img_delete);
        
    }
}



showProduct()












