import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Person from "../Person/Person";

const Shop = () => {
  
    const [persons, setPersons] = useState([]);
    const [ cart , setCart ] = useState([]);
    const handleAddProduct=(persons)=>{
    const newCart=[ ...cart  , persons ]
    setCart(newCart)
}


  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  return (
   
      <div className="row">
        <div className="col-md-9">

          <div className="row">
            {
                persons.map(person=>  
            <Person
            key={person.key}
                person={person}
                handleAddProduct={handleAddProduct}
                >

                </Person>)
            }
           
          
          </div>
        </div>
        <div className="col-md-3">
        
             <Cart
                cart={cart}
             >

             </Cart>
        </div>
      </div>
   
  );
};

export default Shop;
