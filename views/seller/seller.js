// const variables
const dialog = document.querySelector("#dialog_product");
const edit_btn = document.querySelector("#edit");
const add_btn = document.querySelector("#add");
const product_view = document.querySelector("#product-view");
let dialog_header = document.querySelector("#dialog_header");
// const delete_btn = document.querySelector("#delete_btn");



let animalData = [
    {
        name:"Lion",
        description:"black bird",
        cost:"20",
        currency:"$",
        source:"https://www.istockphoto.com/search/2/image?phrase=baby+lion",
        img:"https://wallpaperaccess.com/full/1137899.jpg"
        
    },
    {
        name:"Bird",
        description:"black bird",
        cost:"20",
        currency:"$",
        source:"https://www.scientificamerican.com/article/silent-skies-billions-of-north-american-birds-have-vanished/",
        img:"https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=590&h=800&756A88D1-C0EA-4C21-92BE0BB43C14B265",
        
    },
    {
        name:"Snake",
        description:"black bird",
        cost:"20",
        currency:"$",
        source:"https://www.bumrungrad.com/en/health-blog/jan-2018/to-do-if-snake-bites",
        img:"https://www.bumrungrad.com/getattachment/9ce46017-91e6-4d27-a6d8-c8867ac40698/Cobra.jpg"
        
    },
    {
        name:"Rabbet",
        description:"Red rabbet",
        cost:"20",
        currency:"$",
        source:"https://mom.com/momlife/19868-animals-bring-good-luck",
        img:"https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/cf25fec1eea7ab0665f586b3481e436c/112402-rabbit-lucky-animals-510x600.jpg"
        
    },
]

// console.log(isValidUrl(animalData[0].img))
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
    dialog_header .textContent = "Create New Product";
    document.querySelector("#nameOf_animal").value = "";
    document.querySelector("#description").value= "";
    document.querySelector("#cost").value = "";
    document.querySelector("#currency").value = "";
    document.querySelector("#url").value = "";
    document.querySelector("#source").value = "";


}

// on concel 
function Onconcel(){
    hide(dialog)
}




// On add button
function Oncreate(){
    
    let animal = {}
    let already_completed = true;
    animal.name = document.querySelector("#nameOf_animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    animal.img = document.querySelector("#url").value;
    animal.source = document.querySelector("#source").value;

    for (i in animal) {
        if (animal[i]=="" ||  !(isValidUrl(animal.img)) ||!(isValidUrl(animal.source))){
            already_completed = false;
        }
    }
    if(already_completed){
        if( !checkData(animal)){
            hide(dialog);
            animalData.push(animal);
            saveData();
            showProduct();
        }
        else{
            alert("This animal is already had!");
        }
              
    }
    else{
        alert("Please complete it all!");
    }
    
}

// check url or not 
function isValidUrl(urlString) {
    try { 
        return Boolean(new URL(urlString)); 
    }
    catch(e){ 
        return false; 
    }
}
// console.log(isValidUrl(animal.img))

function Onedit(event){
    show(dialog);
    hide(add_btn);
    show(edit_btn);
    dialog_header .textContent = "Edit Data Of Animal";
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    document.querySelector("#nameOf_animal").value = animalData[index].name;
    document.querySelector("#description").value = animalData[index].description;
    document.querySelector("#cost").value = animalData[index].cost;
    document.querySelector("#currency").value = animalData[index].currency;
    document.querySelector("#url").value = animalData[index].img;
    document.querySelector("#source").value = animalData[index].source;

    
    document.querySelector("#edit").addEventListener("click",function(){
        changeData(index);
        index = null;
    });
}

//change data 
function changeData(index){

    let animal = {}
    animal.name = document.querySelector("#nameOf_animal").value;
    animal.description = document.querySelector("#description").value;
    animal.cost = document.querySelector("#cost").value;
    animal.currency = document.querySelector("#currency").value;
    animal.img = document.querySelector("#url").value;
    animal.source = document.querySelector("#source").value;

    let already_completed = true;
    for (i in animal) {
        if (animal[i]=="" ||  !(isValidUrl(animal.img)) ||!(isValidUrl(animal.source))){
            already_completed = false;
        }
    }
    if(already_completed){
            hide(dialog)
            animalData[index] = animal;
            saveData();
            showProduct();
        
        
    }
    else{
        alert("Please check it again!");
    }
    
}

// check data
function checkData(data){
    let found = false;
    for (let i in animalData){
        if (animalData[i].name.toUpperCase() == data.name.toUpperCase()  || animalData[i].img == data.img){
            found = true;
            
        }
    }
    return  found ;

}
// delete data 
function deleteData(event){
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    animalData.splice(index, 1);
    saveData();
    showProduct();
}


// save data in local
function saveData() {
    localStorage.setItem("animalData", JSON.stringify(animalData));
    
}
  
// load data 
function loadproduct() {
    let alldata = JSON.parse(localStorage.getItem("animalData"));
    if (alldata!= null) {
        animalData = alldata;
    }
    

  
}


// show product 
function showProduct(){
    document.querySelector("#product-container").remove();
    let product_container = document.createElement("div");
    product_container.id ="product-container";
    product_view.appendChild(product_container);
    for(let i=0 ; i<animalData.length ; i++){
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        product_container.appendChild(card);

        let img = document.createElement("img");
        img.id = "animal";
        img.src = animalData[i].img;
        let link = document.createElement("a");
        link.href = animalData[i].source;
        link.appendChild(img);
        card.appendChild(link);

        let retail_news = document.createElement("div");
        retail_news.className = "retail_news";
        card.appendChild(retail_news);

        let news = document.createElement("div");
        retail_news.appendChild(news);

        let name = document.createElement("p");
        name.className = "name_animal";
        name.textContent = animalData[i].name;
        name.style.fontWeight = "bold";
        news.appendChild(name)

        let cost = document.createElement("p");
        cost.textContent = animalData[i].cost +animalData[i].currency;
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



// showProduct()
// saveData()
loadproduct()
showProduct()










