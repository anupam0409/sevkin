import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import { addCartApiUrl, getCartApiUrl, updateCartApiUrl, deleteCartApiUrl } from '../Properties/AppConfig';
import { addCartData, getCartData, updateCartData, deleteCartData } from '../Service/ProdService';
import { ShowErrorCall, ShowSuccessCall } from '../Service/Util';

const Cart = () => {
    const navigate = useNavigate();

    const [successMessage, setSuccessMessage] = React.useState(null);

    const [errMessage, setErrorMessage] = React.useState(null)

    const [useEffectCallCount, setUseEffectCallCount] = React.useState(0)

    const [userCartData, setUserCartData] = React.useState([])

    const handleChangeQuantity = (e, cartid) => {
        updateLoggedInUserCartData(cartid, parseInt(e.target.value))
    };

    const handleProceedToCheckout = () => {
        if (userCartData.length === 0) {
            alert('Your cart is empty. Please add some items.');
            return;
        }

        const orderDetails = {
            items: userCartData,
            subtotal: totalMRPPrice,
            discount: (totalMRPPrice * 0.10).toFixed(2),
            shipping: 0,
            payable: (totalMRPPrice - (totalMRPPrice * 0.10)).toFixed(2)
        };

        // Navigate to the checkout page, passing state
        // 'state' is a common way to pass data during navigation in React Router v6
        navigate('/checkout', { state: { orderDetails } });
    };
    function addLoggedInUserCartData(pcode, price, size, username) {
        let postUrl = addCartApiUrl
        let getDataString = {
            "username": sessionStorage.getItem('username'),
            "productid": isNaN(parseInt(pcode)) ? null : parseInt(pcode),
            "size": size,
            "price": isNaN(parseInt(price)) ? null : parseInt(price),
            "quantity": 1
        }
        addCartData(postUrl, getDataString).then(obj => {
            if (obj.status === 'OK') {
                setSuccessMessage('Product added to Cart')
                getLoggedInUserCartData(username)
                navigate('/cart')
            }
        })
    }
    function updateLoggedInUserCartData(cartid, quantity) {
        let postUrl = updateCartApiUrl
        let getDataString = {
            "cartid": cartid,
            "quantity": quantity
        }
        updateCartData(postUrl, getDataString).then(obj => {
            if (obj.status === 'OK') {
                window.location.reload();
            }
        })
    }
    const deleteLoggedInUserCartData = (cartid) => {
        let postUrl = deleteCartApiUrl
        let getDataString = {
            "cartid": cartid
        }
        deleteCartData(postUrl, getDataString).then(obj => {
            if (obj.status === 'OK') {
                window.location.reload();
            }
        })
    };
    function getLoggedInUserCartData(username) {
        let postUrl = getCartApiUrl
        let getDataString = {
            "username": username
        }
        getCartData(postUrl, getDataString).then(obj => {
            if (obj.data) {
                setUserCartData(obj.data)
            }
            else {
                console.log('err')
                setErrorMessage('Server Error')
            }
        })
    }
    const quantOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        item => ({ label: item, value: item })
    );

    const totalMRPPrice = userCartData.reduce((sum, cart) => sum + cart.price, 0);

    React.useEffect(() => {
        let pcode = (new URLSearchParams(window.location.search)).get("pcode")
        let size = (new URLSearchParams(window.location.search)).get("size")
        let price = (new URLSearchParams(window.location.search)).get("price")
        let username = sessionStorage.getItem('username')

        if (username !== null && !userCartData?.length && useEffectCallCount === 0) {
            if (pcode != null && size != null && price != null) {
                addLoggedInUserCartData(pcode, price, size, username);
            }
            else {
                getLoggedInUserCartData(username);
            }
        }
        setUseEffectCallCount(1)
        // eslint-disable-next-line
    }, [useEffectCallCount, userCartData])

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
                {sessionStorage.getItem('username') === null || !userCartData?.length ? <div className='text-center'><img className='oc-empty-cart'
                    src="/sevkin/assets/img/icon/oc-empty-cart.svg" alt='cart'></img><br /><p className="empty-cart-text">Your cart is currently empty.</p> <a href="/craving" className="boxed-btn">Start Shopping</a><br /><br />
                    <p>Before proceed to checkout you must add some products to your sevkin cart.<br />You will find a lot of interesting products on our "Craving" page.</p><br /></div> : <div className="container">
                    <br />
                    <a href="/craving" className="boxed-btn">Continue Shopping</a>
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-6 col-md-12 p-2">
                            <div className="cart-table-wrap">
                                <div className="card single-accordion2">
                                    <div className="card-header"><h5 className='font-weight-bold'><img className="icon-style"
                                        src="/sevkin/assets/img/icon/shoppingbag.png" alt='shoppingbag' />&nbsp;Shopping Bag</h5></div>
                                    {userCartData?.map((item, index) => (
                                        <div className="row user-cart" key={index}>
                                            <div className="col-sm-3">
                                                <img className="cart-product-image"
                                                    src={`/sevkin/assets/img/products/${item.image}`}
                                                    alt="img" /></div>
                                            <div className="col-sm-7">
                                                <div className="card-body">
                                                    <h5 className="card-title font-weight-bold">{item.name}</h5>
                                                    <h6 className="card-text">{item.description}</h6>
                                                    <h6>Size: {item.size}</h6><br />
                                                    <h6>Qty: <select size="sm" style={{ width: '15%' }}
                                                        onChange={(e) => {
                                                            handleChangeQuantity(e, item.cartid);
                                                        }}
                                                        value={item.quantity}>
                                                        {quantOption.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select></h6><br />
                                                    <h4 id={`item-price${index}`} className='font-weight-bold'>₹{item.price.toFixed(2)}</h4><br />
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <button type="button" onClick={() => deleteLoggedInUserCartData(item.cartid)} className="btn-close btn-cart-remove" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 p-2">
                            <div className="accordion" id="accordionExample">
                                <div className="card single-accordion">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img className="icon-style"
                                                    src="/sevkin/assets/img/icon/coupon.png" alt='coupon' />&nbsp;Apply Coupon
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="coupon-form-wrap">
                                                <form action="index.html">
                                                    <p><input type="text" placeholder="Coupon Code" /></p>
                                                    <p><a href="cart.html" className="boxed-btn">Apply</a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card single-accordion">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <img className="icon-style"
                                                    src="/sevkin/assets/img/icon/wallet.png" alt='wallet' />&nbsp;Use Wallet
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shipping-address-form">
                                                <h6>Available balance: 0.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 p-2">
                            <div className="card single-accordion2">
                                <div className="card-header"><h5 className='mb-0'><img className="icon-style"
                                    src="/sevkin/assets/img/icon/pricetag.png" alt='pricetag' />&nbsp;Price Details</h5>
                                </div>
                                <div className="card-body">
                                    <p><span class="left">Total MRP:</span><span class="right fs-6">₹{totalMRPPrice.toFixed(2)}</span></p><br />
                                    <p><span class="left">10% Discount on MRP:</span><span class="right fs-6">₹{(totalMRPPrice * 0.10).toFixed(2)}</span></p><br />
                                    <p><span class="left">Coupon Discount:</span><span class="right fs-6">NA</span></p><br />
                                    <p><span class="left">Shipping:</span><span class="right fs-6"><del>₹12</del>&nbsp;Free</span></p><br />
                                    <p><span class="right fs-4">₹{(totalMRPPrice - (totalMRPPrice * 0.10)).toFixed(2)}</span></p><br />
                                </div>

                                <p className='right p-3'><button onClick={handleProceedToCheckout} className="boxed-btn right">Proceed to Checkout</button></p>
                            </div>
                        </div>
                        <br />
                    </div></div>}
            </div>
            <Clientlogo />
            <Footer />
            <Copyright />
            {errMessage != null ? <ShowErrorCall message={errMessage} /> : null}
            {successMessage != null ? <ShowSuccessCall message={successMessage} /> : null}
        </div >
    )
}

export default Cart  
