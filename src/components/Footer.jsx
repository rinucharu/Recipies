import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Delicious</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat repellat amet laboriosam culpa eum quibusdam, obcaecati
              sapiente itaque repudiandae incidunt, consectetur eveniet vero
              voluptatibus quod vitae dolore quam praesentium.
            </p>
          </div>

          <div className="col mx-5">
            <h2>Quick links</h2>
            <hr />
            <ul className="">
              <li>
                <Link
                  to="/"
                  className="text-white mt-3"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white mt-3"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/singlepage"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Recipies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2>cuisine</h2>
            <hr />
            <ul>
              <li>
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Italian
                </Link>
              </li>
              <li>
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Asian
                </Link>
              </li>
              <li>
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  American
                </Link>
              </li>
              <li>
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Indian
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2>follow us</h2>
            <hr />
            <div className="icons">
              <ul>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                      // padding: "10px",
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      // color:"black"
                    }}
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                      // padding: "10px",
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      // color:"black"
                    }}
                  >
                    {" "}
                    <FaGoogle />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      // textDecoration: "none",
                      // padding: "10px",
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      // color:"black"
                    }}
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                      // padding: "10px",
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      // color:"black"
                    }}
                  >
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                   style={{
                      textDecoration: "none",
                      // padding: "10px",
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      // color:"black"
                    }}
                  >
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        
        <div className="copyright">
        <p className="text-center">Copyright &copy; 2025 By Charu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
