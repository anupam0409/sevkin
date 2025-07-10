import { Component } from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';


export class Subcraving extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>See more Details</p>
                                    <h1>Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="single-product-img">
                                    <img src="../assets/img/products/product-img-5.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="single-product-content">
                                    <h3>Sevkin Banana Chips</h3>
                                    <p className="single-product-pricing"><span>Per Kg</span> ₹50</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi
                                        cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi
                                        perferendis eos eum modi! Tempora, earum.</p>
                                    <div className="single-product-form">
                                        <form action="index.html">
                                            <input type="number" placeholder="0" />
                                        </form>
                                        <a href="cart.html" className="cart-btn"><img className="icon-style"
                                            src="../assets/img/icon/cart.png" alt="cart"></img> Add to Cart</a>
                                        <p><strong>Categories: </strong>Chips, Banana chips</p>
                                    </div>
                                    <h4>Share:</h4>
                                    <ul className="product-share">
                                        <li><a href="#!"><img className="icon-style"
                                            src="../assets/img/icon/facebook-black.png" alt="facebook"></img></a></li>
                                        <li><a href="#!"><img className="icon-style" src="../assets/img/icon/twitter-black.png" alt="twitter"></img></a>
                                        </li>
                                        <li><a href="#!"><img className="icon-style" src="../assets/img/icon/google-black.png" alt="google"></img></a>
                                        </li>
                                        <li><a href="#!"><img className="icon-style"
                                            src="../assets/img/icon/linkedin-black.png" alt="linkedIn"></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-products mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="section-title">
                                    <h3><span className="orange-text">Related</span> Products</h3>
                                    <p>You may also like</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 text-center">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="../assets/img/products/product-img-1.png"
                                            alt="" /></a>
                                    </div>
                                    <h3>Potato Chips</h3>
                                    <p className="product-price"><span>Per Kg</span> 85₹ </p>
                                    <a href="cart.html" className="cart-btn"><img className="icon-style"
                                        src="../assets/img/icon/cart.png" alt="cart" />Add to Cart</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 text-center">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="../assets/img/products/product-img-2.png"
                                            alt="img" /></a>
                                    </div>
                                    <h3>Soya Caps</h3>
                                    <p className="product-price"><span>Per Kg</span> 70₹ </p>
                                    <a href="cart.html" className="cart-btn"><img className="icon-style" src="../assets/img/icon/cart.png" alt='cart' />
                                        Add to Cart</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 text-center">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="../assets/img/products/product-img-2.png"
                                            alt="img" /></a>
                                    </div>
                                    <h3>Wheels Crunch</h3>
                                    <p className="product-price"><span>Per Kg</span> 70₹ </p>
                                    <a href="cart.html" className="cart-btn"><img className="icon-style" src="../assets/img/icon/cart.png" alt="cart" />
                                        Add to Cart</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 offset-lg-0 offset-md-3 text-center">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="../assets/img/products/product-img-3.png"
                                            alt="img" /></a>
                                    </div>
                                    <h3>Tango Chips</h3>
                                    <p className="product-price"><span>Per Kg</span> 35₹ </p>
                                    <a href="cart.html" className="cart-btn"><img className="icon-style" src="../assets/img/icon/cart.png" alt='cart' />
                                        Add to Cart</a>
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
export default Subcraving  
