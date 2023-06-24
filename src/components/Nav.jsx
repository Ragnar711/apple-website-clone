// src/components/Nav.jsx
import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";
import NavImage from "./NavImage";

const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <NavImage src={Logo} alt="Apple" />
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled">Ipad</a>
                    </li>
                    <li>
                        <a className="link-styled">Iphone</a>
                    </li>
                    <li>
                        <a className="link-styled">Watch</a>
                    </li>
                    <li>
                        <a className="link-styled">TV & Home</a>
                    </li>
                    <li>
                        <a className="link-styled">Entertainment</a>
                    </li>
                    <li>
                        <a className="link-styled">Accessories</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                        <NavImage src={Search} alt="search" />
                    </li>
                    <li>
                        <NavImage src={Store} alt="store" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const NavImage = React.memo(({ src, alt }) => {
    return <img src={src} alt={alt} />;
});

export default Nav;
