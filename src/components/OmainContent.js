import "./admin/remove.scss";
import React, {useState, useEffect} from 'react'
import Axios from 'axios';

function OMainContent() {


    

        const [products, setProducts] = useState([]);
        useEffect(() => {
            Axios.get("http://localhost:3001/product/get").then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.error();   
            });
        }, []);
       

        
        
        const listItems = products.map((item)=>
            
            
                <div className="card" key={item.id}>
                    {item.Product_type === 3 && <div className="card_header">
                     
                        <h2 className = "txt">{item.Product_name}</h2>
                        <p>{item.Product_description}</p>
                        <p className="price">${item.Product_price}<span>{item.currency}</span></p>
                        <a href="/Cart" className="btn">Cart</a>
                        
                    </div> }
                </div>
            
        );

    return(
        <div className="main_content">
            <h3>Products</h3>
            {listItems}
        </div>
    )
}



export default OMainContent;
