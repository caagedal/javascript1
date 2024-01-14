import { products } from "./components.js";

const mensJackets = document.querySelector(".mens-products");

//create mens section


async function createMensSection(){

    try{
        mensJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            

            if (products[i].gender === "Male"){

                if (price === discount){
                    mensJackets.innerHTML +=     
                            `
                            <div class="product-card">
                            <a href="product-specific/product-specific.html?id=${products[i].id}">
                                <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                <div class = "product-text">
                                    <h3>${products[i].gender}'s ${products[i].title}</h3>
                                    <p>${products[i].price}</p>
                                </div>
                                <div class = "view-more">
                                    <a href="product-specific/product-specific.html?id=${products[i].id}">View more</a>
                                    
                                </div>
                            </a>
                        </div>
                            `
                }
                else{

                    mensJackets.innerHTML +=     
                            `
                            <div class="product-card">
                            <span class="wdp-ribbon wdp-ribbon-two">Sale</span>
                            <a href="product-specific/product-specific.html?id=${products[i].id}">
                                <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                <div class = "product-text">
                                    <h3>${products[i].gender}'s ${products[i].title}</h3>
                                    <p><span class = "discount-small">${products[i].discountedPrice}</span>${products[i].price}</p>
                                </div>
                                <div class = "view-more">
                                    <a href="product-specific/product-specific.html?id=${products[i].id}">View more</a>
                                    
                                </div>
                            </a>
                            `
                }

            }
        }
    }
    catch(error){
        mensJackets.innerHTML += `${errorMessage}`
    }
    finally{}
}

createMensSection();

