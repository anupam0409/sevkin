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

export class Checkout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Pristine and Natural</p>
                                    <h1>Checkout Items</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="checkout-accordion-wrap">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Billing Address
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="billing-address-form">
                                                        <form action="index.html">
                                                            <p><input type="text" placeholder="Name" /></p>
                                                            <p><input type="email" placeholder="Email" /></p>
                                                            <p><input type="text" placeholder="Address" /></p>
                                                            <p><input type="tel" placeholder="Phone" /></p>
                                                            <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Say Something"></textarea></p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Shipping Address
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shipping-address-form">
                                                        <p>Your shipping address form is here.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Card Details
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="card-details">
                                                        <p>Your card details goes here.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="order-details-wrap">
                                    <table className="order-details">
                                        <thead>
                                            <tr>
                                                <th>Your order Details</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order-details-body">
                                            <tr>
                                                <td>Product</td>
                                                <td>Total</td>
                                            </tr>
                                            <tr>
                                                <td>Ratlami Sev</td>
                                                <td>$85.00</td>
                                            </tr>
                                            <tr>
                                                <td>Potato Chips</td>
                                                <td>$70.00</td>
                                            </tr>
                                            <tr>
                                                <td>Aloo Bhujia</td>
                                                <td>$35.00</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="checkout-details">
                                            <tr>
                                                <td>Subtotal</td>
                                                <td>$190</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>$50</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>$240</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="#" className="boxed-btn">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Clientlogo />
                <Footer />
                <Copyright />
            </div>
        )
    }
}
export default Checkout  
