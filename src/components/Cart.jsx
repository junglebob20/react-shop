import React from 'react';

const Cart = ({ title, id, image, removeFromCart }) => (
        <li className="header-cart-item">
            <div className="header-cart-item-img">
                <img src={image} alt="IMG"/>
            </div>

            <div className="header-cart-item-txt">
                <a href="#" className="header-cart-item-name">
                    {title}
                </a>

                <span className="header-cart-item-info">
                    1 x $19.00
                </span>
            </div>
        </li>
  );

export default Cart;
