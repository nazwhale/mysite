import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Name">
              Naz Malik
            </Link>
          </div>
          <div id="navMenu" className="navbar-menu">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
          <div className="navbar-brand">
            <Link to="/contact" className="navbar-item" title="Name">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

// <Link className="navbar-item" to="/products">
//   Products
// </Link>
// <Link className="navbar-item" to="/contact">
//   Contact
// </Link>
// <Link className="navbar-item" to="/contact/examples">
//   Form Examples
// </Link>
