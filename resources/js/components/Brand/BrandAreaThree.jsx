import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";

const BrandAreaThree = ({ referentie_images = [], title, subTitle }) => {
    const slick_settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <section className="brand-area-two pt-110">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-80">
                            <span className="sub-title">{subTitle}</span>
                            <h2 className="title">{title}</h2>
                        </div>
                    </div>
                </div>

                <div className="row brand-active">
                    <SlickSlider settings={slick_settings}>
                        {referentie_images.map((image, index) => (
                            <div key={index} className="col-12">
                                <div className="brand-item-two">
                                    <img
                                        src={image}
                                        alt={`Referentie ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
            </div>
        </section>
    );
};

export default BrandAreaThree;
