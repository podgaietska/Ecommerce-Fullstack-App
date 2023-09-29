import React from "react";
import { BiMap, BiEnvelope, BiPhone, BiTime } from "react-icons/bi";
function Contact() {

    return (
        <div>
            <div className="page-header">
                <h2>.contact</h2>
            </div>
            <div className="contact-container">
                <div className="form-details">
                    <span>LEAVE US A MESSAGE</span>
                        <p>Have a question you need answered? Our customer service team is here to help!</p>
                        <h3>CALL US</h3>
                        <p><strong>CA</strong> +1 (403) 123 4567 (Mon - Fri 9:30am - 6pm MST)</p>
                        <p><strong>US</strong> +1 (673) 123 4567 (Mon - Fri 8:30am - 5pm MST)</p>
                        <p>Alternatively, you can contact us via the form below or email us at customercare@gmail.com. We will try to get back to you within 48 hours.</p>
                    <form action="">
                        <h2>CONTACT FORM</h2>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Subject" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-details section">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>VISIT US</h2>
                        <h3>HEAD OFFICE</h3>
                        <div>
                            <li>
                                <BiMap className="icon"/>
                                <p>1234 16th Ave NW, Calgary AB</p>
                            </li>
                            <li>
                                <BiEnvelope className="icon"/>
                                <p>vektor@gmail.com</p>
                            </li>
                            <li>
                                <BiPhone className="icon"/>
                                <p>403 123 4567</p>
                            </li>
                            <li>
                                <BiTime className="icon"/>
                                <p>Mondays to Saturdays: 9:30am - 16:00pm</p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.6303236638937!2d-114.13917211114503!3d51.07837390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717db7481cb3b1%3A0x36aff4a9e3c803fb!2sUniversity%20of%20Calgary!5e0!3m2!1sen!2sca!4v1683659211581!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Contact;