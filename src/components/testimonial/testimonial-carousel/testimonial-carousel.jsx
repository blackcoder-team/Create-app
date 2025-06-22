import React, { useState } from "react";
import "./testimonial-carousel.css";

const TestimonialCarousel = ({ testimonials = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!Array.isArray(testimonials) || testimonials.length === 0) {
        return <p style={{ textAlign: "center" }}>No testimonials found.</p>;
    }

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="testimonial-slider">
            <h2 className="testimonial-title">Testimonials</h2>

            <div className="testimonial-slider-container">
                <div
                    className="testimonial-slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((item, index) => (
                        <div className="testimonial-slide" key={index}>
                            <p className="testimonial-quote">“{item.quote}”</p>
                            <div className="user d-flex">
                                <img className="testimonial-img" src={item.image} alt={item.name} />
                                <p className="testimonial-name p-2 ps-4">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
