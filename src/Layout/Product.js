import React from 'react';
import { Link } from 'react-router-dom';


function Product() {
    return (
        <div className="ProductSection">
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> Products</h3>
                                <p>We serves all types of snacks as sev, chips, crackers, frozen snacks/appetizers, nuts/trail
                                    mixes, popcorn, pretzels, puffs/extruded snacks, popped snacks and tortilla.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-6 text-center">

                            <div className="single-product-item">
                                <div className="product-image">
                                    <p id="product-badge">
                                        30% <br /><small>Off</small>
                                    </p>
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-1.png" alt="" /></Link>
                                </div>
                                <h5>Masala Sev</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <p className="product-price"><span>Per Kg</span> ₹125 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <p id="product-badge">
                                        10% <br /><small>Off</small>
                                    </p>
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-2.png" alt="" /></Link>
                                </div>
                                <h5>Ratlami Sev</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <p className="product-price"><span>Per Kg</span> ₹80 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-3.png" alt="" /></Link>
                                </div>
                                <h5>Aloo Bhujia</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <p className="product-price"><span>Per Kg</span> ₹110 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <p id="product-badge">
                                        55% <br /><small>Off</small>
                                    </p>
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-4.png" alt="" /></Link>
                                </div>
                                <h5>Tomato Sev</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />


                                <p className="product-price"><span>Per Kg</span> ₹110 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-5.png" alt="" /></Link>
                                </div>
                                <h5>Garlic Sev</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <p className="product-price"><span>Per Kg</span> ₹110 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <div id="product-badge">
                                        55% <br /><small>Off</small>
                                    </div>
                                    <Link to="/subcraving"><img className="product-img-style"
                                        src="../assets/img/products/product-img-6.png" alt="" /></Link>
                                </div>
                                <h5>Roasted Nuts</h5>
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star-checked.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <img className="rate-icon-style" src="../assets/img/icon/star.png" alt="" />
                                <p className="product-price"><span>Per Kg</span> ₹110 </p>
                                <a href="cart.html" target="_parent" className="cart-btn"><img className="icon-style"
                                    src="../assets/img/icon/cart.png" alt="cart"></img> <small>Add to Cart</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;  