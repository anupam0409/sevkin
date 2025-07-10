import React from 'react';


function Contactform() {
    return (
        <div className="contact-from-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="form-title">
                            <h2>Have you any question?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est,
                                assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                                esse natus!</p>
                        </div>
                        <div id="form_status"></div>
                        <div className="contact-form">
                            <form type="POST" id="sevkinkha-contact">
                                <p>
                                    <input type="text" placeholder="Name" name="name" id="name" />
                                    <input type="email" placeholder="Email" name="email" id="email" />
                                </p>
                                <p>
                                    <input type="tel" placeholder="Phone" name="phone" id="phone" />
                                    <input type="text" placeholder="Subject" name="subject" id="subject" />
                                </p>
                                <p><textarea name="message" id="message" cols="30" rows="10"
                                    placeholder="Message"></textarea></p>
                                <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                <p><input type="submit" value="Submit" /></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form-wrap">
                            <div className="contact-form-box">
                                <h4><img className="icon-style" src="/sevkin/assets/img/icon/location-black.png" alt="location"></img> Shop Address</h4>
                                <p>Vanrai Colony, Goregaon East <br /> Maharashtra, Mumbai. <br /> India</p>
                            </div>
                            <div className="contact-form-box">
                                <h4><img className="icon-style" src="/sevkin/assets/img/icon/clock-black.png" alt="clock"></img> Shop Hours</h4>
                                <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                            </div>
                            <div className="contact-form-box">
                                <h4><img className="icon-style" src="/sevkin/assets/img/icon/address-black.png" alt="address"></img> Contact</h4>
                                <p>Phone: +91 88714 06882<br /> Email: ayushchem31@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactform;  