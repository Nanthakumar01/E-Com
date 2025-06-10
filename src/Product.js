import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { v4 as uuid } from 'uuid'; 

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        uid: uuid(),         
        id: id,              
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product__info">
        <p>{title}</p>
        <p><strong>${price}</strong></p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => <span key={i}>⭐</span>)}
        </div>
        <button className="product__button" onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
