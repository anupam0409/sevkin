import React from 'react';


function Search() {
    return (
        <div className="search-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="close-btn"><img className="icon-style" src="../assets/img/icon/close.png" alt='close'></img></span>
                        <div className="search-bar">
                            <div className="search-bar-tablecell">
                                <h3>Search For:</h3>
                                <input type="text" placeholder="Keywords" />
                                <button type="submit" style={{ color: 'white' }}>Search <img className="icon-style"
                                    src="../assets/img/icon/search.png" alt='search'></img></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Search;  