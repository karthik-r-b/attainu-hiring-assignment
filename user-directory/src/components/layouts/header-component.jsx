import React from 'react';

const Header=()=>{
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand">User Directory</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <form className="d-flex ms-2">
                <input
                  className="form-control me-auto"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light ms-2" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );

}
export default Header;