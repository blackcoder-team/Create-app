import './service.css'

const Service = () => {
    return (
        <div id='service'>
            <div className='container'>
                <p className='service_title'>Our Services</p>
                <div className='service_big_box'>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-laptop fa-2x"></i>
                        </div>
                        <div>
                            <h5>Web Design</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div>
                            <h5>eCommerce</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <div>
                            <h5>Web Applications</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className='service_big_box'>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-paint-roller"></i>
                        </div>
                        <div>
                            <h5>Branding</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-copy"></i>
                        </div>
                        <div>
                            <h5>Copy Writing</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i className="fa-solid fa-mobile-screen"></i>
                        </div>
                        <div>
                            <h5>Mobile Applications</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service