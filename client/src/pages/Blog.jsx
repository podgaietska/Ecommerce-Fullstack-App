import React from "react";
import Navbar from "../components/Navbar";
import { BiRightArrowAlt } from "react-icons/bi";

function Blog() {
    return (
        <div>
        <div className="page-header">
            <div>
                <h2>.read_more</h2>
                <p>Explore our blogs</p>
            </div>
        </div>
        <div className="blog">
            <div className="blog-box">
                <div className="blog-details">
                    <h4>Top picks of men's gymwear</h4>
                    <p>Wearing the right workout top can be a make or break for optimising your performance in the gym. As you lift, run, move and sweat, you need a gym top that works alongside your body...</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                    <img src="blog1.jpg" alt="" />
                </div>
                <h1>07/05</h1>
            </div>
            <div className="blog-box">
                <div className="blog-details">
                    <h4>Finding your winter style</h4>
                    <p>The ultimate list of winter fashion trends to guide your winter fashion. Don't get bogged down by cold weather, these fashion trends will...</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                    <img src="blog2.jpg" alt="" />
                </div>
                <h1>31/10</h1>
            </div>
            <div className="blog-box">
                <div className="blog-details">
                    <h4>Ultimate guide to styling your favorite streetwear</h4>
                    <p>If you want to stand out in 2022, you need to know how to dress streetwear clothes. Why? Because the fashion business is now dominated by streetwear and its associated clothes...</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                    <img src="blog3.jpg" alt="" />
                </div>
                <h1>06/10</h1>
            </div>
        </div>
        <div className="pagination">
            <div className="container">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span><BiRightArrowAlt /></span>
            </div>
        </div>
        </div>
    );
    }

export default Blog;