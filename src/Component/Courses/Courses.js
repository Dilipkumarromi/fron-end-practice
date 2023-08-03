import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Util/ApiServices";
import Encriptions from "../../Util/Encription";

export default  function Courses() {
  const [course,setCourse]=useState([])
  const IMG_UR=process.env.REACT_APP_BASE_IMG_URL

  const getCourse=async()=>{
    const courseNameList= await Api.getCourseCard()
    console.log('courseNameList',courseNameList)
    setCourse(courseNameList)
    return courseNameList
  }

  useEffect(()=>{
    getCourse()
  },[])
  return (
    <>
      <section className="gray min-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-sm-6">
              <div className="sec-heading center">
                 
                <p>Hot &amp; Trending</p>
                <h2>
                  <span className="theme-cl">Recent</span> Courses by professional
                  Instructor
                </h2>
              </div>
            </div>
          </div>

          <div className="row gy-3">
            {
              course?.data?.map((courseList)=>(
                 
                <div className="col-md-3 col-sm-3 col-xs-3" key={courseList.id}>
                <div className="education_block_grid style_2">
                  <div className="education_block_thumb n-shadow">
                 
                    <Link to={"/course-details/"+Encriptions.encrypt(courseList.id) }>
                      <img src={IMG_UR+courseList?.images
?.images_url} className="img-fluid" alt="" crossOrigin="anonymous" style={{width:'100%',height:'70%'}}/>
                    </Link>
                    <div className="cources_price theme-cl" style={{backgroundColor:"yellowgreen"}}><span style={{color:'white'}}>INR- {courseList.fee}</span></div>
                  </div>
  
                  <div className="education_block_body">
                    <h4 className="bl-title">
                      <Link to={"/course-details/"+courseList.id}>{courseList.title}</Link>                    
                    </h4>
                    <h6 className="bl-title">
                      {courseList.sub_title}
                    </h6>
                  </div>
  
                  <div className="cources_info_style3">
                    <ul>
                      <li>
                        <i className="ti-eye mr-1"></i>8682 Views
                      </li>
                      <li>
                        <i className="ti-time text-warning mr-3"></i>{courseList.duration}
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
           
              ))
            }
          
          </div>
        </div>
      </section>
    </>
  );
}
