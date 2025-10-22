import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavBar(){
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    return (
        <nav className="nav-bar">
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
                        <li>{authenticated ? `Hi ${user}` : "Login" }</li>
                        <li>{authenticated ? "Logout" : "Register" }</li>
                        <li>Orders</li>
                        <li>My Account</li>
                    </ul>
                </div>
                <div className="call-to-action">
                    <a className="wish-list" href=""><FontAwesomeIcon style={{height: "19px", width: "19px"}} icon={faHeart}/></a>
                    <a className="cart" href=""><FontAwesomeIcon style={{marginRight: "5px"}} icon={faCartShopping} />0</a>
                </div>
            </div>
        </nav>
    )
}