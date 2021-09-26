import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart}= props || {}


    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.Salery

   const total=cart.reduce(  totalReducer  , 0).toFixed(2)
   


    return (
        
        <div className="cart">
               
                <h1 className="text-warning lg-bold text-center"> Total Programmer:{cart.length}</h1>
                <h1 className="black">Total Cost:<small className="text-info">{total}</small> </h1>
               <ul>
                   
                   {
                       cart.map( person=> <li><h1>{person.Name}</h1>

                       </li>)
                    
                   }
                
               </ul>
              
        </div>
    );
};

export default Cart;