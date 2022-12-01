
const new_product = document.querySelector(".new_product");
const old_product = document.querySelector(".old_product");
const no_card =document.querySelector("#nocard");
const detail_news = document.querySelector("#dialog_product");

let dt_name = document.querySelector("#detail_name");
let cost = document.querySelector("#detail_cost");
let description = document.querySelector("#detail_description");
let img = document.querySelector("#detail_img");

animalData = JSON.parse(localStorage.getItem("animalData"));

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



// detail function
function detail(index,data){
   
    console.log(dt_name)
    dt_name.textContent = data[index].name;
    cost.textContent = data[index].cost + data[index].currency;
    description.textContent = data[index].description;
    img.src = data[index].img;

    
    show( detail_news)
}

// back
function back(){
    hide(detail_news)
}


// show product on buyer page 
function showProduct(data,id,parent){

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
            detail(index,data)
           
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

showProduct(animalData,"#contain_new_product",new_product);
showProduct(Old_products,"#contain_old_product",old_product);



