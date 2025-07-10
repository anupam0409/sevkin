import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import News from '../Layout/News';
import Shopbanner from '../Layout/Shopbanner';
import Advertisement from '../Layout/Advertisement';
import Testimonial from '../Layout/Testimonial';
import Cartbanner from '../Layout/Cartbanner';
import Product from '../Layout/Product';
import Features from '../Layout/Features';
import Hero from '../Layout/Hero';
import Featured from '../Layout/Featured';
import Team from '../Layout/Team';
import Contactform from '../Layout/Contactform';

export class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Get 24/7 Support</p>
                                    <h1>Contact us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contactform />
                <div className="find-location blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p> <img style={{height:'40px',width:'40px'}} src="../assets/img/icon/location.png"></img> Find Our
                                    Location</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
                        width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""
                        className="embed-responsive-item"></iframe>
                </div>
                <Footer />
                <Copyright />
            </div>
        )
    }
}
export default Contact  
