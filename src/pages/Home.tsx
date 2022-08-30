import React from "react";
import user from "../assets/images/user.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to={"/personalblog"}>
          <i className="fas fa-home"></i> <span>home</span>
        </Link>
        <Link to={"/about"}>
          <i className="fas fa-user"></i> <span>about</span>
        </Link>
        <a href="portfolio.html">
          <i className="fas fa-briefcase"></i> <span>portfolio</span>
        </a>
        <a href="blogs.html">
          <i className="fas fa-blog"></i> <span>blogs</span>
        </a>
        <a href="contact.html">
          <i className="fas fa-address-book"></i> <span>contact</span>
        </a>
      </nav>
      <section className="home">
        <div className="image">
          <img src={user} alt="" />
        </div>
        <div className="content">
          <h3>hi, i am Thanh</h3>
          <span>front-end developer</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro
            facere expedita ab atque a consectetur odit vel soluta itaque.
          </p>
          <Link to={"/about"}>
            <div className="btn">
              about me <i className="fas fa-user"></i>
            </div>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
