import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getProdApiUrl, loginApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';
import { doLoginData } from '../Service/UserService';

function Header() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const navigate = useNavigate();
  const handleDrawerClose = () => setShowDrawer(false);
  const handleClose = () => { setLoginShow(false); setSearchShow(false) };
  const handleSearchShow = () => setSearchShow(true);
  const handleLoginShow = () => setLoginShow(true);

  const getProduct = (e) => {
    let getUrl = getProdApiUrl
    getProdData(getUrl).then(obj => {
      if (obj.data) {
        navigate("/craving", { state: { prodList: obj.data } })
      }
    })
  }
  const doLogout = (e) => {
    sessionStorage.clear()
    navigate('/home')
  }
  const doLogin = (e) => {
    const form = e.target;
    e.preventDefault()
    const formData = new FormData(form);
    let postUrl = loginApiUrl
    let getDataString = { "username": formData.get('username'), "password": formData.get('password') }
    doLoginData(postUrl, getDataString).then(obj => {
      if (obj.status === 'OK') {
        sessionStorage.setItem('username', obj.data[0].username)
        setShowSuccess(true)
        setLoginShow(false)
        setTimeout(function () {
          setShowSuccess(false)
        }, 2000);
      }
      if (obj.status === 'NOK') {
        setShowError(true)
        setLoginShow(false)
        setTimeout(function () {
          setShowError(false)
        }, 2000);
      }

    })
  }

  React.useEffect(() => {
    if (document.URL.indexOf("cart") !== -1) {
      if (sessionStorage.getItem('username') == null) {
        setLoginShow(true)
      }
    }
  }, [])

  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              <div className="site-logo">
                <Link to="/home">
                  <img src="/sevkin/assets/img/logo.png" className="menu-logo" alt="sevkin" />
                </Link>
              </div>
              <nav className="navbar navbar-expand-lg hstack gap-3">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul className='navbar-nav ml-auto justify-content-between'>
                    <li className="nav-item active"><Link to="/home">Home</Link></li>
                    <li className='nav-item'><Link to="/about">About</Link></li>
                    <li className='nav-item'><Link to="/contact">Contact</Link></li>
                    <li className='nav-item'><Link onClick={getProduct}>Craving</Link></li>
                    <li className='nav-item'><Link to="/checkout">CheckOut</Link></li>
                    <li className='nav-item'><Link to="/cart"><img className="icon-style"
                      src="/sevkin/assets/img/icon/cart.png" alt='cart'></img></Link></li>
                    <li className='nav-item'> <Link onClick={handleSearchShow}><img className="icon-style"
                      src="/sevkin/assets/img/icon/search.png" alt='search'></img></Link></li>
                    <li className='nav-item'><Link to="whatsapp://send?text=Hello Sevkins, Please let me know your special snack and most ordered one!&phone=+918871406882">
                      <img className="icon-style" src="/sevkin/assets/img/icon/call.png" alt='call'></img></Link></li>
                    {sessionStorage.getItem('username') === null ? <li className='nav-item'><Link onClick={handleLoginShow}><img className="icon-style"
                      src="/sevkin/assets/img/icon/user.png" alt='user'></img></Link></li> :
                      <li style={{ color: 'whitesmoke', padding: '18px' }} className='nav-item'>Hi {sessionStorage.getItem('username')}!<ul className="sub-menu">
                        <li><a href="#logoutSuccessful" onClick={doLogout}><img className="icon-style"
                          src="/sevkin/assets/img/icon/logout.png" alt='cart'></img> Logout</a></li>

                      </ul></li>}
                  </ul>
                </div>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <img className="icon-style"
                    src="/sevkin/assets/img/icon/hamburger.png" alt='hamburger'></img>
                </button>
              </nav>
              <div className="mobile-menu"></div>
            </div>
          </div >
        </div >
      </div >
      <a href="#!" onClick={() => {
        setShowDrawer(true)
      }} className="float">
        <img className="icon-style my-float"
          src="/sevkin/assets/img/icon/all.png" alt='chat'></img>
      </a>
      <Modal show={searchShow} onHide={handleClose} style={{ borderColor: 'whitesmoke' }}>
        <Modal.Body className='search-modal' ><Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1">
            <div className='row'>
              <div className='col-10'>
                <Form.Control as="textarea" rows={1} placeholder='Search Content...' />
              </div>
              <div className='col-2'>
                <a href='#!' className="boxed-btn"><img className="icon-style"
                  src="/sevkin/assets/img/icon/search.png" alt='search'></img></a>
              </div>
            </div>
          </Form.Group>
        </Form></Modal.Body>
      </Modal>
      <Modal show={loginShow} onHide={handleClose} style={{ borderColor: 'whitesmoke' }}>
        <form onSubmit={doLogin} id="loginForm">
          <Modal.Body className='search-modal' >
            <h4 className='orange-text'>Sign in or create account</h4>
            <br />
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Control type="text" placeholder="Username" name="username" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#47555D', justifyContent: 'space-between' }}>
            <small className='text-light font-italic'>© 2025 sevkin.com, Inc. or its affiliates</small>
            <Button variant="warning" className="boxed-btn" type='submit'>Continue</Button>

          </Modal.Footer>
        </form>
      </Modal>
      <Offcanvas show={showDrawer} onHide={handleDrawerClose} placement='end' style={{ color: 'whitesmoke', backgroundImage: 'linear-gradient(#1a2c35,#47555D)', width: '250px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello, {sessionStorage.getItem('username') !== null ? sessionStorage.getItem('username') + '!' : 'Guest!'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>
          <h6 className="bg-body-tertiary p-2">Trending</h6>
          <ul className="list-group list-group-light mb-4">
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Exciting Flavours</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Newly Launched</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Best Sellers</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Women's Special Combo</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Mixtures of Ratlam</button>
          </ul>
          <h6 className="bg-body-tertiary p-2">Choose by Category</h6>
          <ul className="list-group list-group-light mb-4">
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Sev</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Gathiya</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Chips</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Namkeen</button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Nuts</button>
          </ul>
          <h6 className="bg-body-tertiary p-2">Help and Settings</h6>
          <ul className="list-group list-group-light mb-4">
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Your Account</button>
            <button type='button' className="list-group-item d-flex justify-content-between align-items-center border-0 text-white">Wallet<span className="badge badge-light rounded-pill text-dark">₹0</span></button>
            <button type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Admin Service</button>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Toast show={showSuccess} style={{ backgroundImage: 'linear-gradient(#4BB543,#87cc80)', color: 'white', fontSize: '15px', borderLeft: '4px solid green'}}>
        <Toast.Body><img style={{padding:'8px'}} src="/sevkin/assets/img/icon/success.png" alt="sevkin" height={50} width={50}/>&nbsp;<b>Login Successful</b></Toast.Body>
      </Toast>
      <Toast show={showError} style={{ backgroundImage: 'linear-gradient(#DC3545,#ee7b7b)', color: 'white', fontSize: '15px', borderLeft : '4px solid red'}}>
        <Toast.Body><img src="/sevkin/assets/img/icon/error.png" alt="sevkin" height={50} width={50}/><b>Invalid Credentials</b></Toast.Body>
      </Toast>
    </div>
  );
}
export default Header;  