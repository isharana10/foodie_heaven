import React, { useReducer } from 'react';
import './App.css';


function Productcard({ img_src, title, price, description }) {
  
  const initialState = { count:0 };
 

  function reducer(state, action) {
    
    switch (action.type) {
      
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }


  
  
    const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <>
      
      {/* <div className='cardcontainer'> */}
      
      <div className="card">
        <img src={img_src} className="cardTop" alt={title} />
        <div className="cardbody">
          <h6 className="cardtitle">{title}</h6>
          <p className="price">Rs {price}</p>
          <p className="cardtext">
            "{description}"
          </p>
          <button className="buybutton">BUY NOW</button>

          
          {/* <div className="counter"> */}
            <button onClick={() => dispatch({ type: 'increment' })} className="max" disabled={state.count >14} >+</button>
            <button className="count">{state.count}</button> {/* Display current count */}
            <button onClick={() => dispatch({ type: 'decrement' })} className="min" disabled={state.count <1} >-</button>
          {/* </div> */}
          

          
          <button className="total">TOTAL PRICE: RS. {price * state.count}</button>
        </div>
      </div>
      {/* </div> */}
      

    </>
  );
}

export default Productcard;
