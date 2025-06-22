import './service.css'

const Service = () => {
    return (
        <div id='service'>
            <div className='container'>
                <p className='service_title'>Our Services</p>
                <div className='service_big_box'>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-laptop fa-2x"></i>
                        </div>
                        <div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div>
                            <h2>eCommerce</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <div>
                            <h2>Web Applications</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className='service_big_box'>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-paint-roller"></i>
                        </div>
                        <div>
                            <h2>Branding</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-copy"></i>
                        </div>
                        <div>
                            <h2>Copy Writing</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem? Asperiores quasi explicabo mollitia id.</p>
                            <p className='service_learn_p'>Learn more</p>
                        </div>
                    </div>
                    <div className='service_box'>
                        <div>
                            <i class="fa-solid fa-mobile-screen"></i>
                        </div>
                        <div>
                            <h2>Mobile Applications</h2>
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