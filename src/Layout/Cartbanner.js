import React from 'react';

const Cartbanner = ({ timeLeft }) => {
    return (
        <div className="Cartbanner">
            <section className="cart-banner pt-100 pb-100">
                <div className="container">
                    <div className="row clearfix">
                        <div className="image-column col-lg-6">
                            <div className="image">
                                <div className="price-box">
                                    <div className="inner-price">
                                        <span className="price">
                                            <strong>30%</strong> <br /> off per kg
                                        </span>
                                    </div>
                                </div>
                                <img src="/sevkin/assets/img/deal/deal-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="content-column col-lg-6">
                            <h3><span className="orange-text">Deal</span> of the month</h3>
                            <h4>Ratlami Sev</h4>
                            <div className="text">Sevkin's RATLAMI SEV offers a spicy and crispy indulgence, featuring traditional
                                Indian flavors. Made from chickpea flour and spices, it promises a satisfying crunch with every
                                bite.</div>
                            <div className="time-counter">
                                {timeLeft.days !== null ? 
                                <div className="time-countdown clearfix" data-countdown="2020/2/01">
                                    <div className="counter-column">
                                        <div className="inner"><span className="count">{timeLeft.days | 'NA'}</span>Days</div>
                                    </div>
                                    <div className="counter-column">
                                        <div className="inner"><span className="count">{timeLeft.hours | 'NA'}</span>Hours</div>
                                    </div>
                                    <div className="counter-column">
                                        <div className="inner"><span className="count">{timeLeft.minutes | 'NA'}</span>Mins</div>
                                    </div>
                                    <div className="counter-column">
                                        <div className="inner"><span className="count">{timeLeft.seconds | 'NA'}</span>Secs</div>
                                    </div>
                                </div> : <p>Calculating...</p>}
                            </div>
                            <a href="cart.html" className="cart-btn mt-3"><img className="icon-style"
                                src="/sevkin/assets/img/icon/cart.png" alt="cart"></img> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cartbanner;  