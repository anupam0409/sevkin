import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import News from '../Layout/News';
import Shopbanner from '../Layout/Shopbanner';
import Advertisement from '../Layout/Advertisement';
import Testimonial from '../Layout/Testimonial';
import Product from '../Layout/Product';
import Features from '../Layout/Features';
import Hero from '../Layout/Hero';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
                <Hero />
                <Features />
                <Product />
                <Testimonial />
                <Advertisement />
                <Shopbanner />
                <News />
                <Clientlogo />
                <Footer />
                <Copyright />
            </div>
        )
    }
}
export default Home  
