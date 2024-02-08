// Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ user }) => {
  const location = useLocation();
  const displayName = user && user.displayName ? user.displayName : "";


  const hiddenPaths = ['/', '/signup', '/signin'];

 
  const shouldRenderHeader = !hiddenPaths.includes(location.pathname);

  return shouldRenderHeader ? (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">{displayName}</h1>
      <nav className="ml-auto">
        <Link to="/productlist" className="mx-2 px-4 py-2 border bg-yellow-500 text-white hover:bg-yellow-600">
          Home
        </Link>

        <Link to="/newpage" className="mx-2 px-4 py-2 border bg-green-500 text-white hover:bg-green-600">
          Cart
        </Link>

        <Link to="/signin" className="mx-2 px-4 py-2 border bg-yellow-500 text-white hover:bg-yellow-600">
          Sign out
        </Link>
      </nav>
    </header>
  ) : null;
};

export default Header;
