import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import { usePage } from "@inertiajs/react";
import cn from "classnames";

const TestimonialArea = ({  props, title, subTitle  }) => {
    // Get testimonials from the page props
    const { page } = usePage().props;
    const testimonials = page.testemonials || [];
    
    const slick_settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    // Don't render if there are no testimonials
    if (!testimonials.length) {
        return null;
    }

    return (
        <section className="testimonial-area pt-110 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center section-title mb-60">
                            <span className="sub-title">{subTitle}</span>
                            <h2 className="title">{title}</h2>
                        </div>
                    </div>
                </div>

                <div className="testimonial-item-wrap">
                    <div className="row testimonial-active">
                        <SlickSlider settings={slick_settings}>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id || index}
                                    className={cn(
                                        "col-lg-3",
                                        index % 2 === 0 &&
                                            "testimonial-item-wrap-item-even"
                                    )}
                                >
                                    <TestimonialAreaItem 
                                        item={{
                                            title: testimonial.title,
                                            desc: testimonial.description,
                                            src: testimonial.image_path
                                        }} 
                                    />
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialArea;