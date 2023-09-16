import "./Details.css"

const Details = () => {
  return (
    // <div class="container">
    // <div class="row">
    //   <div class="col-lg-12">
    //     <div class="page-content">

          <div className="row">
            <div className="col-lg-12">
              <div className="feature-banner header-text">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/images/feature-left.jpg" alt="" style="border-radius: 23px;"/>
                  </div>
                  <div className="col-lg-8">
                    <div className="thumb">
                      <img src="assets/images/feature-right.jpg" alt="" style="border-radius: 23px;"/>
                      <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play"/></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Details
