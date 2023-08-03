import React from "react";

export default function Top_institution_list() {
  return (
    <>
   
            <section className="pt-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="sec-heading center">
                      <p>Meet Instructors</p>
                      <h2>
                        <span className="theme-cl">Top & Famous</span>{" "}
                        Institution in Your City
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="four_slide-dots articles arrow_middle">
                      <div className="singles_items ">
                        <div className="instructor_wrap mid ">
                          <div className="instructor_thumb">
                            <a href="instructor-detail.html">
                              <img
                                src="assets/img/user-1.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="instructor_caption">
                            <h4>
                              <a href="instructor-detail.html">
                                Daniel Diwansker
                              </a>
                            </h4>
                            <span className="skills-min">Web Designer</span>
                            <ul className="colored">
                              <li>
                                <a href="#" className="cl-fb">
                                  <i className="ti-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cl-google">
                                  <i className="ti-google"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cl-twitter">
                                  <i className="ti-twitter"></i>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="cources_info_style3">
                            <ul>
                              <li>
                                <i className="ti-user mr-2"></i>32k Students
                              </li>
                              <li>
                                <i className="ti-book mr-2"></i>3 Courses
                              </li>
                            </ul>
                          </div>
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
