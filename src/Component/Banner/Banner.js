import React from "react";

export default function Banner() {
  const BANNER_URL =
    "background:#0b2248 url(../../assets/img/banner-1.jpg) no-repeat;";
  return (
    <>
      <div className="image-cover half_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner-search-2">
                <h1 className="cl_2 mb-0">
                  Learn on your
                  <br />
                  schedule
                </h1>
                <p>
                  Study any topic, anytime. Choose from thousands of expert-led
                  courses now.
                </p>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What do you want to learn?"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <img
                        src="assets/img/color-search.svg"
                        className="search-icon"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trips_wrap full">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="trips">
                <div className="trips_icons">
                  <i className="ti-video-camera"></i>
                </div>
                <div className="trips_detail">
                  <h4>100,000 online courses</h4>
                  <p>
                    Nor again is there anyone who loves or pursues or desires
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="trips">
                <div className="trips_icons">
                  <i className="ti-medall"></i>
                </div>
                <div className="trips_detail">
                  <h4>Expert instruction</h4>
                  <p>
                    Nam libero tempore, cum soluta and nobis est eligendi optio
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="trips none">
                <div className="trips_icons">
                  <i className="ti-infinite"></i>
                </div>
                <div className="trips_detail">
                  <h4>Lifetime access</h4>
                  <p>
                    These cases are perfectly simple and easy to distinguish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
