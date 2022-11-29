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
    animal.name = document.querySelector("#nameOf_animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    animal.img = document.querySelector("#url").value;

    console.log(animal.name)
    animalData.push(animal);

    document.querySelector("#nameOf_animal").value = "";
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
    showProduct()

  
}

function deleteData(event){
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(index)
    animalData.splice(index, 1);
    saveData();
}

function showProduct(){
    document.querySelector("#product-container").remove();
    let product_container = document.createElement("div");
    product_container.id ="product-container";
    Product_view.appendChild(product_container);
    for(i in animalData){
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












