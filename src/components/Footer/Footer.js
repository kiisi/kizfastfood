import React from 'react'
import './Footer.css'
import facebook from '../../Images/facebook.svg'
import twitter from '../../Images/twitter.svg'
import insta from '../../Images/insta.svg'
import send from '../../Images/Icon material-send.svg'
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="max-wrapper">
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-main-header">
                        <h2><span>Fast</span>Food</h2>
                    </div>
                    <div className="footer-main-content">
                        <p>Fast Food provides 24 hours food delivery to clients which needs our services.<br/>
                            We always make the hungry to smile again.</p>
                    </div>
                    <div className="footer-main-social">
                        <div className="footer-main-social-links">
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={insta} alt="insta" />
                        </div>
                    </div>
                </div>
                <div className="footer-navlink">
                    <div className="footer-navlinks">
                        <div className="footer-navlinks-header">
                            <h1>About</h1>
                        </div>
                        <div className="footer-navlinks-children">
                            <p>About us</p>
                            <p>Features</p>
                            <p>Contact</p>
                            <p>Menu</p>
                        </div>
                    </div>
                    <div className="footer-navlinks">
                        <div className="footer-navlinks-header">
                            <h1>Company</h1>
                        </div>
                        <div className="footer-navlinks-children">
                            <p>Why Us</p>
                            <p>Logistics</p>
                            <p>Policy</p>
                            <p>Docs</p>
                        </div>
                    </div>
                    <div className="footer-navlinks">
                        <div className="footer-navlinks-header">
                            <h1>Support</h1>
                        </div>
                        <div className="footer-navlinks-children">
                            <p>Why Us</p>
                            <p>Partner</p>
                            <p>FAQs</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div className="footer-subscribe-header">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="footer-subscribe-children">
                        <p>Schedule a discovery call to discuss a content strategy partnership by sending us your mail.</p>
                    </div>
                    <div className="footer-subscribe-input">
                        <input type="text" placeholder="Enter Email" />
                        <div className="footer-subscribe-input-send">
                            <img src={send} alt="send" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">FastFood &copy; {year}, All Rights Reserved</div>
        </div>
    )
}

export default Footer