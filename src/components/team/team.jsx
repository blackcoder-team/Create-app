import './team.css'



const Team = () => {
  return (
    <div id='team'>
      <div className='container'>
        <p className='team_title'>Our team</p>
        <div className='all_person_box'>
          <div className='person_info_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/person_2.jpg.webp'} />
              <h3>John Rooster</h3>
              <p>Co-Founder, President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' className="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' className="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' className="fa-brands fa-invision"></i>
                <i id='all_person_box_i' className="fa-brands fa-instagram"></i>                
              </div>
            </div>
          </div>
          <div className='person_info_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/person_3.jpg.webp'} />
              <h3>Tom Sharp</h3>
              <p>Co-Founder, COO</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' className="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' className="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' className="fa-brands fa-invision"></i>
                <i id='all_person_box_i' className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className='person_info_box'>
            <div>
              <img src={'https://preview.colorlib.com/theme/create/images/person_4.jpg.webp'} />
              <h3>Winston Hodson</h3>
              <p>Marketing</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' className="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' className="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' className="fa-brands fa-invision"></i>
                <i id='all_person_box_i' className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Team