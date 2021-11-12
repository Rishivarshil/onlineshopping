import React, {useEffect,useState} from 'react'
//import product_card from '../product_data';
import {Link} from 'react-router-dom';

function WMainContent() {
    // Empty array in useState!
    const [product_card, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((product_card) => {
          setData(product_card);
          console.log(product_card);

        })
        .catch((err) => {
          console.log(err);
          console.log("idk");
        });
    }, []);
    //console.log(res);
    const listItems = product_card.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.image} alt="description of image" />
            </div>
            <div className="card_header">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price">${item.price}<span>{item.currency}</span></p>
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
export default WMainContent;