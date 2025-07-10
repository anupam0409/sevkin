import React from 'react';


function Advertisement() {
    return (
        <div className="Advertisement">
            <div className="abt-section mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-bg">
                                <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><img
                                    height="50px" width="50px" style={{ marginTop: '16px' }}
                                    src="/sevkin/assets/img/icon/youtube.png" alt="youtube"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-text">
                                <p className="top-sub">Since Year 2025</p>
                                <h2>Welcome to <span className="orange-text">Sevkin</span></h2>
                                <p>

                                    At Sevkin, we're passionate about bringing you the crunchiest, tastiest sev and namkeen
                                    snacks in town! <br />Our journey began with a simple goal: to share the joy of traditional
                                    Indian
                                    snacking with the world.<br />

                                    <b>Our Story</b><br />

                                    Sevkin is more than just a snack brand – it's a celebration of India's rich culinary
                                    heritage. We're dedicated to crafting high-quality, flavorful snacks that bring people
                                    together. <br />From our carefully selected ingredients to our traditional cooking methods,
                                    every
                                    step of our process is designed to deliver the perfect snacking experience.


                                </p>
                                <a href="about.html" className="boxed-btn mt-4">know more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;  