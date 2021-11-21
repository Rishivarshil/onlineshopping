import React,{useState} from 'react';
import "./Checkout.css";
import { Button, Form, Segment } from 'semantic-ui-react'
import Axios from 'axios';
import countries from './countries.js';


function Checkout () {
   
    const [Payment_amount, setPayment_amount]= useState("");
    const [Card_number, setCard_number]= useState(0);
    const [Card_type, setCard_type]= useState(0);
    const [House_number, setHouse_number]= useState(0);
    const [Street, setStreet]= useState('');
    const [City, setCity]= useState('');
    const [State, setState]= useState("");
    const [Country, setCountry]= useState('');
    const [Pincode, setPincode]= useState(0);

    const address = () => {
      var dates = new Date();

      var d = dates.getDate();
      var d = d +3;
      var m = dates.getMonth() + 1;
      var y = dates.getFullYear();
      var date = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

      alert("Your item will be shipped to:" +' '+ House_number + ' ' + Street + ' ' + City + ' ' + State + ' ' + Country + ' ' + Pincode);
      alert("Your item will be shipped on:" +' '+date);
      Axios.post("http://localhost:3001/checkout/insert", {
            Payment_amount: Payment_amount,
            Card_number: Card_number,
            Card_type: Card_type,
    })
      Axios.post("http://localhost:3001/address/insert", {
        House_number: House_number,
        Street: Street,
        City: City,
        State: State,
        Country: Country,
        Pincode: Pincode,
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



     
       
     
    
   
      return (
        <div className="app-container">
          <div className="checkout">
            <div className="checkout-container">
            <h3 className="heading-3">Credit card checkout</h3>
           
            <h1>Customer Info</h1>
            <Form.Group widths='equal'>
                <Form.Input
                    onChange = {(e) => {
                      setCard_type(e.target.value); }}
                    
                    fluid
                    label='Card Type'
                    placeholder='Visa'
                    
                />
                <Form.Input 
                    fluid 
                    onChange = {(e) => {
                      setCard_number(e.target.value); }}
                    name='Card number' 
                    label='Card number' 
                    placeholder='123456789000'
                   
                />
                <Form.Input 
                    fluid 
                    name='email'
                    type='email' 
                    label='Email' 
                    placeholder='xyz@example.com'
                    
                />
                <Form.Input 
                    fluid 
                    onChange = {(e) => {
                      setPayment_amount(e.target.value); }}
                    name='Payment Amount'
                    type='Payment Amount' 
                    label='Payment Amount' 
                    placeholder='100.00'
                    
                />
            </Form.Group>
            <div>
            <Segment inverted>
              <Form inverted>
                <Form.Group widths='equal'>
                <Form.Input onChange = {(e) => {
                      setHouse_number(e.target.value); }}fluid label='House #' placeholder='122' />
                <Form.Input onChange = {(e) => {
                      setStreet(e.target.value); }}fluid label='Address' placeholder='Example St' />
                <Form.Input onChange = {(e) => {
                      setCountry(e.target.value); }} fluid label='Country' placeholder='USA' />
                <Form.Input 
                     onChange = {(e) => {
                      setCity(e.target.value); }}
                    name='town_city' 
                    label='City' 
                    placeholder='Las Vegas' 
                  
                />
                   <Form.Input
                   onChange = {(e) => {
                    setState(e.target.value); }}
                    width={6} 
                    label='State' 
                    placeholder='Search ...'
                    name='county_state' 
                    search 
                    fluid
                    
                />
                 <Form.Input
                 onChange = {(e) => {
                  setPincode(e.target.value); }}
                    width={4} 
                    name='postal_zip_code' 
                    label='Zip/Postal' 
                    placeholder='00000'
                    
                    
                />
                </Form.Group>
              </Form>
            </Segment>            
            </div>
      
              
              <button align="center"  onClick={address} class="glow-on-hover" type="button">Checkout</button>
              
            </div>
        </div>
         </div>
      )
  }
  
 
export default Checkout;
  