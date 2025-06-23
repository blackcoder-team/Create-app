import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="container d-flex edge pb-5">
          <div className="row d-flex">
            <div className="col-5">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>
            <div className="col-3">
              <h1>Features</h1>
              <ul className='p-0'>
                <li><a href="">About Us</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-3">
              <h1>Follow Us</h1>
              <div className='d-flex justify-content-between icons'>
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h1>Subscribe Newsletter</h1>
            <form>
              <input type="text" placeholder='Enter Email' />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <p className='text-center p-5 m-0'>Copyright ©2025 All rights reserved | This template is made by Colorlib</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer