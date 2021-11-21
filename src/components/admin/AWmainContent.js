import "./remove.scss";
import React, {useState, useEffect} from 'react'
import Axios from 'axios';

function AOMainContent() {
    const [Product_name, setProduct_name]= useState("");
    const [Product_description, setProduct_description]= useState("");
    const [Product_type, setProduct_type]= useState(0);
    const [Product_price, setProduct_price]= useState(0);
    const [Product_currency, setProduct_currency]= useState("");
    const [newProduct_description, setnewProduct_description] = useState("");

    const updateProductD = (id) => {
        Axios.put('http://localhost:3001/product/update', {
            Product_description: newProduct_description,
            id: id
        }).then((response)=>{
            setProducts(products.map((item)=> { 
                return  window.location.reload();
            }))
        }
      );
        console.log("okay");
    }
    const deleteProduct= (Product_id) =>{
        Axios.delete(`http://localhost:3001/product/delete/${Product_id}`);
        alert("Deleted");
        window.location.reload();
    }

    const submitProduct = () => {
        console.log("yes")
        window.location.href = '/LoginControl';
        Axios.post("http://localhost:3001/product/insert", {
            Product_name: Product_name,
            Product_description: Product_description,
            Product_type: Product_type,
            Product_price: Product_price,
            Product_currency: Product_currency,
        })
        .then(function (response) {
        console.log(response);
        console.log("itworks");
        
        })
        .catch(function (error) {
        console.log(error);
        console.log("itdoesntworks");
        });  
    }

        const [products, setProducts] = useState([]);
        useEffect(() => {
            Axios.get("http://localhost:3001/product/get").then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.error();   
            });
        }, []);
        function input(){

            let new1 = prompt("You are adding a Product to Electronics");
            


            return(
               // Product_name: setProducts(new1.target.value,
                //console.log(new1),
                console.log(Product_name),
                submitProduct()  
            )
        /* */

        }   
        
        const listItems = products.map((item)=>
            
            
                <div className="card" key={item.id}>
                    {item.Product_type === 1 && <div className="card_header">
                    <div class="cartSection removeWrap">
                            <a href="#" onClick={()=>{deleteProduct(item.Product_id)}} class="remove">x</a>
                        </div>  
                        <h2 className = "txt">{item.Product_name}</h2>
                        <p>{item.Product_description}</p>
                        <p className="price">${item.Product_price}<span>{item.currency}</span></p>
                        <a href="/Cart" className="btn">Cart</a>
                        <div>
                            <input type="text" onChange = {(e) => { setnewProduct_description(e.target.value); }} placeholder="Update Description"></input>
                            <button onClick={()=>{updateProductD(item.Product_id)}}>Update Description</button>
                            </div>
                    </div> }
                </div>
            
        );

    return(
        <div className="main_content">
            <h3>Products</h3>
            {listItems}
            <div>
            <input type = 'text' placeholder="Input New Product Name" onChange = {(e) => { setProduct_name(e.target.value); }} align="center"></input>
            <input type = 'text' placeholder="Input New Product Description" onChange = {(e) => { setProduct_description(e.target.value); }} align="center"></input>
            <input type = 'text' placeholder="Input New Product Type(1 for watches, 2 for Electrics, 3 for Other)" onChange = {(e) => { setProduct_type(e.target.value); }} align="center"></input>
            <input type = 'text' placeholder="Input New Product Price" onChange = {(e) => { setProduct_price(e.target.value); }} align="center"></input>
            <input type = 'text' placeholder="Input New Product Currency" onChange = {(e) => { setProduct_currency(e.target.value); }} align="center"></input>
            </div>
            <div class="add">
                <button onClick={input} class="add">+</button>
                
            </div>  
        </div>
    )
}



export default AOMainContent;
