
const new_product = document.querySelector(".new_product");
const old_product = document.querySelector(".old_product");
const no_card =document.querySelector("#nocard");

animalData = JSON.parse(localStorage.getItem("animalData"));

let Old_products = [
    {
        name:"bird",
        description:"red bird",
        cost:"200",
        currency: "$",
        source:"https://www.istockphoto.com/search/2/image?phrase=two+birds",
        img:"../../images/bird.webp",
        
    },
    {
        name:"cat",
        description:"yellow cat",
        cost:"200",
        currency: "$",
        source:"https://www.nationalgeographic.com/animals/article/animals-cats-training-pets",
        img:"../../images/cat.jpg",
    },
    {
        name:"fish",
        description:"three color fish",
        cost:"200",
        currency:"$",
        source:"https://www.earth.com/image/betta-siamese-fighting-fish/",
        img:"../../images/fish.jpeg"
    },
    {
        name:"pig",
        description:"cute pig",
        cost:"200",
        currency: "$",
        source:"https://wallpaperaccess.com/cute-baby-pigs",
        img:"../../images/pig.jfif"
    },
    {
        name:"Tiger",
        description:"cbit tiger",
        cost:"200",
        currency: "$",
        source:"https://www.wowt.com/content/news/Zoo-visitors-name-newborn-tiger-cubs-392053521.html",
        img:"../../images/tiger.jfif"
    },
    {
        name:"snake",
        description:"cute snake",
        cost:"200",
        currency: "$",
        source:"hhttps://www.123rf.com/stock-photo/king_cobra.html",
        img:"../../images/snake.jpg"
    },
];




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
        card_new_product.appendChild(card);

        let img = document.createElement("img");
        img.id = "animal";
        img.src = data[i].img;
        let link = document.createElement("a");
        link.href = data[i].source;
        card.appendChild(link);
        link.appendChild(img);

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



