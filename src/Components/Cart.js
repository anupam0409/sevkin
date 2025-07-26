import React from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import { addCartApiUrl, getCartApiUrl } from '../Properties/AppConfig';
import { addCartData, getCartData } from '../Service/ProdService';
import { ShowErrorCall } from '../Service/Util';

const Cart = () => {
    const [errMessage, setErrorMessage] = React.useState(null)

    const [quantity, setQuantity] = React.useState([])

    const [useEffectCallCount, setUseEffectCallCount] = React.useState(0)

    const [userCartData, setUserCartData] = React.useState([])

    const handleChangeQuantity = (e, index) => {
        const newQuants = [...quantity];
        newQuants[index] = e.target.value;
        setQuantity(newQuants);
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
                getLoggedInUserCartData(username)
            }
        })
    }
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
            {errMessage != null ? <ShowErrorCall message={errMessage} /> : null}
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
                        <div className="col-lg-6 col-md-12">
                            <div className="cart-table-wrap">
                                <div class="card single-accordion2">
                                    <div class="card-header"><h5 className='font-weight-bold'><img className="icon-style"
                                        src="/sevkin/assets/img/icon/shoppingbag.png" alt='shoppingbag' />&nbsp;Shopping Bag</h5></div>
                                    {userCartData?.map((item, index) => (
                                        <div className="row user-cart">

                                            <div className="col-sm-3">
                                                <img className="cart-product-image"
                                                    src={`/sevkin/assets/img/products/${item.image}`}
                                                    alt="img" /></div>
                                            <div className="col-sm-7">
                                                <div class="card-body">
                                                    <h5 class="card-title font-weight-bold">{item.name}</h5>
                                                    <h6 class="card-text">{item.description}</h6>
                                                    <h6>Size: {item.size}</h6><br />
                                                    <h6>Qty: <select size="sm" style={{ width: '15%' }}
                                                        onChange={(e) => {
                                                            handleChangeQuantity(e, { index });
                                                        }}
                                                        value={quantity}>
                                                        {quantOption.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select></h6><br />
                                                    <h4 className='font-weight-bold'>₹{item.price}</h4><br />
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <button type="button" class="btn-close btn-cart-remove" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
                            <div class="card single-accordion2">
                                <div class="card-header"><h5 className='mb-0'><img className="icon-style"
                                    src="/sevkin/assets/img/icon/pricetag.png" alt='pricetag' />&nbsp;Price Details</h5>
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">Total MRP:</h6>
                                    <h6 class="card-title">Discount on MRP:</h6>
                                    <h6 class="card-title">Coupon Discount:</h6>
                                    <h6 class="card-title">Shipping:</h6>
                                    <h6 class="card-title">Total Amount:</h6><br />
                                    <a href="#!" className="boxed-btn">CheckOut</a>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div></div>}
            </div>
            <Clientlogo />
            <Footer />
            <Copyright />
        </div >
    )
}

export default Cart  
