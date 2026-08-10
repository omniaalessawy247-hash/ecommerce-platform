import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaTshirt, FaBaby, FaPaw, FaBook, FaSignInAlt, FaInfinity , FaHeart} from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { CartProvider, useCart } from 'react-use-cart';

const NavbarContent = () => {
  const { totalItems } = useCart();

  return (
    <>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page" style={{ fontSize: '0.9rem' }}>
            <FaHome size={20} className="me-1" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/fashion" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            <FaTshirt size={20} className="me-1" /> Fashion
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/supermarket" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            <FaShoppingCart size={20} className="me-1" /> Supermarket
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/petcare" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            <FaPaw size={20} className="me-1" /> Pet Care Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Babycare" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            <FaBaby size={20} className="me-1" /> Baby Care Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            <FaBook size={20} className="me-1" /> Books
          </Link>
        </li>
        <li className="nav-item">
  <Link to="/wishlist" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
    <FaHeart style={{ marginRight: '5px' }} /> Wishlist
  </Link>
</li>
        <li className="nav-item">
          <Link to="/userprofile" className="nav-link text-white" style={{ fontSize: '0.9rem' }}>
            User Profile
          </Link>
        </li>
      </ul>

      <div className="d-flex align-items-center">
        <Link to="/login" className="btn btn-outline-light me-2" style={{ fontSize: '0.9rem' }}>
          <FaSignInAlt size={18} className="me-1" /> Login
        </Link>
        <Link to="/cart" className="nav-link text-white">
          <BiCart size={20} />
          {totalItems > 0 && <span className="badge bg-light text-dark ms-1">{totalItems}</span>}
        </Link>
        
      </div>
    </>
  );
};

const Allnavbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient shadow" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="container-fluid text-center">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="display-6 text-white" style={{ fontSize: '1.5rem' }}>Infinite Market</h1>
            <FaInfinity style={{ color: 'white', fontSize: '2rem' }} className="mx-2" />
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <NavbarContent />
          </div>
        </div>

        <div className="text-center my-3">
          <h3 className="text-white" style={{ fontSize: '1.2rem' }}>🛒 Start Shopping Now!</h3>
        </div>
      </nav>
   
  );
};

export default Allnavbar;
