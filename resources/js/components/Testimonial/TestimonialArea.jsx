import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
    const slick_settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: function (currentSlide, nextSlide) {
            var $animatingElements = $(
                '.single-slider[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
        },
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

    const slider_items = [
        {
            title: "Philips",
            desc: `Drukwerk voor evenementen, en dan ook nog eens met innovatie als hoofdthema. Het complete drukwerkpakket voor dit jaarlijkse evenement komt uit onze drukkerij in Rotterdam.`,
            src: "/img/icon/philips-logo.png",
        },
        {
            title: "Porsche",
            desc: `Binnenkort ook helemaal elektrisch. Daar zijn we als groene drukkerij blij mee! Natuurlijk ook met het feit dat Printvisie het drukwerk voor dit mooie merk mag verzorgen. `,
            src: "/img/icon/porsche-logo.png",
        },
        {
            title: "Dudok",
            desc: `Een appeltaartje van Dudok, wie kent het niet. Maar ook voor een lunch of diner kan je bij Dudok terecht. Voor alle vestigingen drukt Printvisie de menukaarten. `,
            src: "/img/icon/dudok-logo.jpg",
        },
        {
            title: "Ahoy Rotterdam",
            desc: `Rotterdams mooiste bedrijf drukt natuurlijk bij de Rotterdamse drukker. Of het nu om spoed drukwerk gaat of om brochures voor Ahoy’s eigen producties. `,
            src: "/img/icon/ahoy-rotterdam-logo.jpg",
        },
        {
            title: "Prinses Beatrix Spierfonds",
            desc: `Ieder jaar komt de collectant langs voor uw bijdrage. Drukwerk in full colour, PMS kleuren, offset- en digitaal druk, maar vooral de logistiek. Printvisie is la jaren de vaste partner.`,
            src: "/img/icon/prinses-beatrix-spierfonds-logo.jpg",
        },
        {
            title: "RVKO",
            desc: `De grootste scholengemeenschap in het primaire onderwijs van Nederland met 2200 medewerkers en en 21.000 leerlingen. Daar kan natuurlijk alleen maar duurzaam voor gedrukt worden.`,
            src: "/img/icon/rvko-logo.jpg",
        },
        {
            title: "Numatic",
            desc: `Een van de oudste duurzame klanten van Printvisie. Drukt vanaf het eerste uur op Printvisie Greenlabel papier. Misschien zegt de naam Numatic je niet veel, maar hun stofzuigers Henry en Hetty zijn zeker wel bekend.`,
            src: "/img/icon/numatic-logo.jpg",
        },
        {
            title: "Hilton",
            desc: `Met meerdere vestigingen in Nederland leveren kwaliteitsdrukwerk voor deze luxe hotelketen.`,
            src: "/img/icon/hilton-logo.jpg",
        },
        {
            title: "Dyade",
            desc: `Alle leraren en schooldirecteuren uit het primair onderwijs hebben ooit te maken met Dyade. Bij de Dyade Academy kan deze groep worden bijgeschoold.`,
            src: "/img/icon/dyade-logo.jpg",
        },
    ];

    return (
        <section className="testimonial-area pt-110 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="section-title text-center mb-60">
                            <span className="sub-title">Referenties</span>
                            <h2 className="title">Wij werken voor</h2>
                        </div>
                    </div>
                </div>

                <div className="testimonial-item-wrap">
                    <div className="row testimonial-active">
                        <SlickSlider settings={slick_settings}>
                            {slider_items.map((x, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "col-lg-3",
                                        index % 2 === 0 &&
                                            "testimonial-item-wrap-item-even"
                                    )}
                                >
                                    <TestimonialAreaItem item={x} />
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
