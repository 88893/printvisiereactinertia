import React from "react";
import $ from "jquery";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import HistoryAreaRoadmap from "../../components/HistoryArea/HistoryAreaRoadmap";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import cn from "classnames";
import { doAnimations } from "../../lib/helpers";

const AboutUs = () => {
    const counter_items = [
        {
            src: "/img/icon/inner_counter_icon01.png",
            titles: ["Tevreden", "Klanten"], // Over tevreden klanten
        },
        {
            src: "/img/icon/inner_counter_icon02.png",
            titles: ["Afgeronde", "Projecten"], // Voor het aantal succesvolle projecten
        },
        {
            src: "/img/icon/inner_counter_icon03.png",
            titles: ["Toegewijde", "Werknemers"], // Voor de medewerkers
        },
        {
            src: "/img/icon/inner_counter_icon04.png",
            titles: ["Milieuvriendelijk", "Materiaal"], // Voor hun duurzaamheid en erkenningen
        },
    ];

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
        <Layout header={1} footer={1} className="" mainClassName="">
            <BreadcrumbArea
                title="Over Ons"
                subtitle={"Over Ons"}
                className={"pt-175 pb-140"}
            />{" "}
            <section className="counter-area-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="counter-item-wrap-three">
                                <ul className="list-wrap">
                                    {counter_items.map((item, index) => (
                                        <li key={index}>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img
                                                        src={item.src}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count">
                                                        <span
                                                            className="odometer"
                                                            data-count="210"
                                                        >
                                                            {/* <Odometer
                                value={props.amount}
                                format="(,ddd).dd"
                                duration={1000}
                                animation={"count"}
                            /> */}
                                                        </span>
                                                        +
                                                    </h2>
                                                    <p>
                                                        {item.titles[0]}{" "}
                                                        <span>
                                                            {item.titles[1]}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="counter-content-three">
                                <div className="section-title title-style-two mb-30">
                                    <h2 className="title">
                                        Duurzaam Drukwerk voor een Betere
                                        Toekomst
                                    </h2>
                                </div>
                                <p>
                                    Bij Printvisie Rotterdam geloven we in
                                    duurzaam drukwerk. Ons doel is om bedrijven
                                    en organisaties te helpen hun ecologische
                                    voetafdruk te verkleinen door gebruik te
                                    maken van milieuvriendelijke materialen en
                                    productiemethoden. Wij bieden hoogwaardige
                                    printoplossingen, zoals brochures,
                                    visitekaartjes, en posters, terwijl we
                                    actief streven naar het minimaliseren van de
                                    impact op het milieu.
                                </p>
                                <div
                                    className="content-bottom"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                    }}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <span
                                            style={{
                                                fontSize: "36px",
                                                fontWeight: "bold",
                                                color: "#e4047c",
                                            }}
                                        >
                                            100+
                                        </span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                color: "#e4047c",
                                            }}
                                        >
                                            Tevreden klanten
                                        </p>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <span
                                            style={{
                                                fontSize: "36px",
                                                fontWeight: "bold",
                                                color: "#f481bc",
                                            }}
                                        >
                                            100%
                                        </span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                color: "#f481bc",
                                            }}
                                        >
                                            Klanttevredenheid
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="history-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title white-title text-center mb-45">
                                <span className="sub-title">Ons Verhaal</span>
                                <h2 className="title">
                                    De Geschiedenis van Printvisie
                                </h2>
                                <p>
                                    Printvisie is ontstaan vanuit een passie
                                    voor duurzaam en innovatief drukwerk. Al
                                    meer dan 20 jaar helpen wij bedrijven en
                                    organisaties hun ideeën tot leven te brengen
                                    door middel van hoogwaardige
                                    printoplossingen.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-inner">
                        <div className="history-img">
                            <img
                                src="/img/images/history_img.jpg"
                                alt="Over ons"
                            />
                        </div>
                        <div className="row g-0 justify-content-end">
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <h2 className="title">
                                        Hoe Printvisie begon als een duurzame
                                        visie
                                    </h2>
                                    <p>
                                        Printvisie werd opgericht met het idee
                                        om drukwerk niet alleen toegankelijk te
                                        maken, maar ook duurzaam en
                                        milieuvriendelijk. Door te investeren in
                                        de nieuwste technologieën en
                                        samenwerkingen met betrouwbare partners,
                                        streven wij ernaar om altijd de hoogste
                                        kwaliteit te leveren, terwijl we de
                                        impact op het milieu minimaliseren.
                                    </p>
                                    <ul className="list-wrap">
                                        <li>
                                            <i className="far fa-check"></i>
                                            Duurzame materialen en
                                            milieuvriendelijke productie
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Innovatieve oplossingen voor elke
                                            printbehoefte
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Toegewijd aan het overtreffen van
                                            klantverwachtingen
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Roadmap */}
                    <HistoryAreaRoadmap />
                </div>

                <div className="history-shape-wrap">
                    <img src="/img/images/history_shape01.png" alt="Vorm 1" />
                    <img src="/img/images/history_shape02.png" alt="Vorm 2" />
                </div>
            </section>
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
                                {slider_items.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "col-lg-3",
                                            index % 2 === 0 &&
                                                "testimonial-item-wrap-item-even"
                                        )}
                                    >
                                        <div className="testimonial-item">
                                            <div className="testimonial-content">
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="testimonial-info">
                                                <div className="thumb">
                                                    <img
                                                        src={`${item.src}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        {item.title}
                                                    </h4>
                                                    <p>{item.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </SlickSlider>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutUs;
