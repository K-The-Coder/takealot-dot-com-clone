import {
  faCartShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="nav-bar">
      <FontAwesomeIcon
        className="menu-icon"
        icon={faBars}
        ref={toggleRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <div className="mobile-menu" ref={navRef}>
          <ul>
            <li>Help Center</li>
            <li>Sell on Takealot</li>
            <li>Login</li>
            <li>Register</li>
            <li>Orders</li>
            <li>My Account</li>
          </ul>
        </div>
      )}

      <div className="first-panel">
        <div className="image-panel">
          <img src="src\assets\images\takealot-logo.svg" alt="" />
        </div>
        <div className="help-panel">
          <ul className="help-links">
            <li>Help Center</li>
            <li>Sell on Takealot</li>
          </ul>
        </div>
      </div>
      <div className="second-panel">
        <div className="user-panel">
          <ul className="user-links">
            <li>Login</li>
            <li>Register</li>
            <li>Orders</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className="call-to-action">
          <a className="wish-list" href="">
            <FontAwesomeIcon className="heart-icon" icon={faHeart} />
          </a>
          <a className="cart" href="">
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faCartShopping}
              className="cart-icon"
            />
            0
          </a>
        </div>
      </div>
    </nav>
  );
}
