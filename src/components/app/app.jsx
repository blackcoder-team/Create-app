import Nav from "../navbar/nav";
import Hero from "../hero/hero";
import Info from "../info/info";
// import { Works } from "../works/works";
// import { Feature } from "../feature/feature";
// import { Testimonial } from "../testimonial/testimonial";
import Service from "../service/service";
import About from "../about/about";
import Team from "../team/team";
import Blog from "../blog/blog";
import Contact from "../contact/contact";
// import { Footer } from "../footer/footer";

import './app.css'

const App = () => {
    return (
        <>
            <Hero />
            <Info />
            <Service />
            <About />
            <Team />
            <Blog />
            <Contact />
        </>
    )
}

export default App