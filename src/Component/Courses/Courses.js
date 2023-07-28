import React from "react";

export default function Courses() {
  return (
    <>
      <section className="gray min-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="sec-heading center">
                <p>Hot &amp; Trending</p>
                <h2>
                  <span className="theme-cl">Recent</span> Courses by professional
                  Instructor
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-md-3">
              <div className="education_block_grid style_2">
                <div className="education_block_thumb n-shadow">
                  <a href="course-detail.html">
                    <img src="assets/img/co-1.jpg" className="img-fluid" alt="" />
                  </a>
                  <div className="cources_price theme-cl">INR- 599</div>
                </div>

                <div className="education_block_body">
                  <h4 className="bl-title">
                    <a href="course-detail.html">Python</a>
                  </h4>
                </div>

                <div className="cources_info_style3">
                  <ul>
                    <li>
                      <i className="ti-eye mr-1"></i>8682 Views
                    </li>
                    <li>
                      <i className="ti-time text-warning mr-3"></i>6 Month
                    </li>
                    <li>
                      <i className="ti-star text-warning mr-2"></i>4.7 Reviews
                    </li>
                  </ul>
                </div>

                <div className="education_block_footer">
                  <div className="education_block_author">
                    <div className="path-img">
                      <a href="instructor-detail.html">
                        <img
                          src="assets/img/user-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h5>
                      <a href="instructor-detail.html">Robert Wilson</a>
                    </h5>
                  </div>
                  <div className="foot_lecture">
                    <i className="ti-control-skip-forward mr-2"></i>54 lectures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
