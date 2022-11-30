
const new_product = document.querySelector(".new_product");
const old_product = document.querySelector(".old_product");



animalData = JSON.parse(localStorage.getItem("animalData"));
    
    
console.log(JSON.parse(localStorage.getItem("animalData")))

let Old_products = [
    {
        name:"bird",
        description:"red bird",
        cost:"200",
        currency: "$",
        img:"../../images/bird.webp"
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
            star.src = "../../images/black star.webp";
            span.appendChild(star)
        }
        let buy = document.createElement("button");
        buy.className = "button";
        buy.textContent = "buy now";
        retail_news.appendChild(buy);
    }
}


showProduct(animalData,"#contain_new_product",new_product);
showProduct(Old_products,"#contain_old_product",old_product);



