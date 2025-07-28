import { Component } from 'react';
import Header from '../Layout/Header'
import Copyright from '../Layout/Copyright'
import Footer from '../Layout/Footer'
import Clientlogo from '../Layout/Clientlogo';

export class Career extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Boost your Career</p>
                                    <h1>Hiring is on!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="career-form">
                    <form action="index.html">
                        <div className="section-title text-center">
                            <h3>Jobs for <span className="orange-text text-center">Interns, Professionals and Experts</span></h3><br />
                            <p><b style={{ color: '#e0aa3e' }}>Search by tags:</b> Technology, Business, Consulting, Sales, Marketing, Development</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 p-1"><p><input type="text" placeholder="What are you looking for?" /></p></div>
                            <div className="col-lg-3 p-1"><p><select placeholder='Select Area'><option>Mumbai</option><option>Ratlam</option></select></p></div>
                            <div className="col-lg-3 p-1"><p><select placeholder='Select Role'><option>Intern</option><option>Professional</option><option>Managerial</option></select></p></div>
                            <div className="col-lg-2 p-1"><p><a href="#!" className="boxed-btn" style={{ padding: '8px', marginTop: '5px', width: '100%', textAlign: 'center' }}>Search</a></p></div>
                        </div>
                        <br /><br />
                        <div className="row job-process">
                            <div className="col-lg-3 col-md-12 p-1">
                                <div className="card text-white text-center" style={{ backgroundImage: 'linear-gradient(#47555D,#687d88)'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Searching</h5>
                                        <h6 className="card-subtitle mb-2 text-white-50">Hunt on Vacancies</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 p-1">
                                <div className="card text-white text-center" style={{ backgroundImage: 'linear-gradient(#47555D,#687d88)' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Applying</h5>
                                        <h6 className="card-subtitle mb-2 text-white-50">Easy steps on Job Applications</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 p-1">
                                <div className="card text-white text-center" style={{ backgroundImage: 'linear-gradient(#47555D,#687d88)' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Notifications</h5>
                                        <h6 className="card-subtitle mb-2 text-white-50">Get Notified when matched</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 p-1">
                                <div className="card text-white text-center" style={{ backgroundImage: 'linear-gradient(#47555D,#687d88)' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Offer</h5>
                                        <h6 className="card-subtitle mb-2 text-white-50">Welcome to our Family</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="pb-3 text-center">Recent <span className="orange-text">Jobs</span></h2>
                        <div className="row recent-jobs">
                            <div className="col-lg-2 col-md-12">
                                <img className="cart-product-image"
                                    src='/sevkin/assets/img/company-logos/jobpost.png'
                                    alt="img" /></div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card-body">
                                    <h6 className="card-text">Type: Intern</h6>
                                    <h6>Role: Software Trainee</h6>
                                    <h6 className="card-text">Salary: Industry Based</h6>
                                    <h6>Location: Mumbai, Ratlam</h6><br />
                                    <h4 className='font-weight-bold'>Position: 5</h4><br />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <img className="icon-style"
                                    src='/sevkin/assets/img/icon/likejob.png'
                                    alt="joblike" />
                                &nbsp;<a href="#!" className="boxed-btn">Apply</a>
                            </div>
                            <div className="col-lg-2 col-md-12">

                            </div>
                        </div>
                        <div className="row recent-jobs">
                            <div className="col-lg-2 col-md-12">
                                <img className="cart-product-image"
                                    src='/sevkin/assets/img/company-logos/jobpost.png'
                                    alt="img" /></div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card-body">
                                    <h6 className="card-text">Type: Professional</h6>
                                    <h6>Role: Product Manager</h6>
                                    <h6 className="card-text">Salary: Industry Based</h6>
                                    <h6>Location: Mumbai</h6><br />
                                    <h4 className='font-weight-bold'>Position: 1</h4><br />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <img className="icon-style"
                                    src='/sevkin/assets/img/icon/likejob.png'
                                    alt="joblike" />
                                &nbsp;<a href="#!" className="boxed-btn">Apply</a>
                            </div>
                            <div className="col-lg-3 col-md-12">
                            </div>
                        </div>
                        <a href='#!' className="boxed-btn">Load more Job Post...</a>
                    </form>
                    <br />
                </div>
                <Clientlogo />
                <Footer />
                <Copyright />
            </div >
        )
    }
}
export default Career  
