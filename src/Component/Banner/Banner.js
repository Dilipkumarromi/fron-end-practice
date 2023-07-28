import React from 'react'

export default function Banner() {
    const BANNER_URL="background:#0b2248 url(../../assets/img/banner-1.jpg) no-repeat;"
  return (
    <>
   
<div class="image-cover half_banner">
    <div class="container">
   
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="banner-search-2">
                    <h1 class="cl_2 mb-0">Learn on your<br/>schedule</h1>
                    <p>Study any topic, anytime. Choose from thousands of expert-led courses now.</p>
                    <div class="input-group mt-3">
                        <input type="text" class="form-control" placeholder="What do you want to learn?"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button"><img src="assets/img/color-search.svg" class="search-icon" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
    <div class="trips_wrap full">
        <div class="container">
            <div class="row m-0">
            
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="trips">
                        <div class="trips_icons">
                            <i class="ti-video-camera"></i>
                        </div>
                        <div class="trips_detail">
                            <h4>100,000 online courses</h4>
                            <p>Nor again is there anyone who loves or pursues or desires</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="trips">
                        <div class="trips_icons">
                            <i class="ti-medall"></i>
                        </div>
                        <div class="trips_detail">
                            <h4>Expert instruction</h4>
                            <p>Nam libero tempore, cum soluta and nobis est eligendi optio</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="trips none">
                        <div class="trips_icons">
                            <i class="ti-infinite"></i>
                        </div>
                        <div class="trips_detail">
                            <h4>Lifetime access</h4>
                            <p>These cases are perfectly simple and easy to distinguish</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
    </>
  )
}
