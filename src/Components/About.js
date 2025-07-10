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

export class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>We Sale Fresh Snacks</p>
                                    <h1>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Featured/>
                <Shopbanner/>
                <Team/>
                <Testimonial/>
                <Clientlogo/>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
export default About  
