import './team.css'
import Rooster from './roostertom.webp';


const Team = () => {
  return (
    <div id='team'>
      <div className='container'>
        <p className='team_title'>Our team</p>
        <div className='all_person_box'>
          <div className='person_info_box'>
            <div>
              <img src={Rooster} alt="" style={{ height: '180px', width: '180px', borderRadius: '50%' }} />
              <h3>John Rooster</h3>
              <p>Co-Founder, President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' class="fa-brands fa-instagram"></i>
                <i id='all_person_box_i' class="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' class="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' class="fa-brands fa-invision"></i>
              </div>
            </div>
          </div>
          <div className='person_info_box'>
            <div>
              <img src={Rooster} alt="" style={{ height: '180px', width: '180px', borderRadius: '50%' }} />
              <h3>John Rooster</h3>
              <p>Co-Founder, President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' class="fa-brands fa-instagram"></i>
                <i id='all_person_box_i' class="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' class="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' class="fa-brands fa-invision"></i>
              </div>
            </div>
          </div>
          <div className='person_info_box'>
            <div>
              <img src={Rooster} alt="" style={{ height: '180px', width: '180px', borderRadius: '50%' }} />
              <h3>John Rooster</h3>
              <p>Co-Founder, President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio cupiditate
                tempore suscipit inventore deserunt tenetur.
              </p>
              <div>
                <i id='all_person_box_i' class="fa-brands fa-instagram"></i>
                <i id='all_person_box_i' class="fa-brands fa-facebook"></i>
                <i id='all_person_box_i' class="fa-brands fa-twitter"></i>
                <i id='all_person_box_i' class="fa-brands fa-invision"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Team