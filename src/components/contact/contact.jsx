import './contact.css'

const Contact = () => {
  return (
    <div style={{ padding: '20px 0px', backgroundColor: 'rgb(245, 248, 249)' }}>
      <div className='container_contact'>
        <p className='contact_title'>Contact Us</p>
        <div className='contact_info'>
          <div className='get_info'>
            <p className='form_title'>Contact Form</p>
            <div className='name_inputs'>
              <div>
                <p>First Name</p>
                <input type="text" className='input' />
              </div>
              <div>
                <p>Last Name</p>
                <input type="text" className='input' />
              </div>
            </div>

            <div className='other_inputs'>
              <div>
                <p>Email</p>
                <input type="text" className='input' />
              </div><br />
              <div>
                <p>Subject</p>
                <input type="text" className='input' />
              </div><br />
              <div>
                <p>Message</p>
                <textarea className='input text_area' name="message" placeholder="Write your message here..."></textarea>
              </div>
            </div>
            <button className='contact_btn'>Send Message</button>
          </div>

          <div className='email_contact'>
            <h6>Address</h6>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

            <h6>Phone</h6>
            <p className='special_text'>+1 232 3235 324</p>

            <h6>Email Address</h6>
            <p className='special_text'>youremail@domain.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact