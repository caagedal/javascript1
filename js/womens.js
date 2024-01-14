import { products } from "./components.js";

const womensJackets = document.querySelector(".womens-products1");

//Create html for the womens section
 
async function createWomensSection(){
  
    try{

        womensJackets.innerHTML ="";

        for (let i = 0; i < products.length; i++){
                    
            //Choosing the last size in the array. 
            const lastSize = products[i].sizes[products[i].sizes.length - 1];

            
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            //Making sure to sort out mens jackets, so that only female jackets is published. 
            if (products[i].gender === "Female"){

                //Checking if an item is on sale or not.
                if (price === discount){
                    womensJackets.innerHTML +=     
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

                    womensJackets.innerHTML +=     
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
        womensJackets.innerHTML = errorMessage;
    }    
    finally{

    }

}

createWomensSection();
