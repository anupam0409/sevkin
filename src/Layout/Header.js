import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { getProdApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';

function Header() {
  const navigate = useNavigate();
  const [loginShow, setLoginShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
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

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              <div className="site-logo">
                <Link to="about">
                  <img src="../assets/img/logo.png" className="menu-logo" alt="sevkin" />
                </Link>
              </div>
              <nav className="main-menu">
                <ul>
                  <li className="current-list-item"><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="home">News</Link>
                    <ul className="sub-menu">
                      <li><Link to="home">News</Link></li>
                      <li><Link to="home">Single News</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link onClick={getProduct}>Craving</Link></li>
                  <li><Link to="/checkout">CheckOut</Link></li>
                  <li>
                    <div className="header-icons">
                      <Link to="/cart"><img className="icon-style"
                        src="../assets/img/icon/cart.png" alt='cart'></img></Link>
                      <Link onClick={handleSearchShow}><img className="icon-style"
                        src="../assets/img/icon/search.png" alt='search'></img></Link>
                      <Link to="whatsapp://send?text=Hello Sevkins, Please let me know your special snack and most ordered one!&phone=+918871406882">
                        <img
                          className="icon-style" src="../assets/img/icon/call.png" alt='call'></img></Link>
                      <Link onClick={handleLoginShow}><img className="icon-style"
                        src="../assets/img/icon/user.png" alt='user'></img></Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
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
                  src="../assets/img/icon/search.png" alt='search'></img></a>
              </div>
            </div>
          </Form.Group>
        </Form></Modal.Body>
      </Modal>
      <Modal show={loginShow} onHide={handleClose} style={{ borderColor: 'whitesmoke' }}>
        <Modal.Body className='search-modal' >
          <h3 className='orange-text'>LOGIN</h3>
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#051922' }}>
          <a href='#!' className="bordered-btn">Cancel</a>
          <a href='#!' className="boxed-btn" type='submit'>Login</a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Header;  