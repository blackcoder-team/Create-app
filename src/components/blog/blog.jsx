import './blog.css'

const Blog = () => {
  return (
    <div id="blog">
      <div className='container'>
        <p className='blog_title'>Blog</p>
        <div className='all_box_blog'>
          <div className='blog_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/img_1.jpg.webp'} alt="" style={{ height: '350px' }} />
            </div>
            <div>
              <h3 style={{ color: '#32dbc6', fontSize: '20px' }}>Create Beautiful Website In Less Than An Hour</h3>
              <p>James Phelps • Jan 18, 2019• <span style={{ color: '#32dbc6' }}>News</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
              </p>
              <p style={{ color: '#32dbc6' }}>Continue Reading...</p>
            </div>
          </div>
          <div className='blog_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/img_2.jpg.webp'} alt="" style={{ height: '350px' }} />
            </div>
            <div>
              <h3 style={{ color: '#32dbc6', fontSize: '20px' }}>Create Beautiful Website In Less Than An Hour</h3>
              <p>James Phelps • Jan 18, 2019• <span style={{ color: '#32dbc6' }}>News</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
              </p>
              <p style={{ color: '#32dbc6' }}>Continue Reading...</p>
            </div>
          </div>
          <div className='blog_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/img_1.jpg.webp'} alt="" style={{ height: '350px' }} />
            </div>
            <div>
              <h3 style={{ color: '#32dbc6', fontSize: '20px' }}>Create Beautiful Website In Less Than An Hour</h3>
              <p>James Phelps • Jan 18, 2019• <span style={{ color: '#32dbc6' }}>News</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
              </p>
              <p style={{ color: '#32dbc6' }}>Continue Reading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog