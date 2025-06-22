import Nav from "../navbar/nav";
import Hero from "../hero/hero";
import Info from "../info/info";
import Works from "../works/works";
import Feature from "../feature/feature";
import Testimonial from "../testimonial/testimonial";
import Service from "../service/service";
import About from "../about/about";
import Team from "../team/team";
import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

import './app.css'

const App = () => {
    const worksData = [
        [
            { title: 'Bonzai', des: 'WEB APPLICATION', url: 'https://preview.colorlib.com/theme/create/images/img_1.jpg.webp' },
            { title: 'Simple Woman', des: 'BRANDING', url: 'https://preview.colorlib.com/theme/create/images/img_2.jpg.webp' },
            { title: 'Fruits', des: 'WEBSITE', url: 'https://preview.colorlib.com/theme/create/images/img_3.jpg.webp' },
        ],
        [
            { title: 'Design Material', des: 'WEB APPLICATION', url: 'https://preview.colorlib.com/theme/create/images/img_4.jpg.webp' },
            { title: 'Handy Food', des: 'BRANDING', url: 'https://preview.colorlib.com/theme/create/images/img_5.jpg.webp' },
            { title: 'Cat With Cup', des: 'WEBSITE', url: 'https://preview.colorlib.com/theme/create/images/img_6.jpg.webp' },
        ]
    ]

    const testData = [
        {
            quote:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
            name: "John Smith",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            quote:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nostrum, veritatis non architecto ab harum consectetur eius! Voluptatem odio incidunt esse aut reiciendis minima reprehenderit qui ipsum provident. Officia, tenetur.",
            name: "Anna Johnson",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            quote:
                "Reprehenderit fugit magnam veritatis, provident voluptatem obcaecati. Ipsam nulla accusamus cum.",
            name: "Michael Brown",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
        },
        {
            quote:
                "Reprehenderit fugit magnam veritatis, provident voluptatem obcaecati. Ipsam nulla accusamus cum.",
            name: "Bradly Owen",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
        },
    ];

    return (
        <>
            <Nav />
            <Hero />
            <Info />
            <Works works1={worksData[0]} works2={worksData[1]}  />
            <Feature/>
            <Testimonial testimonial={testData}/>        
            <Service />
            <About />
            <Team />
            <Blog />
            <Contact />
            <Footer/>
        </>
    )
}

export default App