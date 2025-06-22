import './nav.css'

const Nav = () => {

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav');
    if (navbar) {
      if (window.scrollY > 150) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  });

  return (
    <div id='nav'>
      <div className="container">
        <div className="row pt-4 pb-4 d-flex justify-content-between">
          <div className="logo d-inline-block w-auto">
            <h1>Create<span>.</span></h1>
          </div>
          <ul className='d-inline-block w-auto d-flex m-0'>
            <li><a href="">Home</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav