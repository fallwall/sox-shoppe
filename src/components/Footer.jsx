import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-shop">
        <h2>Shop</h2>
        <p>All Products</p>
        <p>Limited Edition</p>
        <p>Gifts</p>
        <p>Sales</p>
      </div>
      <div className="footer-about">
        <h2>About Us</h2>
        <p>Our Story</p>
        <p>Career</p>
        <p>Press</p>
        <p>Sustainability</p>
      </div>
      <div className="footer-help">
        <h2>Help</h2>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Returns</p>
        <p>Privacy Policy</p>
        <p>Term & Conditions</p>
      </div>
      <div className="footer-newsletter">
        <h2>Newsletter</h2>
        <p>Subscribe to the newsletter and be first to receive offers and updates.</p>
        <form>
          <input type="email" />
          <button>OK!</button>
        </form>
        <p>By signing up you agree to our e-mail privacy policy.</p>
      </div>
    </div>
  )
}

export default Footer;