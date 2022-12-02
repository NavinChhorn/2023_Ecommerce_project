
const new_product = document.querySelector(".new_product");
const old_product = document.querySelector(".old_product");
const no_card =document.querySelector("#nocard");
const detail_news = document.querySelector("#dialog_product");
const btn_add_cart = document.querySelector("#btn_add_cart");
const dialog_cart = document.querySelector(".cart");
const container_customer = document.querySelector("#container");
const contain_table = document.querySelector("#cart_dialog");

let dt_name = document.querySelector("#detail_name");
let cost = document.querySelector("#detail_cost");
let description = document.querySelector("#detail_description");
let img = document.querySelector("#detail_img");
let cart_index = 0;
let data_cart = [];


animalData = JSON.parse(localStorage.getItem("animalData"));
// save data in local
function saveData(key,value) {
    localStorage.setItem(key, JSON.stringify(value));
    
}
  
// load data 
function loadproduct(key,value) {
    let alldata = JSON.parse(localStorage.getItem(key));
    if (alldata!= null) {
        value = alldata;
    }
  
}



let Old_products = [
    {
        name:"bird",
        description:"red bird",
        cost:"200",
        currency: "$",
        img:"../../images/bird.webp",
        
    },
    {
        name:"cat",
        description:"yellow cat",
        cost:"200",
        currency: "$",
        img:"../../images/cat.jpg",
    },
    {
        name:"fish",
        description:"three color fish",
        cost:"200",
        currency:"$",
        img:"../../images/fish.jpeg"
    },
    {
        name:"pig",
        description:"cute pig",
        cost:"200",
        currency: "$",
        img:"../../images/pig.jfif"
    },
    {
        name:"Tiger",
        description:"cbit tiger",
        cost:"200",
        currency: "$",
        img:"../../images/tiger.jfif"
    },
    {
        name:"snake",
        description:"cute snake",
        cost:"200",
        currency: "$",
        img:"../../images/snake.jpg"
    },
];


// function hide element
function hide(element){
    element.style.display = "none";
}

// function show
function show(element){
    element.style.display = "block";
}

//function buy 
function buy_now(){
//    show(detail_news)
}

// detail function
function detail(data,index){
    cart_index = index;
    data_cart = data;
    dt_name.textContent = data[index].name;
    cost.textContent = data[index].cost + data[index].currency;
    description.textContent = data[index].description;
    img.src = data[index].img;  
    show( detail_news);

}


let cart_lists = [];
function cart(){
    hide(detail_news)
    cart_lists.push(data_cart[cart_index])
    saveData("cart_lists ",cart_lists)
    loadproduct("cart_lists ",cart_lists )

}
// back
function back(){
    hide(detail_news)
    hide(dialog_cart)
    show(container_customer)
    
}


// show product on buyer page 
function show_product(data,id,parent){

    document.querySelector(id).remove();
    let card_new_product = document.createElement("div");
    card_new_product.id = id;
    card_new_product.className = "all_card"
    parent.appendChild(card_new_product);

    for(let i=0 ;i< data.length ;i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        card_new_product.appendChild(card);

        let img = document.createElement("img");
        img.id = "animal";
        img.addEventListener("click",function(event){
            let index = event.target.parentElement.dataset.index;
            detail(data,index)
           
        });
         
        img.src = data[i].img;
        card.appendChild(img);
        

        let retail_news = document.createElement("div");
        retail_news.className = "retail_news";
        card.appendChild(retail_news);

        let news = document.createElement("div");
        news.className = "news";
        retail_news.appendChild(news)

        let name = document.createElement("p");
        name.textContent = data[i].name;
        name.style.fontWeight = "bold";
        news.appendChild(name);

        let cost = document.createElement("p");
        cost.textContent = data[i].cost + data[i].currency;
        news.appendChild(cost);

        let span = document.createElement("span");
        news.appendChild(span);
        for(let i=0 ; i<5 ;i++) {
            let star = document.createElement("img");
            star.className = "stars";
            star.src = "../../images/goal star.png";
            span.appendChild(star)
        }
        let buy = document.createElement("button");
        buy.className = "button buy_btn";
        buy.addEventListener("click",buy_now)
        
        buy.textContent = "buy now";
        retail_news.appendChild(buy);
    }
}

// search card
function search(event) {
    let list_animals = document.querySelectorAll('.card');
    let user_input = document.querySelector("#userInput").value.toUpperCase();
    let array=[]
    list_animals.forEach(Element=>{
        let name_card = Element.firstElementChild.nextElementSibling.firstElementChild.firstChild.textContent;
        if (name_card.toUpperCase().indexOf(user_input)>-1){
                Element.style.display=""
                array.push(name_card)
        }
        else {
                Element.style.display ="none"
        }
        
           
    })

    if (array.length===0){
        no_card.style.display = "block";
        new_product.style.display = "none";
        old_product.style.display = "none";
    }
    else {
        new_product.style.display = "";
        old_product.style.display = "";
        no_card.style.display  = "none";
    }
};


function show_cart_data(){
    hide(document.querySelector("#container"));
    show(dialog_cart );

    document.querySelector("#table").remove();
    let table = document.createElement("table");
    contain_table.appendChild(table)
    table.id = "table";
    

    let tr1 = document.createElement("tr");
    table.appendChild(tr1);

    let th1 = document.createElement("th");
    th1.textContent = "Images";
    tr1.appendChild(th1);

    let th2 = document.createElement("th");
    th2.textContent = "Animal";
    tr1.appendChild(th2);

    let th3 = document.createElement("th");
    th3.textContent = "Cost";
    tr1.appendChild(th3);

    let th4 = document.createElement("th");
    th4.textContent = "Number";
    tr1.appendChild(th4);

    let th5 = document.createElement("th");
    th5.textContent = "Action";
    tr1.appendChild(th5);
    
    total = 0;
    for (let i in cart_lists){
        let tr = document.createElement("tr");
        tr.dataset.index = i;
        table.appendChild(tr)
        let td1 = document.createElement("td");
        let img_animal = document.createElement("img");
        img_animal.src = cart_lists[i].img;
        td1.appendChild(img_animal);
        tr.appendChild(td1)
        let td2 = document.createElement("td");
        td2.textContent = cart_lists[i].name;
        tr.appendChild(td2)
        
        let td3 = document.createElement("td");
        td3.textContent = cart_lists[i].cost + cart_lists[i].currency;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.value = 1 ;
        input.min = 1;
        td4.appendChild(input)
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        let img = document.createElement("img");
        img.addEventListener("click",remove)
        img.src = src="../../images/delete.png";
        img.style.width = "50px";
        td5.appendChild(img);
        tr.appendChild(td5);
        table.appendChild(tr)

        total += Math.floor(cart_lists[i].cost);

    }
    let total_price = document.querySelector("#total_price");
    total_price.textContent = total +" $"
 

}

function remove(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    cart_lists.splice(index, 1);
    saveData("cart_lists ",cart_lists)
    loadproduct("cart_lists ",cart_lists )
    show_cart_data()
    
}

show_product(animalData,"#contain_new_product",new_product);
show_product(Old_products,"#contain_old_product",old_product);



