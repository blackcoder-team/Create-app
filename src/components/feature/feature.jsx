import './feature.css'

const Feature = () => {
  return (
    <div id='feature' className='p-5 m-5'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3 img">
            <img src="https://preview.colorlib.com/theme/create/images/about_1.jpg" alt="" />
          </div>
          <div className="col-3 ms">
            <div className='mb-5'>
              <h1><i className="fa-solid fa-umbrella"></i><span>Startegy</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <p><a href="">Read More</a></p>
            </div>
            <div>
              <h1><i className="fa-solid fa-wrench"></i><span>Web Development</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <p><a href="">Read More</a></p>
            </div>
          </div>
          <div className="col-3">
            <div className='mb-5'>
              <h1><i className="fa-solid fa-paint-roller"></i><span>Art Direction</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <p><a href="">Read More</a></p>
            </div>
            <div>
              <h1><i className="fa-solid fa-copy"></i><span>Copywriting</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <p><a href="">Read More</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature