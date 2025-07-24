import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
            <div className="hero-area hero-bg" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-lg-12 pt-150 pb-150">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <div className="row">
                                        {/*<div className="col-lg-6 col-md-6">
                                            <div id="demo" className="carousel slide" data-ride="carousel">
                                                <ul className="carousel-indicators">
                                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                                    <li data-target="#demo" data-slide-to="1"></li>
                                                    <li data-target="#demo" data-slide-to="2"></li>
                                                </ul>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img className="branding-logo" src="/sevkin/assets/img/branding/brand-logo1.jpg"
                                                            alt="Los Angeles" width="1100" height="500"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="branding-logo" src="/sevkin/assets/img/branding/brand-logo2.jpg"
                                                            alt="Los Angeles" width="1100" height="500"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="branding-logo" src="/sevkin/assets/img/branding/brand-logo3.jpg"
                                                            alt="Los Angeles" width="1100" height="500"/>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                                    <span className="carousel-control-prev-icon"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                                    <span className="carousel-control-next-icon"></span>
                                                </a>
                                            </div>
                                        </div>*/}
                                        <div className="text-center">
                                            <p className="subtitle">Taste of India</p>
                                            <h3>Delicious Crunchy Snacks</h3>
                                            <div className="hero-btns">
                                                <Link to="/craving" className="boxed-btn">Snack Collection</Link>
                                                <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;  