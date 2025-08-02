import { useNavigate } from 'react-router-dom';

const Notfound = ({ notFoundCall }) => {
    const navigate = useNavigate();

    return (
        <div className="breadcrumb-section breadcrumb-bg text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                            <p>{notFoundCall.status}</p>
                            <h3>{notFoundCall.message}</h3>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <button className='boxed-btn' onClick={() => navigate('/craving')}>Go to Products</button>
            </div>
        </div>
    );
}

export default Notfound;  