import React from 'react';


function Testimonial() {
    return (
        <div className="Testimonial">
            <div className="testimonail-section mt-150 mb-150">
                <div className="container">
                    <center>
                        <h2><span className="orange-text">Happy</span> Customers</h2><br />
                    </center>
                    <marquee scrollamount="10">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="testimonial-sliders">
                                    <div className="single-testimonial-slider">
                                        <div className="client-avater">
                                            <img src="../assets/img/avaters/avatar1.png" alt="" />
                                        </div>
                                        <div className="client-meta">
                                            <h3>Devansh Gupta <span>Local shop owner</span></h3>
                                            <p className="testimonial-body">
                                                "It was Good Service"
                                            </p>
                                            <div className="last-icon">
                                                <img className="icon-style" src="../assets/img/icon/quote.png" alt="quote"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-testimonial-slider">
                                        <div className="client-avater">
                                            <img src="../assets/img/avaters/avatar2.png" alt="" />
                                        </div>
                                        <div className="client-meta">
                                            <h3>Govind Patil <span>Local shop owner</span></h3>
                                            <p className="testimonial-body">
                                                "Taste was awesome!!"
                                            </p>
                                            <div className="last-icon">
                                                <img className="icon-style" src="../assets/img/icon/quote.png" alt="quote"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-testimonial-slider">
                                        <div className="client-avater">
                                            <img src="../assets/img/avaters/avatar3.png" alt="" />
                                        </div>
                                        <div className="client-meta">
                                            <h3>Hrishikesh N <span>Local shop owner</span></h3>
                                            <p className="testimonial-body">
                                                " Really Liked it. I will recommend others too. Thanks Sevkin!"
                                            </p>
                                            <div className="last-icon">
                                                <img className="icon-style" src="../assets/img/icon/quote.png" alt="quote"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;  