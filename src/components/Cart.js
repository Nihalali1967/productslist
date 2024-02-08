// Cart.js

import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
