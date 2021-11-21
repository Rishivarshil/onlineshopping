import React from 'react';
import '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/Cart.scss';
import cproduct_card from '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/testing';
  


function ACart() {
    const listItems = cproduct_card.map((item)=>
   
        <div key={item.id}>
            {item.id % 2 !== 0 &&  <li class="items odd">
                <div class="infoWrap"> 
                    <div class="cartSection">
                        <h3>{item.product_name}</h3>
                        <p> <input type="text"  class="qty" placeholder="3"/> x $ {item.price}</p>
                    </div>  
                    <div class="prodTotal cartSection">
                        <p>{item.price}</p>
                    </div>   
                    <div class="cartSection removeWrap">
                        <a href="#" class="remove">x</a>
                    </div>        
                </div>
            </li>}
            {item.id % 2 == 0 &&  <li class="items even">
                <div class="infoWrap"> 
                    <div class="cartSection">
                        <h3 class="black">{item.product_name}</h3>
                        <p> <input type="text"  class="qty" placeholder="3"/> x $ {item.price}</p>
                    </div>  
                    <div class="prodTotal cartSection">
                        <p>{item.price}</p>
                    </div>   
                    <div class="cartSection removeWrap">
                        <a href="#" class="remove">x</a>
                    </div>        
                </div>
            </li>}
        </div>
            

        
    );
   
    return (
    //Doesn't change
        <div class="wrap cf">  
            <h1 class="projTitle"> Shopping Cart</h1>
            <div class="heading cf">
                <h1>My Cart</h1>
                <a href="/AWatches" class="continue">Continue Shopping</a>
            </div>
            
            <div class="cart">
                <ul class="tableHead">
                <li class="prodHeader">Product</li>
                <li>Quantity</li>
                <li>Total</li>
                <li>Remove</li>
                </ul>

                <ul class="cartWrap">


                    {listItems}
                    
                  

                    
            
                </ul>
            </div>

            
            <div class="subtotal cf">
                <ul>
                    <li class="totalRow"><span class="label">Subtotal</span><span class="value">$35.00</span></li>
                    <li class="totalRow"><span class="label">Shipping</span><span class="value">$5.00</span></li>
                    <li class="totalRow"><span class="label">Tax</span><span class="value">$4.00</span></li>
                    <li class="totalRow final"><span class="label">Total</span><span class="value">$44.00</span></li>
                    <li class="totalRow"><a href="/Checkout" class="btn continue">Checkout</a></li>
                </ul>
            </div>
        </div>
        
    );
}

export default ACart;