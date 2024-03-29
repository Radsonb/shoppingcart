import React, { useContext } from 'react';
import propTypes from 'prop-types';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductsCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return ( 
    <section className="product__card">

      <img src={ thumbnail.replace(/\w\.jpg/gi, 'W.jpg') } alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{ formatCurrency(price, 'BRL') }</h2>
        <h2 className="card__title">{ title }</h2>
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;
