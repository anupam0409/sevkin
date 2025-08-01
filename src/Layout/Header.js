import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getProdApiUrl, loginApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';
import { doLoginData } from '../Service/UserService';
import { ShowErrorCall, ShowSuccessCall, validateUsernamePassword } from '../Service/Util';

function Header() {
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [errMessage, setErrorMessage] = React.useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const navigate = useNavigate();
  const handleDrawerClose = () => setShowDrawer(false);
  const handleClose = () => { setLoginShow(false); setSearchShow(false) };
  const handleSearchShow = () => setSearchShow(true);
  const handleLoginShow = () => setLoginShow(true);

  function decodeToken(token) {
    if (token) {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (error) {
        return error
      }
    }
  }

  const getProduct = (e) => {
    let getUrl = getProdApiUrl
    getProdData(getUrl).then(obj => {
      if (obj.data) {
        navigate("/craving", { state: { prodList: obj.data } })
      }
      else {
        setErrorMessage('Server Error')
      }
    }).catch(err => {
      setErrorMessage('Server Error')
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

    const validationResult = validateUsernamePassword(getDataString.username, getDataString.password);

    if (validationResult.isValid) {
      doLoginData(postUrl, getDataString).then(obj => {
        if (obj.status === 'OK') {
          sessionStorage.setItem('username', obj.data[0].username)
          setLoginShow(false)
          setSuccessMessage('Login Successful')
        } else if (obj.status === 'NOK') {
          setLoginShow(false)
          setErrorMessage('Invalid Credentials')
        } else {
          setLoginShow(false)
          setErrorMessage('Server Error')
        }
      })
    } else {
      setLoginShow(false)
      setErrorMessage(validationResult.errors)
    }
  }

  React.useEffect(() => {
    if (document.URL.indexOf("cart") !== -1) {
      if (sessionStorage.getItem('username') == null) {
        setLoginShow(true)
      }
    }
  }, [])

  return (
    <div className="top-header-area" id="sticker">
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
                    <li className='nav-item'><Link to="/career">Career</Link></li>
                    <li className='nav-item'><Link to="/contact">Contact</Link></li>
                    <li className='nav-item'><Link onClick={getProduct}>Craving</Link></li>
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
      <button onClick={() => {
        setShowDrawer(true)
      }} className="float-button">
        <img className="icon-style my-float"
          src="/sevkin/assets/img/icon/all.png" alt='chat'></img>
      </button>
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
            <a  href="/craving" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Exciting Flavours</a>
            <a  href="/craving" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Newly Launched</a>
            <a href="/craving" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Best Sellers</a>
            <a href="/craving" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Women's Special Combo</a>
            <a href="/craving" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Mixtures of Ratlam</a>
          </ul>
          <h6 className="bg-body-tertiary p-2">Choose by Category</h6>
          <ul className="list-group list-group-light mb-4">
            <a  href="/craving?category=sev" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Sev</a>
            <a href="/craving?category=gathiya" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Gathiya</a>
            <a href="/craving?category=chips" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Chips</a>
            <a href="/craving?category=namkeen" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Namkeen</a>
            <a href="/craving?category=nuts" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Nuts</a>
          </ul>
          <h6 className="bg-body-tertiary p-2">Help and Settings</h6>
          <ul className="list-group list-group-light mb-4">
            <a href="/setting?on=account" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white" style={{ backgroundImage: 'linear-gradient(#1a2c35,#47555D)' }}>Your Account</a>
            <a href="/setting?on=wallet" type='button' className="list-group-item d-flex justify-content-between align-items-center border-0 text-white">Wallet<span className="badge badge-light rounded-pill text-dark">₹0</span></a>
            <a href="/setting?on=admin" type='button' className="list-group-item list-group-item-action px-3 border-0 text-white">Admin Service</a>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      {errMessage != null ? <ShowErrorCall message={errMessage} /> : null}
      {successMessage != null ? <ShowSuccessCall message={successMessage} /> : null}

    </div>
  );
}
export default Header;  