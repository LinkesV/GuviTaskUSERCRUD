import React from "react";
import './styles/Nav.css'

function Nav() {
  return (
    <div className="navbody">
      <img alt="404Error" src="https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.png"/>
      <p>User CRUD</p>
      <ul class="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
