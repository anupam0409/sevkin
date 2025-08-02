import { Component } from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import Shopbanner from '../Layout/Shopbanner';
import Testimonial from '../Layout/Testimonial';
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
