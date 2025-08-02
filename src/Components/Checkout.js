import React from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Notfound from '../Layout/Notfound';


const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [billingAddress, setBillingAddress] = React.useState(false)
    const [shippingAddress, setShippingAddress] = React.useState(false)
    const [paymentMethod, setPaymentMethod] = React.useState(false)

    const orderDetails = location.state?.orderDetails;

    if (!orderDetails) {
        return (
            <Notfound notFoundCall={{status:'No Orders Found',message:'Please go back and add some products to your cart'}}/>
        );
    }
    const handlePlaceOrder = () => {
        console.log('Placing order:', orderDetails);
        if (billingAddress && shippingAddress && paymentMethod) {
            navigate('/confirmation', { state: { orderDetails } });
        }
        else {
            alert('Required Billing address/Shipping address and complete payment');
        }
    };

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
            <div className="checkout-section">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <img className="icon-style"
                                                        src="/sevkin/assets/img/icon/billingaddress.png" alt='billingaddress' />&nbsp;Billing Address{billingAddress ? <img className="icon-style right"
                                                            src="/sevkin/assets/img/icon/check.png" alt='check' /> : null}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="billing-address-form">
                                                    <form action={() => setBillingAddress(true)}>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="First Name" required /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="Last Name" required /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="email" placeholder="Email Address" required /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="tel" placeholder="Phone Number" required /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="Country" required /></p></div>
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="State" required /></p></div>
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="Postal Code" required /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="Address" required /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="City" required /></p></div>
                                                        </div>
                                                        <p className='mt-3'><input type="submit" value="Continue" /></p>
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
                                                        src="/sevkin/assets/img/icon/shippingaddress.png" alt='shippingaddress' />&nbsp;Shipping Address{shippingAddress ? <img className="icon-style right"
                                                            src="/sevkin/assets/img/icon/check.png" alt='check' /> : null}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="shipping-address-form">
                                                    <form action={() => setShippingAddress(true)}>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="First Name" /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="Last Name" /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="email" placeholder="Email Address" /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="tel" placeholder="Phone Number" /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="Country" /></p></div>
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="State" /></p></div>
                                                            <div className="col-lg-4 p-2"><p><input type="text" placeholder="Postal Code" /></p></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="Address" /></p></div>
                                                            <div className="col-lg-6 p-2"><p><input type="text" placeholder="City" /></p></div>
                                                        </div>
                                                        <p><textarea name="bill" id="bill" cols="30" rows="5" placeholder="Add Comments"></textarea></p>
                                                        <p className='mt-3'><input type="submit" value="Continue" /></p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <img className="icon-style"
                                                        src="/sevkin/assets/img/icon/carddetail.png" alt='carddetail' />&nbsp;Payment Method{paymentMethod ? <img className="icon-style right"
                                                            src="/sevkin/assets/img/icon/check.png" alt='check' /> : null}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-details">
                                                    <Tabs
                                                        defaultActiveKey="pay-by-upi"
                                                        id="fill-tab-example"
                                                        className="mb-3"
                                                        justify>
                                                        <Tab className='p-3' eventKey="pay-by-upi" title={<b className='payment-method'><img className="icon-style"
                                                            src="/sevkin/assets/img/icon/upi.png" alt='upi' />&nbsp;UPI</b>}>
                                                            <form action={() => setPaymentMethod(true)}>
                                                                <span class="d-flex align-items-center gap-3">
                                                                    <input type="radio" class="btn-check p-3" name="upi-selection" id="gpay" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary btn-sm p-3" for="gpay">
                                                                        <img src="/sevkin/assets/img/icon/gpay.png" alt='gpay' />
                                                                        <br />GPay
                                                                    </label>
                                                                    <input type="radio" class="btn-check p-3" name="upi-selection" id="phonepe" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary btn-sm p-3" for="phonepe">
                                                                        <img src="/sevkin/assets/img/icon/phonepe.png" alt='phonepe' />
                                                                        <br />PhonePe
                                                                    </label>
                                                                    <input type="radio" class="btn-check p-3" name="upi-selection" id="paytm" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary btn-sm p-3" for="paytm" >
                                                                        <img src="/sevkin/assets/img/icon/paytm.png" alt='paytm' />
                                                                        <br />Paytm
                                                                    </label>
                                                                </span>
                                                                <p className='upi-submit mt-3'><input type="submit" value="Continue" /></p>
                                                            </form>
                                                        </Tab>
                                                        <Tab eventKey="credit-debit-card" title={<b className='payment-method'><img className="icon-style"
                                                            src="/sevkin/assets/img/icon/card.png" alt='card' />&nbsp;Card</b>}>
                                                            <div class="card single-accordion2">
                                                                <div class="card-header">
                                                                    <h5 className='mb-0'>
                                                                        Credit / Debit Card
                                                                    </h5>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div id="form_status"></div>
                                                                    <div className="card-paym   ent-form">
                                                                        <form action={() => setPaymentMethod(true)}>
                                                                            <div className='row'>
                                                                                <div className="col-lg-6 p-2"><input type="text" placeholder="First Name" name="firstname" /></div>
                                                                                <div className="col-lg-6 p-2"><input type="text" placeholder="Last Name" name="lastname" /></div>
                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className="col-lg-8 p-2"><input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}"
                                                                                    autocomplete="cc-number" maxlength="19"
                                                                                    placeholder="Card Number" required name="cardnumber" /></div>
                                                                                <div className="col-lg-4 p-2"><input type="text" placeholder="CVV" name="cvv" /></div>
                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className="col-lg-6 p-2">
                                                                                    <span class="d-flex align-items-center gap-3"><img
                                                                                        src="/sevkin/assets/img/icon/Visa.svg" alt='visa' />
                                                                                        <img
                                                                                            src="/sevkin/assets/img/icon/Mastercard.svg" alt='mastercard' />
                                                                                        <img
                                                                                            src="/sevkin/assets/img/icon/Rupay.png" alt='rupay' />
                                                                                        <img
                                                                                            src="/sevkin/assets/img/icon/Amex.svg" alt='amex' />
                                                                                        <img
                                                                                            src="/sevkin/assets/img/icon/Maestro.svg" alt='maestro' /></span></div>
                                                                                <div className="col-lg-3 p-2"><input type="text" placeholder="Expiry Month" name="expmonth" /></div>
                                                                                <div className="col-lg-3 p-2"><input type="text" placeholder="Expiry Year" name="expyear" /></div>
                                                                            </div>
                                                                            <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                                                            <p className='card-submit mt-3'><input type="submit" value="Continue" /></p>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>
                                                        <Tab className='p-3' eventKey="net-banking" title={<b className='payment-method'><img className="icon-style"
                                                            src="/sevkin/assets/img/icon/IB.png" alt='IB' />&nbsp;Net Banking</b>}>
                                                            <form action={() => setPaymentMethod(true)}>
                                                                <span class="align-items-center">
                                                                    <input type="radio" class="btn-check" style={{ padding: '5px' }} name="banking-selection" id="sbi" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary" for="sbi">
                                                                        <img className='icon-style-sbi' src="/sevkin/assets/img/icon/sbi.svg" alt='sbi' />
                                                                    </label>
                                                                    <input type="radio" class="btn-check" name="banking-selection" id="icici" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary" for="icici">
                                                                        <img className='icon-style-icici' src="/sevkin/assets/img/icon/icici.svg" alt='icici' />
                                                                    </label>
                                                                    <input type="radio" class="btn-check" name="banking-selection" id="hdfc" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary" for="hdfc"  >
                                                                        <img className='icon-style-hdfc' src="/sevkin/assets/img/icon/hdfc.svg" alt='hdfc' />
                                                                    </label>
                                                                    <input type="radio" class="btn-check" name="banking-selection" id="axis" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary" for="axis" >
                                                                        <img className='icon-style-axis' src="/sevkin/assets/img/icon/axis.svg" alt='axis' />
                                                                    </label>
                                                                    <input type="radio" class="btn-check" name="banking-selection" id="kotak" autocomplete="off" />
                                                                    <label class="btn btn-outline-secondary" for="kotak" >
                                                                        <img className='icon-style-kotak' src="/sevkin/assets/img/icon/kotak.svg" alt='kotak' />
                                                                    </label>
                                                                    <br />
                                                                    <p className='card-submit mt-3'><input type="submit" value="Continue" /></p>
                                                                </span>
                                                            </form>
                                                        </Tab>
                                                        <Tab eventKey="cash-on-delivery" title={<b className='payment-method'><img className="icon-style"
                                                            src="/sevkin/assets/img/icon/cod.png" alt='cod' />&nbsp;COD</b>}>
                                                            <br />
                                                            <form action={() => setPaymentMethod(true)}>
                                                                <h5 className='text-muted text-center p3'> <img className="icon-style"
                                                                    src="/sevkin/assets/img/icon/secure.png" alt='secure' />&nbsp;Secured by Cash on Delivery</h5>
                                                                <p className='cod-submit mt-3'><input type="submit" value="Continue" /></p>
                                                            </form>
                                                        </Tab>
                                                    </Tabs>
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
                                            <th className='fw-bolder'><img className="icon-style"
                                                src="/sevkin/assets/img/icon/orderdetail.png" alt='orderdetail' />&nbsp;Order Summary</th>
                                            <th className='fw-bolder'><img className="icon-style"
                                                src="/sevkin/assets/img/icon/pricetag.png" alt='price' />&nbsp;Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="order-details-body ">
                                        {orderDetails.items?.map((item, index) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td className='text-sm-end'>₹{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tbody className="checkout-details">
                                        <tr><td>Total MRP</td><td className='text-sm-end'>₹{orderDetails.subtotal}</td></tr>
                                        <tr><td>Total Discount</td><td className='text-sm-end'>₹{orderDetails.discount}</td></tr>
                                        <tr><td>Shipping</td><td className='text-sm-end'><del>₹12</del>&nbsp;{orderDetails.shipping}</td></tr>
                                        <tr><td className='fs-4'>Payable</td><td className='right text-sm-end'>₹{orderDetails.payable}</td></tr>
                                        <tr>
                                            <p className='card-submit p-3'><input type="submit" onClick={handlePlaceOrder} value="Place Order" /></p>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <br /></div>
            <Clientlogo />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Checkout  
