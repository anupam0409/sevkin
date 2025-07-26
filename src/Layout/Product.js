import React from 'react';
import { Link } from 'react-router-dom';
import { getProdApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';



const Product = () => {
    const [prodList, setProdList] = React.useState([])
    React.useEffect(() => {
        if (prodList.length === 0) {
            let getUrl = getProdApiUrl
            getProdData(getUrl).then(obj => {
                if (obj.data) {
                    setProdList(obj.data)
                }
            })
        }
    }, [prodList])
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
                                    <a href={`/cart?pcode=${item.id}&size=${item.size}&price=${item.price}`} className="cart-btn"><img className="icon-style"
                                        src="/sevkin/assets/img/icon/cart.png" alt="cart"></img> Add to Cart</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;  