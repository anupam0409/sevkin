import React from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';

const Cart = () => {
    React.useEffect(() => {
        let pcode = (new URLSearchParams(window.location.search)).get("pcode")
        if (pcode !== null && sessionStorage.getItem('username') !== null) {

        }
    }, [])
    return (
        <div>
            <Header />
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Pristine and Natural</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-section">
                {sessionStorage.getItem('username') !== null ? <div className="container">
                    <br />
                    <a href="/craving" className="boxed-btn">Continue Shopping</a>
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-image">Product Image</th>
                                            <th className="product-name">Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-body-row">
                                            <td className="product-image"><img src="/sevkin/assets/img/products/product-img-1.png"
                                                alt="img" /></td>
                                            <td className="product-name">Ratlami Sev</td>
                                            <td className="product-price">₹85</td>
                                            <td className="product-quantity"><input type="number" placeholder="1" /></td>
                                            <td className="product-total">1</td>
                                            <td className="product-remove"><a href="#!"><img className="icon-style"
                                                src="/sevkin/assets/img/icon/close-black.png" alt="close" /></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-data">
                                            <td><strong>Subtotal: </strong></td>
                                            <td>₹500</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>₹45</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>₹545</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <a href="cart.html" className="boxed-btn">Update Cart</a>
                                    <a href="checkout.html" className="boxed-btn black">Check Out</a>
                                </div>
                            </div>

                            <div className="coupon-section">
                                <h3>Apply Coupon</h3>
                                <div className="coupon-form-wrap">
                                    <form action="index.html">
                                        <p><input type="text" placeholder="Coupon" /></p>
                                        <p><input type="submit" value="Apply" /></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div> : <div className='text-center'><img className='oc-empty-cart'
                        src="/sevkin/assets/img/icon/oc-empty-cart.svg" alt='cart'></img><br /><p className="empty-cart-text">Your cart is currently empty.</p><br />
                    <p>Before proceed to checkout you must add some products to your sevkin cart.<br />You will find a lot of interesting products on our "Craving" page.</p><br/></div>}
            </div>
            <Clientlogo />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Cart  
