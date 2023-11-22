import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const ref = useRef();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position >= 600) {
      ref.current.classList.add("back_black");
      ref.current.classList.remove("back_t");
    } else {
      ref.current.classList.remove("back_black");
      ref.current.classList.add("back_t");
    }

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <nav id="home" ref={ref} className="navbar-container">
        <div className="logo">
          <a
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            href="#">
            <img src="/images/logo_v.png" alt="Logo" />
          </a>
        </div>
        <div className="navbar_toggle" id="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaTimes className="FaBars" />
          ) : (
            <FaBars className="FaBars" />
          )}
        </div>

        <ul
          onClick={closeMenu}
          className={click ? "nav-list active" : "nav-list"}>
          <li>
            <a
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
