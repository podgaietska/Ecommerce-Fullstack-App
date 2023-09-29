import React from "react";
import '../slider.scss';
import Glide from "@glidejs/glide"
import { useEffect } from "react";
import {Link} from "react-router-dom";

function Home() {
    const sliderConfig = {
        type: 'slider',
        startAt: 0,
        autoplay: 5000,
        hoverpause: false,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear',
        dragDistance: false,
        touchDistance: false,
    };

    const slider = new Glide('.glide', sliderConfig);

    useEffect(() => { slider.mount(); }, []);

    return (
    <div>
        <div className="hero">
            <div className="glide" id="glide1">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                        <div className="center">
                            <div className="left">
                                <span>New inspirations of 2023</span>
                                <h1>FIND YOUR STYLE</h1>
                                <p>Explore the hottest brands and their newest collections</p>
                            </div>
                            <div className="right">
                                <img src="/hero1.png" className="img1" alt="hero1"/>
                            </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className="center">
                            <div className="left">
                                <span>New Inspiration 2023</span>
                                <h1>CURATED FOR YOU</h1>
                                <p>Discover, define, and design your unique style.</p>
                            </div>
                            <div className="right">
                                <img src="/hero2.png" className="img2" alt="hero2"/>
                            </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className="center">
                            <div className="left">
                                <span>New Inspiration 2023</span>
                                <h1>ELEVATE YOUR FASHION</h1>
                                <p>Unearth the extraordinary in fashion with us.</p>
                            </div>
                            <div className="right">
                                <img src="/hero3.png" className="img3" alt="hero3"/>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        <div className="section new-arrival">
            <div className="info">
                <div className="title">
                    <h1>COMING SOON</h1>
                    <small>Check out out what's coming from Represent</small>
                </div>
                <p>Our mission is clear: we're here to provide you with access to the trendiest, most sought-after clothing from renowned brands. Whether you're looking to refine your personal style or discover new ways to express yourself. Our carefully curated selection of limited-edition and hard-to-find pieces is designed to make your search effortless. </p>
            </div>
            <div className="card-section">
                <div className="card-container">
                    <div className="card">
                        <div className="card-background" style={{backgroundImage: "url(/card1.jpg)"}}></div>
                        <div className="content">
                            <div className="card-category">HOODIE</div>
                            <h3 className="card-heading">Burning Red Hoodie</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-background" style={{backgroundImage: "url(/card5.jpg)"}}></div>
                        <div className="content">
                            <div className="card-category">SHIRT</div>
                            <h3 className="card-heading">No Plane For Today Tee</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-background" style={{backgroundImage: "url(/card3.jpg)"}}></div>
                        <div className="content">
                            <div className="card-category">HOODIE</div>
                            <h3 className="card-heading">Nature Green Hoodie</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-background" style={{backgroundImage: "url(/card4.jpg)"}}></div>
                        <div className="content">
                            <div className="card-category">JACKET</div>
                            <h3 className="card-heading">Bright Orange Vintage Jacket</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* Brands */}
        <div className="section brands">
            <div className="info">
                <div className="title">
                    <h1>FEATURED BRANDS</h1>
                    <small>Check out which brands made it into our favorites this week</small>
                </div>
            </div>
            <div className="brands-top">
                <div className="brand">
                    <img src="/undercoverbanner.jpg" alt="" />
                    <div>
                        <p>UNDERCOVER</p>
                    </div>
                </div>
                <div className="brand">
                    <img src="/representBanner.jpg" alt="" />
                    <div>
                        <p>REPRESENT</p>
                    </div>
                </div>
            </div>
            <div className="brands-bottom">
                <div className="brand text">
                    <p>Every week, we embark on a mission to showcase the most innovative brands with the hottest pieces. Our team scours the fashion landscape to bring you the latest and greatest from the world of style. From emerging designers pushing boundaries to well-established labels redefining trends, our curated selection reflects the ever-evolving nature of fashion. </p>
                </div>
                <div className="brand">
                    <img src="/northfaceBanner.jpg" alt="" />
                    <div>
                        <p>NORTH FACE</p>
                    </div>
                </div>
                <div className="brand">
                    <img src="/palaceBanner.jpg" alt="" />
                    <div>
                        <p>PALACE</p>
                    </div>
                </div>
            </div>
        </div>
{/* Promotion banner */}
        <div className="section banner">
            <div className="left">
                <h1>New Collection</h1>
                <p>Browse through new pieces from you favorite brands </p>
                <Link to="/shop"><div className="btn">Check it out</div></Link>
            </div>
            <div className="right">
                <img src="/banner2.png" alt="" />
            </div>
        </div>

   {/* Contact */}
        <div className="contact-section">
            <div className="row">
                <div className="contact-details">
                    <h3>CALL US</h3>
                    <p><strong>CA</strong> +1 (403) 123 4567 (Mon - Fri 9:30am - 6pm MST)</p>
                    <p><strong>US</strong> +1 (673) 123 4567 (Mon - Fri 8:30am - 5pm MST)</p>
                    <p>Alternatively, you can contact us via the form below or email us at customercare@gmail.com. We will try to get back to you within 48 hours.</p>
                </div>
                <div className="invite-to-contactpage">
                    <h2>Excellent Customer Support</h2>
                    <p>We are here to support you 24/7! Have any questions? give us a call or a text, or head to our contact page and explore other ways to reach out!</p>
                    <Link to="/contact"><div className="btn btn-1">Contact</div></Link>
                </div>
            </div>
        </div>
    </div>
    );
    }

export default Home;