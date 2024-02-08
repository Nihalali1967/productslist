import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
  
        console.log('Product Details:', data);
        setProductDetails(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchProductDetails();
  }, [productId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
     
      </header>
      <div className="container mx-auto mt-8">
        <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            {productDetails.images && productDetails.images.length > 0 && (
              <Slider {...settings}>
                {productDetails.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="max-w-full h-auto rounded-md mb-2"
                      style={{ maxWidth: '300px', maxHeight: '200px' }} // Adjust these values
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{productDetails.title}</h3>
            <p className="text-gray-600 mb-2">{productDetails.description}</p>
            <p className="text-orange-500 mb-2">Discount: {productDetails.discountPercentage}%</p>
            <p className="text-blue-500 mb-2">Rating: {productDetails.rating}</p>
            <p className="text-gray-700 mb-2">Stock: {productDetails.stock}</p>
            <p className="text-purple-500 mb-2">Brand: {productDetails.brand}</p>
            <p className="text-indigo-500">Category: {productDetails.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
