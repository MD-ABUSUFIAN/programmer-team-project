import React from 'react';
import './Person.css'

const Person = (props) => {
  
    const {Name,img,Occupation,Nationality,Born,Salery }=props.person || {}
    
    return (
        <div className="col-md-6 col-lg-6 col-12 person">
        
      <div class="person-photo">
        <img  src={img} className="image img-fluid mx-auto" alt="..."/>
      </div>
      <h4>Name:<small>{Name}</small></h4>
      <h4>Occupation:{Occupation}</h4>
      <h4>Nationality:{Nationality}</h4>
      <h4>Born:{Born}</h4>
      <h4>Salery:{Salery}</h4>
      
          <button 
          onClick={ ()=> props.handleAddProduct(props.person)}
          className="btn btn-primary mx-auto p-8 button" > <i class="fas fa-shopping-cart"></i>
          Add to Cart</button>
            
     
 </div>
    );
};

export default Person;