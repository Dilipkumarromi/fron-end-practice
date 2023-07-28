import React from "react";

export default function Course_details() {
  return (
    <div>
      <div className="ed_detail_head">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5">
              <div className="property_video">
                <div className="thumb">
                  <img
                    className="pro_img img-fluid w100"
                    src="assets/img/course-1.jpg"
                    alt="7.jpg"
                  />
                  <div className="overlay_icon">
                    <div className="bb-video-box">
                      <div className="bb-video-box-inner">
                        <div className="bb-video-box-innerup">
                          <a
                            href="https://www.youtube.com/watch?v=A8EI6JaFbv4"
                            data-toggle="modal"
                            data-target="#popup-video"
                            className="theme-cl"
                          >
                            <i className="ti-control-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="ed_detail_wrap">
                <ul className="cources_facts_list">
                  <li className="facts-1">SEO</li>
                  <li className="facts-5">Design</li>
                </ul>
                <div className="ed_header_caption">
                  <h2 className="ed_title">Ruby on Rails Program</h2>
                  <ul>
                    <li>
                      <i className="ti-calendar"></i>10 - 20 weeks
                    </li>
                    <li>
                      <i className="ti-control-forward"></i>102 Lectures
                    </li>
                    <li>
                      <i className="ti-user"></i>502 Student Enrolled
                    </li>
                  </ul>
                </div>
                <div className="ed_header_short">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore. veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>

                <div className="ed_rate_info">
                  <div className="star_info">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="review_counter">
                    <strong className="high">4.7</strong> 3572 Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="edu_wraper">
                <h4 className="edu_title">Course Overview</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <h6>Requirements</h6>
                <ul className="lists-3">
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                </ul>
              </div>

              <div className="edu_wraper">
                <h4 className="edu_title">Course Circullum</h4>
                <div id="accordionExample" className="accordion shadow circullum">
                  <div className="card">
                    <div
                      id="headingOne"
                      className="card-header bg-white shadow-sm border-0"
                    >
                      <h6 className="mb-0 accordion_title">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Part 01: How To Learn Web Designing Step by Step
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                      className="collapse show"
                    >
                      <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 01
                            </div>
                            Web Designing Beginner
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 02
                            </div>
                            Startup Designing with HTML5 & CSS3
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 03
                            </div>
                            How To Call Google Map iFrame
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 04
                            </div>
                            Create Drop Down Navigation Using CSS3
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 05
                            </div>
                            How to Create Sticky Navigation Using JS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      id="headingTwo"
                      className="card-header bg-white shadow-sm border-0"
                    >
                      <h6 className="mb-0 accordion_title">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          Part 02: Learn Web Designing in Basic Level
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 01
                            </div>
                            Web Designing Beginner
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 02
                            </div>
                            Startup Designing with HTML5 & CSS3
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 03
                            </div>
                            How To Call Google Map iFrame
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 04
                            </div>
                            Create Drop Down Navigation Using CSS3
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 05
                            </div>
                            How to Create Sticky Navigation Using JS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      id="headingThree"
                      className="card-header bg-white shadow-sm border-0"
                    >
                      <h6 className="mb-0 accordion_title">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          Part 03: Learn Web Designing in Advance Level
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 01
                            </div>
                            Web Designing Beginner
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 02
                            </div>
                            Startup Designing with HTML5 & CSS3
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 03
                            </div>
                            How To Call Google Map iFrame
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 04
                            </div>
                            Create Drop Down Navigation Using CSS3
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 05
                            </div>
                            How to Create Sticky Navigation Using JS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      id="headingThree"
                      className="card-header bg-white shadow-sm border-0"
                    >
                      <h6 className="mb-0 accordion_title">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          Part 04: How To Become Succes in Designing &
                          Development?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 01
                            </div>
                            Web Designing Beginner
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 02
                            </div>
                            Startup Designing with HTML5 & CSS3
                          </li>
                          <li>
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 03
                            </div>
                            How To Call Google Map iFrame
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 04
                            </div>
                            Create Drop Down Navigation Using CSS3
                          </li>
                          <li className="unview">
                            <div className="lectures_lists_title">
                              <i className="ti-control-play"></i>Lecture: 05
                            </div>
                            How to Create Sticky Navigation Using JS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rating-overview">
                <div className="rating-overview-box">
                  <span className="rating-overview-box-total">4.2</span>
                  <span className="rating-overview-box-percent">out of 5.0</span>
                  <div className="star-rating" data-rating="5">
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                  </div>
                </div>

                <div className="rating-bars">
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">5 Star</span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating high" data-rating="4.7">
                        <span
                          className="rating-bars-rating-inner"
                          style={{width:'85%'}}
                        ></span>
                      </span>
                      <strong>85%</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">4 Star</span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating good" data-rating="3.9">
                        <span
                          className="rating-bars-rating-inner"
                          style={{width:'75%'}}
                        ></span>
                      </span>
                      <strong>75%</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">3 Star</span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating mid" data-rating="3.2">
                        <span
                          className="rating-bars-rating-inner"
                          style={{width:'52.2%'}}
                        ></span>
                      </span>
                      <strong>53%</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">1 Star</span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating poor" data-rating="2.0">
                        <span
                          className="rating-bars-rating-inner"
                          style={{width:'20%'}}
                        ></span>
                      </span>
                      <strong>20%</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="single_instructor">
                <div className="single_instructor_thumb">
                  <a href="#">
                    <img src="assets/img/user-3.jpg" className="img-fluid" alt="" />
                  </a>
                </div>
                <div className="single_instructor_caption">
                  <h4>
                    <a href="#">Jonathan Campbell</a>
                  </h4>
                  <ul className="instructor_info">
                    <li>
                      <i className="ti-video-camera"></i>72 Videos
                    </li>
                    <li>
                      <i className="ti-control-forward"></i>102 Lectures
                    </li>
                    <li>
                      <i className="ti-user"></i>Exp. 4 Year
                    </li>
                  </ul>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi.
                  </p>
                  <ul className="social_info">
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="list-single-main-item fl-wrap">
                <div className="list-single-main-item-title fl-wrap">
                  <h3>
                    Item Reviews - <span> 3 </span>
                  </h3>
                </div>
                <div className="reviews-comments-wrap">
                  <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                      <img
                        src="assets/img/user-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="reviews-comments-item-text">
                      <h4>
                        <a href="#">Josaph Manrty</a>
                        <span className="reviews-comments-item-date">
                          <i className="ti-calendar theme-cl"></i>27 Oct 2019
                        </span>
                      </h4>

                      <div className="listing-rating high" data-starrating2="5">
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <span className="review-count">4.9</span>{" "}
                      </div>
                      <div className="clearfix"></div>
                      <p>
                        " Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris. "
                      </p>
                      <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active">
                          <i className="ti-thumb-up"></i> 12
                        </a>
                        <a href="#" className="comment-dislike active">
                          <i className="ti-thumb-down"></i> 1
                        </a>
                        <a href="#" className="comment-love active">
                          <i className="ti-heart"></i> 07
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                      <img
                        src="assets/img/user-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="reviews-comments-item-text">
                      <h4>
                        <a href="#">Rita Chawla</a>
                        <span className="reviews-comments-item-date">
                          <i className="ti-calendar theme-cl"></i>2 Nov May 2019
                        </span>
                      </h4>

                      <div className="listing-rating mid" data-starrating2="5">
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star"></i>
                        <span className="review-count">3.7</span>{" "}
                      </div>
                      <div className="clearfix"></div>
                      <p>
                        " Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris. "
                      </p>
                      <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active">
                          <i className="ti-thumb-up"></i> 12
                        </a>
                        <a href="#" className="comment-dislike active">
                          <i className="ti-thumb-down"></i> 1
                        </a>
                        <a href="#" className="comment-love active">
                          <i className="ti-heart"></i> 07
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                      <img
                        src="assets/img/user-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="reviews-comments-item-text">
                      <h4>
                        <a href="#">Adam Wilsom</a>
                        <span className="reviews-comments-item-date">
                          <i className="ti-calendar theme-cl"></i>10 Nov 2019
                        </span>
                      </h4>

                      <div className="listing-rating good" data-starrating2="5">
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star active"></i>
                        <i className="ti-star"></i>{" "}
                        <span className="review-count">4.2</span>{" "}
                      </div>
                      <div className="clearfix"></div>
                      <p>
                        " Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris. "
                      </p>
                      <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active">
                          <i className="ti-thumb-up"></i> 12
                        </a>
                        <a href="#" className="comment-dislike active">
                          <i className="ti-thumb-down"></i> 1
                        </a>
                        <a href="#" className="comment-love active">
                          <i className="ti-heart"></i> 07
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="edu_wraper">
                <h4 className="edu_title">Submit Reviews</h4>
                <div className="review-form-box form-submit">
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Review</label>
                          <textarea
                            className="form-control ht-140"
                            placeholder="Review"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <button type="submit" className="btn btn-theme">
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="ed_view_box style_2">
                <div className="ed_author">
                  <div className="ed_author_thumb">
                    <img
                      className="img-fluid"
                      src="assets/img/user-5.jpg"
                      alt="7.jpg"
                    />
                  </div>
                  <div className="ed_author_box">
                    <h4>Michael Russell</h4>
                    <span>Web Designer in Canada</span>
                  </div>
                </div>

                <div className="ed_view_price pl-4">
                  <span>Acctual Price</span>
                  <h2 className="theme-cl">$ 149.00</h2>
                </div>
                <div className="ed_view_features pl-4">
                  <span>Course Features</span>
                  <ul>
                    <li>
                      <i className="ti-angle-right"></i>Fully Programming
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>Help Code to Code
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>Free Trial 7 Days
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>Unlimited Videos
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>24x7 Support
                    </li>
                  </ul>
                </div>
                <div className="ed_view_link">
                  <a href="#" className="btn btn-theme enroll-btn">
                    Enroll Now<i className="ti-angle-right"></i>
                  </a>
                </div>
              </div>

              <div className="edu_wraper">
                <h4 className="edu_title">Course Features</h4>
                <ul className="edu_list right">
                  <li>
                    <i className="ti-user"></i>Student Enrolled:
                    <strong>1740</strong>
                  </li>
                  <li>
                    <i className="ti-files"></i>lectures:<strong>10</strong>
                  </li>
                  <li>
                    <i className="ti-game"></i>Quizzes:<strong>4</strong>
                  </li>
                  <li>
                    <i className="ti-time"></i>Duration:<strong>60 hours</strong>
                  </li>
                  <li>
                    <i className="ti-tag"></i>Skill Level:<strong>Beginner</strong>
                  </li>
                  <li>
                    <i className="ti-flag-alt"></i>Language:<strong>English</strong>
                  </li>
                  <li>
                    <i className="ti-shine"></i>Assessment:<strong>Yes</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
