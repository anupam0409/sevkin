import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tabs from 'react-bootstrap/Tabs';


const Account = () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const [profileIndicator, setProfileIndicator] = React.useState(null);
    const handleDrawerClose = () => setShowDrawer(false);

    const [profileDetail, setProfileDetail] = React.useState({
        name: 'Anupam Vishwakarma',
        username: 'vishwanu', dob: '04/09/1997', email: 'anupamv20@gmail.com',
        mobile: '7308943875', homedeliverp1: '603, Akshita Heights, Miraroad,',
        homedeliverp2: 'Thane, Maharashtra, 401107', officedeliverp1: '603, Akshita Heights, Miraroad,',
        officedeliverp2: 'Thane, Maharashtra, 401107'
    })

    const [profileDetailToggle, setProfileDetailToggle] = React.useState({
        name: false,
        username: false, dob: false, email: false,
        mobile: false, homedeliverp1: false,
        homedeliverp2: false, officedeliverp1: false,
        officedeliverp2: false
    })
    return (
        <div className="Account">
            <section className="account-banner pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 text-center p-2">
                            <div class="card">
                                <div class="card-body">
                                    <img class="card-img-top" src="/sevkin/assets/img/avaters/avatar2.png" alt="profilepicture" />
                                    <h3 class="card-title">Anupam Vishwakarma</h3>
                                    <h5 class="card-title text-muted">vishwanu</h5>
                                    <br />
                                    <div class="card-text">
                                        <span className='d-flex justify-content-between'><h6 class="card-title text-muted left">anupamv30@gmail.com</h6>
                                            <div class="form-check form-switch right">
                                                <input style={{ marginTop: '5px' }} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Notification</label>
                                            </div>
                                        </span>
                                        <br />
                                        <div class="account-button-group">
                                            <button onClick={() => { setProfileIndicator('orders'); setShowDrawer(true) }} className="boxed-btn"><img className="icon-style"
                                                src="/sevkin/assets/img/icon/order-w.png" alt='order' />&nbsp;Orders</button>
                                            <button onClick={() => { setProfileIndicator('coupons'); setShowDrawer(true) }} className="boxed-btn"><img className="icon-style"
                                                src="/sevkin/assets/img/icon/coupon-w.png" alt='coupon' />&nbsp;Coupons</button>
                                            <button onClick={() => { setProfileIndicator('wishlist'); setShowDrawer(true) }} className="boxed-btn"><img className="icon-style"
                                                src="/sevkin/assets/img/icon/wishlist-w.png" alt='wishlist' />&nbsp;Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 text-center p-2">
                            <p class="card-text text-center p-1">
                                <Tabs defaultActiveKey="overview" id="fill-tab-example" className="mb-3" justify>
                                    <Tab className='p-3' eventKey="overview" title={<b className='account-tab'><img className="icon-style-overview"
                                        src="/sevkin/assets/img/icon/overview.png" alt='overview' />&nbsp;Overview</b>}>
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/overview.png" alt='order' />&nbsp;Total Orders</span><span class="right fs-6">0</span></p><br />
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/cw.png" alt='cw' />&nbsp;Wallet&nbsp;<a href='/setting?on=wallet'><img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></a></span><span class="right fs-6">₹0.00</span></p><br />
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/referandearn.png" alt='referandearn' />&nbsp;Refer and Earn&nbsp;<img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></span><span class="right fs-6">₹0 From Referral</span></p><br />
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/suggest.png" alt='suggest' />&nbsp;Sevkin Suggests&nbsp;<img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></span><span class="right fs-6"></span></p><br />
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/helpcenter.png" alt='helpcenter' />&nbsp;Help Center&nbsp;<img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></span><span class="right fs-6"></span></p><br />
                                    </Tab>
                                    <Tab className='p-3' eventKey="profile" title={<b className='account-tab'><img className="icon-style-profile"
                                        src="/sevkin/assets/img/icon/profile.png" alt='profile' />&nbsp;Profile</b>}>
                                        <p><span class="left">
                                            <b className='deliver-text p-2'>Name:</b>
                                            {profileDetailToggle.name ? <small><input
                                                className='profile-text'
                                                type='text'
                                                value={profileDetail.name}
                                                onChange={(e) => setProfileDetail({ ...profileDetail, name: e.target.value })}
                                            />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ name: false })}
                                                src="/sevkin/assets/img/icon/check.png" alt='save' /></small> : <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ name: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                &nbsp;<span className='badge border border-secondary text-secondary p-2'>{profileDetail.name}</span></b>}
                                            &nbsp;
                                        </span>
                                        </p>
                                        <br />
                                        <p><span className='left'>
                                            <b className='deliver-text p-2'>Username:</b>
                                            {profileDetailToggle.username ? <small><input
                                                className='profile-text'
                                                type='text'
                                                value={profileDetail.username}
                                                onChange={(e) => setProfileDetail({ ...profileDetail, username: e.target.value })}
                                            />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ username: false })}
                                                src="/sevkin/assets/img/icon/check.png" alt='save' /></small> : <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ username: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                &nbsp;<span className='badge border border-secondary text-secondary p-2'>{profileDetail.username}</span></b>}
                                        </span></p>
                                        <br />
                                        <p><span class="left"><b className='deliver-text p-2'>DOB:</b>
                                            {profileDetailToggle.dob ? <small><input
                                                className='profile-text'
                                                type='text'
                                                value={profileDetail.dob}
                                                onChange={(e) => setProfileDetail({ ...profileDetail, dob: e.target.value })}
                                            />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ dob: false })}
                                                src="/sevkin/assets/img/icon/check.png" alt='save' /></small> : <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ dob: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                &nbsp;<span className='badge border border-secondary text-secondary p-2'>{profileDetail.dob}</span></b>}
                                        </span></p><br />
                                        <p><span class="left"><b className='deliver-text p-2'>Email:</b>
                                            {profileDetailToggle.email ? <small><input
                                                className='profile-text'
                                                type='text'
                                                value={profileDetail.email}
                                                onChange={(e) => setProfileDetail({ ...profileDetail, email: e.target.value })}
                                            />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ email: false })}
                                                src="/sevkin/assets/img/icon/check.png" alt='save' /></small> : <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ email: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                &nbsp;<span className='badge border border-secondary text-secondary p-2'>{profileDetail.email}</span></b>}</span></p><br />
                                        <p><span class="left"><b className='deliver-text p-2'>Mobile:</b>
                                            {profileDetailToggle.mobile ? <small><input
                                                className='profile-text'
                                                type='text'
                                                value={profileDetail.mobile}
                                                onChange={(e) => setProfileDetail({ ...profileDetail, mobile: e.target.value })}
                                            />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ mobile: false })}
                                                src="/sevkin/assets/img/icon/check.png" alt='save' /></small> : <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ mobile: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                &nbsp;<span className='badge border border-secondary text-secondary p-2'>{profileDetail.mobile}</span></b>}</span></p><br />
                                        <p><span class="left"><b className='deliver-text p-2'>Preference Payment:</b>
                                            <span className='badge border border-secondary text-secondary p-2'>UPI</span>&nbsp;
                                            <span className='badge border border-secondary text-secondary p-2'>COD</span></span></p><br /><br />
                                        <p>
                                            <span class="left">
                                                {profileDetailToggle.homedeliverp1 ? <small className='flex-1 w-full md:w-auto' style={{ float: 'left' }}><input placeholder='Home Address 1'
                                                    className='profile-text w-full p-3 rounded-md focus:ring-2'
                                                    type='text'
                                                    value={profileDetail.homedeliverp1}
                                                    onChange={(e) => setProfileDetail({ ...profileDetail, homedeliverp1: e.target.value })}
                                                /><input placeholder='Home Address 2'
                                                    className='profile-text w-full p-3 rounded-md focus:ring-2'
                                                    type='text'
                                                    value={profileDetail.homedeliverp2}
                                                    onChange={(e) => setProfileDetail({ ...profileDetail, homedeliverp2: e.target.value })}
                                                    />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ homedeliverp1: false })}
                                                        src="/sevkin/assets/img/icon/check.png" alt='save' /></small> :
                                                    <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ homedeliverp1: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                        &nbsp;<span className='badge border border-secondary text-secondary text-wrap text-left p-3'><b className='deliver-text'>Home Deliver: </b>{profileDetail.homedeliverp1}<br />{profileDetail.homedeliverp2}
                                                        </span></b>}<br /><br />
                                            </span>
                                        </p><br /><br /><br />
                                        <p>
                                            <span class="left">
                                                {profileDetailToggle.officedeliverp1 ? <small className='flex-1 w-full md:w-auto' style={{ float: 'left' }}><input placeholder='Office Address 1'
                                                    className='profile-text w-full p-3 rounded-md focus:ring-2'
                                                    type='text'
                                                    value={profileDetail.officedeliverp1}
                                                    onChange={(e) => setProfileDetail({ ...profileDetail, officedeliverp1: e.target.value })}
                                                /><input placeholder='Office Address 2'
                                                    className='profile-text w-full p-3 rounded-md focus:ring-2'
                                                    type='text'
                                                    value={profileDetail.officedeliverp2}
                                                    onChange={(e) => setProfileDetail({ ...profileDetail, officedeliverp2: e.target.value })}
                                                    />&nbsp;<img className="icon-style" onClick={(e) => setProfileDetailToggle({ officedeliverp1: false })}
                                                        src="/sevkin/assets/img/icon/check.png" alt='save' /></small> :
                                                    <b><img className="icon-style" onClick={(e) => setProfileDetailToggle({ officedeliverp1: true })} src="/sevkin/assets/img/icon/edit-profile.svg" alt='eidtname' />
                                                        &nbsp;<span className='badge border border-secondary text-secondary text-wrap text-left p-3'><b className='deliver-text'>Office Deliver: </b>{profileDetail.officedeliverp1}<br />{profileDetail.officedeliverp2}

                                                        </span>
                                                    </b>}
                                            </span>
                                        </p>
                                        <p>
                                            <span class="right"><br /><a href="/order" className="boxed-btn p-2"><img className="icon-style"
                                                src="/sevkin/assets/img/icon/save-profile.png" alt='saveprofile' />&nbsp;Save</a></span>
                                        </p>
                                    </Tab>
                                    <Tab className='p-3' eventKey="password" title={<b className='account-tab'><img className="icon-style-password"
                                        src="/sevkin/assets/img/icon/password.png" alt='password' />&nbsp;Password</b>}>
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/resetpswd.png" alt='resetpswd' />&nbsp;Reset Password&nbsp;<img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></span></p><br />
                                        <p><span class="left"><img className="icon-style"
                                            src="/sevkin/assets/img/icon/key.png" alt='changekey' />&nbsp;Change Password&nbsp;<img className="icon-style"
                                                src="/sevkin/assets/img/icon/overview-click.png" alt='overviewclick' /></span></p><br />
                                    </Tab>
                                </Tabs>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Offcanvas show={showDrawer} onHide={handleDrawerClose} placement='start' style={{ color: 'whitesmoke', backgroundImage: 'linear-gradient(#1a2c35,#47555D)', width: '250px' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Hello, {sessionStorage.getItem('username') !== null ? sessionStorage.getItem('username') + '!' : 'Guest!'}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>
                    <h6 className="bg-body-tertiary p-2">{profileIndicator === 'orders' ? 'My Orders' :
                        profileIndicator === 'coupons' ? 'My Coupons' :
                            profileIndicator === 'wishlist' ? 'My Wishlist' :
                                null}</h6>
                    <ul className="list-group list-group-light mb-4">
                        <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white text-center" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>{profileIndicator === 'orders' ? 'No Orders' :
                        profileIndicator === 'coupons' ? 'No Coupons' :
                            profileIndicator === 'wishlist' ? 'No Wishlist' :
                                null}</button>
                                <br/>
                                <a href='/craving' className="boxed-btn text-center" >Shop Now!</a>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Account;  