import React from 'react';
import { Link } from 'react-router-dom';
import { getProdApiUrl } from '../Properties/AppConfig';
import { getProdData } from '../Service/ProdService';
import Cartbanner from './Cartbanner';

const Product = () => {
    const [prodList, setProdList] = React.useState([])

    React.useEffect(() => {
        if (prodList.length === 0) {
            let getUrl = getProdApiUrl
            getProdData(getUrl).then(obj => {
                if (obj.data) {
                    setProdList(obj.data.slice(0, 6))
                }
            })
        }
    }, [prodList])

    const [timeLeft, setTimeLeft] = React.useState({});

    React.useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();

            const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999);

            const difference = endOfMonth.getTime() - now.getTime();

            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div><div className="ProductSection">
            <div className="product-section mt-150 mb-150">
                <div className="container text-center">
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
                    <a href="/craving" className="cart-btn mt-3">Load more...</a>
                </div>
            </div>
        </div>
            <Cartbanner timeLeft={timeLeft} />
        </div>
    );
}

export default Product;  