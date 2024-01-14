import { products } from "./components.js";
import { errorMessage } from "./components.js";

const favoriteJackets = document.querySelector(".favorite-container");
const SalesJackets = document.querySelector(".sales1-container");

//bestsellers



async function createfavoriteSection(){

    try{
        favoriteJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            // console.log(lastSize)

            if (products[i].favorite === true){

                if (price === discount){
                    favoriteJackets.innerHTML +=     
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

                    favoriteJackets.innerHTML +=     
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
    catch(error) {
        console.log("Oh no, something went wrong", error);
        favoriteJackets.innerHTML += `<p class = "error">Woops, something went wrong!</p>` 
    }
    finally{
    }

}

createfavoriteSection();


//Sales jackets


async function createSalesSection(){

    try{
        SalesJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            // console.log(lastSize)

            if (products[i].onSale === true){

                if (price === discount){
                    SalesJackets.innerHTML +=     
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

                    SalesJackets.innerHTML +=     
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
        SalesJackets.innerHTML += `${errorMessage}`;
    }    
    finally{}
}

createSalesSection();