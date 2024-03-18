import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-signup">
          <h3>Sign up for our newsletter</h3>
          <form action="#">
            <input type="email" placeholder="Your email address" />
            <button>Send</button>
          </form>
        </div>
        <div className="footer-info">
          <p className="footer-text">All rights reserved &copy; 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
