import './about.css'

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className='about_all'>
          <div>
            <div className='main_box'>
              <h1>About Us</h1>
              <p style={{lineHeight: '34px', fontSize: '21px', marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
            </div>
            <div className='about_mini_box'>
              <div>
                <i className="fa-solid fa-laptop-file fa-2x"></i>
                <h5>Web & Mobile Specialties</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                <p style={{ color: '#32dbc6' }}>learn more</p>
              </div>
              <div>
                <i className="fa-solid fa-puzzle-piece fa-2x"></i>
                <h5>Intuitive Thinker</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                <p style={{ color: '#32dbc6' }}>learn more</p>
              </div>
            </div>
          </div>
          <div>
            <img src={'https://preview.colorlib.com/theme/create/images/about_1.jpg.webp'} alt="about-img" style={{ height: '445px', width: '430px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About