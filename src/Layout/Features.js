import React from 'react';


function Features() {
    return (
        <div className="Features">
            <div className="list-section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <img className="icon-style" src="/sevkin/assets/img/icon/shipping.png" alt="shipping"></img>
                                </div>&nbsp;&nbsp;
                                <div className="vl"></div>
                                &nbsp;&nbsp;
                                <div className="content">
                                    <h3>Free Shipping</h3>
                                    <p>When order over ₹75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <img className="icon-style" src="/sevkin/assets/img/icon/phone24.png" alt="phone24"></img>
                                </div>&nbsp;&nbsp;
                                <div className="vl"></div>
                                &nbsp;&nbsp;
                                <div className="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <img className="icon-style" src="/sevkin/assets/img/icon/refund.png" alt="refund"></img>
                                </div>&nbsp;&nbsp;
                                <div className="vl"></div>
                                &nbsp;&nbsp;
                                <div className="content">
                                    <h3>Refund</h3>
                                    <p>Get refund within 3 days!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Features;  