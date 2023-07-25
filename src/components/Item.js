import React,{useState} from "react";

function Item({ name, category }) {
  const[isInCart,setInCart]=useState(false)
  const[action,setAction]=useState(true)

  function handleAddToCart(){
    setInCart(!isInCart)
    setAction(!action)
  }
  return (
    <li className={isInCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{action?"Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;