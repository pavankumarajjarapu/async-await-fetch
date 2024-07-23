import React, { useEffect, useState } from "react";

function ProductsList() {
  let [productsArray, setProductsArray] = useState([]);

  let getinngProductsfromServer = async () => {
    let reqMethods = {
      method: "GET",
    };

    let JSONData = await fetch("https://fakestoreapi.com/products", reqMethods);
    let JSOData = await JSONData.json();
    setProductsArray(JSOData);
    console.log(JSOData);
  };
// useEffect(()=>{getinngProductsfromServer()},[])
  return (
    <div>
      <button type="button"
        onClick={() => {
          getinngProductsfromServer();
        }}
      >
        Products
      </button>
     <div className="container">
     {productsArray.map((element, index) => {
          return (
            
            <div className="productContainer" key={index}>
              <img src={element.image} className="image"></img>
              <p>{element.title}</p>
              <h2><span>Price:</span> {element.price}$</h2>
              <div className="buttonsContainer">
                <button className="buttons">Add to 🛒</button>
                <button className="buttons">Add to ❤️</button>
              </div>
              <button className="buttons"> BUY NOW</button>
            </div>
            
          );
        })}
     </div>
       
       
      
    </div>
  );
}

export default ProductsList;
