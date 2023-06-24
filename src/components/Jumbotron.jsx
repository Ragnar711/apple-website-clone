import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";
import { handleLearnMore } from "../utils";

const Jumbotron = () => {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <JumbotronImage src={Iphone} alt="Iphone" />
            <p className="text">Big and bigger</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>
                        Learn more
                    </a>
                </li>
            </ul>
            <JumbotronImage
                src={HoldingIphone}
                alt="Iphone"
                className="iphone-img"
            />
        </div>
    );
};

const JumbotronImage = ({ src, alt, className }) => {
    return <img className={className} src={src} alt={alt} />;
};

export default Jumbotron;
