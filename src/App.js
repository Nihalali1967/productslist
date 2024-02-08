import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Counter from './components/Counter';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Make sure you have the cart state

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        let allProducts = [];
        let skip = 0;
        let hasMoreData = true;

        while (hasMoreData) {
          const response = await fetch(
            `https://dummyjson.com/products?limit=10&skip=${skip}`
          );
          const data = await response.json();

          if (data.products.length > 0) {
            allProducts = [...allProducts, ...data.products];
            skip += 10;
          } else {
            hasMoreData = false;
          }
        }

        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const addToCart = (productId) => {
      // Check if the product is already in the cart
      if (!cart.some(item => item.id === productId)) {
        // Find the product in the products array
        const productToAdd = products.find(product => product.id === productId);
  
        // Add the product to the cart
        setCart([...cart, productToAdd]);
      }
    };

    fetchAllProducts();
  }, []);

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/productlist" element={<ProductList products={products} cart={cart} setCart={setCart} />} />
        <Route path="/product/:productId" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
