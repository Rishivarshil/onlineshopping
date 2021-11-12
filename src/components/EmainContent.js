import React from 'react'
import product_card from '../product_data';





const EMainContent =() => {
    console.log(product_card);
    const listItems = product_card.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt="description of image" />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <a href="/Cart" class="btn">Cart</a>
                
            </div> 
        </div>
    );
    return(
        <div className="main_content">
            <h3>Products</h3>
            {listItems}
        </div>
    )
}
export default EMainContent;