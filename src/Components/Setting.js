import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Account from '../Layout/Account';


const Setting = () => {
    const [searchParams] = useSearchParams();

    return (
        <div>
            <Header />
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Help and Setting</p>
                                <h1>{searchParams.get('on') === 'account' ? 'Your Account'
                                    : searchParams.get('on') === 'wallet' ? 'Wallet'
                                        : searchParams.get('on') === 'admin' ? 'Admin Service'
                                            : null}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {searchParams.get('on') === 'account' ? <Account/>
                : searchParams.get('on') === 'wallet' ? 'Wallet'
                    : searchParams.get('on') === 'admin' ? 'Admin Service'
                        : null}
            <Footer />
            <Copyright />
        </div>
    )
}

export default Setting  
