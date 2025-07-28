import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';
import Isotope from 'isotope-layout';
import { getProdApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';
import { ShowErrorCall } from '../Service/Util';

const Craving = () => {
    const [errMessage, setErrorMessage] = React.useState(null)

    const isotope = React.useRef()

    const [filterKey, setFilterKey] = React.useState('*')

    const [prodList, setProdList] = React.useState([])

    React.useEffect(() => {
        if (prodList.length === 0) {
            let getUrl = getProdApiUrl
            getProdData(getUrl).then(obj => {
                if (obj.data) {
                    setProdList(obj.data)
                }
                else {
                    setErrorMessage('Server Error')
                }
            })
        }
    }, [prodList])

    React.useEffect(() => {
        if (prodList.length > 0) {
            isotope.current = new Isotope('.product-lists', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
                transitionDuration: '0.6s'

            })
            return () => isotope.current.destroy()
        }
    }, [prodList])

    React.useEffect(() => {
        if (prodList.length > 0) {
            filterKey === '*'
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
        
    }, [filterKey, prodList])

    const handleFilterKeyChange = key => () => setFilterKey(key)

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
                                <h1>Products</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-section">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-filters">
                                <ul>
                                    <li className="active boxed-btn" data-filter="*" onClick={handleFilterKeyChange('*')}>All</li>
                                    <li className="boxed-btn" data-filter=".sev" onClick={handleFilterKeyChange('sev')}>Sev</li>
                                    <li className="boxed-btn" data-filter=".chips" onClick={handleFilterKeyChange('chips')}>Chips</li>
                                    <li className="boxed-btn" data-filter=".nuts" onClick={handleFilterKeyChange('nuts')}>Nuts</li>
                                    <li className="boxed-btn" data-filter=".gathiya" onClick={handleFilterKeyChange('gathiya')}>Ghathiya</li>
                                    <li className="boxed-btn" data-filter=".namkeen" onClick={handleFilterKeyChange('namkeen')}>Namkeen</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row product-lists">
                        {prodList.length === 0 ? null : prodList.map((item, index) => (
                            <div className={`col-lg-2 col-md-6 text-center filter-item ${item.category}`} key={index}>
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <div id="product-badge">
                                            {item.off}% <br /><small>off</small>
                                        </div>
                                        <Link to="/subcraving"><img src={`/sevkin/assets/img/products/${item.image}`}
                                            alt={item.image} /></Link>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p className="product-price"><span>{item.size}</span> ₹{item.price}</p>
                                    <a href={`/cart?pcode=${encodeURIComponent(item.id)}&size=${encodeURIComponent(item.size)}&price=${encodeURIComponent(item.price)}`} className="cart-btn"><img className="icon-style"
                                        src="/sevkin/assets/img/icon/cart.png" alt="cart"></img> Add to Cart</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="#!">Prev</a></li>
                                    <li><a href="#!">1</a></li>
                                    <li><a className="active" href="#!">2</a></li>
                                    <li><a href="#!">3</a></li>
                                    <li><a href="#!">Next</a></li>
                                </ul>
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

export default Craving  
