import './testimonial.css'
import TestimonialCarousel from "./testimonial-carousel/testimonial-carousel";

const Testimonial = ({ testimonial }) => {

  return (
    <div id='testimonials'>
      <div className="container">
        <TestimonialCarousel testimonials={testimonial} />
      </div>
    </div>
  )
}

export default Testimonial