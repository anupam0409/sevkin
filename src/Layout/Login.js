import React from 'react';


function Login() {
    return (
        <div className="login-area">
            <span className="close-login-btn"><img className="icon-style" src="/sevkin/assets/img/icon/close.png" alt='close'></img></span>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="tab-content">
                        <div className="tab-pane fade show active text-white" id="pills-login" role="tabpanel"
                            aria-labelledby="tab-login">
                            <form>
                                <div className="text-center mb-3 text-light">
                                    <h5 className="text-light">Sign in with:</h5>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1">
                                        <img className="icon-style" src="/sevkin/assets/img/icon/facebook.png" alt='facebook'></img>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1">
                                        <img className="icon-style" src="/sevkin/assets/img/icon/google.png" alt='google'></img>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1">
                                        <img className="icon-style" src="/sevkin/assets/img/icon/twitter.png" alt='twitter'></img>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1">
                                        <img className="icon-style" src="/sevkin/assets/img/icon/github.png" alt='github'></img>
                                    </button>
                                </div>

                                <p className="text-light text-center">or</p>
                                <h5 className="text-light">LOGIN:</h5>
                                <div className="form-outline mb-4">
                                    <input type="email" id="loginName" className="form-control" />
                                    <label className="form-label" htmlFor="loginName">Email or username</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" id="loginPassword" className="form-control" />
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>
                                <button type="submit" style={{ backgroundColor: '#F28123' }} data-mdb-button-init
                                    data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Login;  