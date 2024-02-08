import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
  const productArray = products || [];
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productArray.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productArray.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductsPerPageChange = (e) => {
    const newProductsPerPage = parseInt(e.target.value, 10);
    setProductsPerPage(newProductsPerPage);
    setCurrentPage(1);
  };

  const navigateToCounter = () => {
    navigate('/counter');
  };

  
  const addToCart = (productId) => {
   
    if (!cart.some(item => item.id === productId)) {
      
      const productToAdd = products.find(product => product.id === productId);

      
      setCart([...cart, productToAdd]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-green-700 font-semibold mb-2">Price: ${product.price}</p>
            </Link>
            
            
            <button onClick={() => addToCart(product.id)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-8">
        <div className="mt-4 flex justify-center">
          <label className="mr-2">Products per page:</label>
          <select value={productsPerPage} onChange={handleProductsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handlePrevPage}
            className={`mx-2 px-4 py-2 border ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'
            } hover:bg-gray-100`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-4 py-2 border ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              } hover:bg-gray-100`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`mx-2 px-4 py-2 border ${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'
            } hover:bg-gray-100`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
