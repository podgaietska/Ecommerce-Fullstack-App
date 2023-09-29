import React from 'react';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoGithub, BiLogoTwitter, BiLogoPinterest } from "react-icons/bi";

function Footer(){
    return(
    <div className="section footer">
        <div className="col install">
            <h4>Install App</h4>
            <p>From Appstore or Google Play</p>
            <div className="row">
                <img src="/downloadAppstore.png" alt="" />
                <img src="/downloadGooglePlay.png" alt="" />
            </div>
                <p>Secured Payment Gateways</p>
                <img src="/payment.png" alt="" />
        </div>
        <div className="col">
            <h4>Contact</h4>
            <p><strong>Adress:</strong> 1234 16th Ave NW, Calgary AB</p>
            <p><strong>Phone:</strong> 403 123 4567</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Fri</p>
        </div>
        <div className="col">
            <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <BiLogoFacebookSquare className="social-icon"/>
                        <BiLogoInstagramAlt className="social-icon"/>
                        <BiLogoGithub className="social-icon"/>
                        <BiLogoTwitter className="social-icon"/>
                        <BiLogoPinterest className="social-icon"/>
                    </div>
            </div>
        </div>
        <div className="copyright">
            <p>© 2023 Vektor. All Rights Reserved</p>
        </div>
    </div>);
}

export default Footer;