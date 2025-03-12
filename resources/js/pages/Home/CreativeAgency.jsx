import { useState, useEffect } from "react";
import React from "react";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";
import Layout from "../../layouts/Layout";
import { Link } from "@inertiajs/react";

const CreativeAgency = () => {
    const services_area_list = [
        {
            title: "Advies en begeleiding",
            desc: " Wil je iets weten ove drukwerktechnieken, papiersoorten, afwerkingen of fullfillment? Heb je een schijnbaar idiote wens als het gaat om levertijden, drukwerkformaten en afwerkingen?",

            delay_time: 2,
        },
        {
            title: "Online drukwerk",
            desc: "We behoren tot de top in online drukwerk. Al jaren. Kijken, kiezen, bestellen. Tegen de laagste prijs en morgen in huis. Makkelijker kan niet. Goedkoper en beter kun je niet terecht.",

            delay_time: 4,
        },
        {
            title: "Digitaal drukwerk",
            desc: "Soms is een oplage van 1, 5 of 150 stuks meer dan voldoende voor je presentatie. In dat geval bieden onze digitale drukpersen de schitterende, ultrasnelle en ook financieel slimme optie.",

            delay_time: 6,
        },
        {
            title: "Gepersonaliseerd drukwerk",
            desc: "Je direct mailing scoort beter door het contact persoonlijk te maken. Met dit gepersonaliseerd drukwerk, via Variabele Data Printing (VDP), win je het hart en hoofd van elke prospect.",

            delay_time: 8,
        },
        {
            title: "Offset drukwerk",
            desc: "Onze persen draaien voor sterke merken: van Diesel tot Philips en Porsche. Met het traditionele offsetdrukwerk van Printvisie weet je zeker dat je een klassieke topprestatie in handen krijgt.",

            delay_time: 8,
        },
        {
            title: "Fullfillment",
            desc: "Afstemmen, verzenden en bezorgen kan makkelijker. We kennen de beste wegen, de beste tarieven en de beste wijze om het proces moeiteloos te verzorgen.",

            delay_time: 8,
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
    const review_items = [
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "",
    });
    const siteKey = "6LeiEfIqAAAAAN8JCu5LMx2Hv-YkvuuYVuRw9sRB";

    useEffect(() => {
        const loadRecaptchaScript = () => {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        };

        if (!window.grecaptcha) {
            loadRecaptchaScript();
        }
    }, []);

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ ...notification, show: false });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const formValues = Object.fromEntries(formData.entries());

            setNotification({
                show: true,
                message: "Bezig met verzenden...",
                type: "info",
            });

            if (!window.grecaptcha) {
                throw new Error("reCAPTCHA not loaded");
            }

            await new Promise((resolve) => {
                window.grecaptcha.ready(async () => {
                    try {
                        const token = await window.grecaptcha.execute(siteKey, {
                            action: "submit",
                        });

                        console.log("Form data:", formValues);
                        console.log("Captcha token:", token);

                        await new Promise((r) => setTimeout(r, 1000));

                        setNotification({
                            show: true,
                            message: "Formulier succesvol verzonden!",
                            type: "success",
                        });

                        e.target.reset();
                        resolve();
                    } catch (error) {
                        throw error;
                    }
                });
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setNotification({
                show: true,
                message:
                    "Er is een fout opgetreden bij het verzenden van het formulier.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <Layout header={1} footer={1}>
            <section className="banner-area banner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="banner-img wow fadeInLeft"
                                data-wow-delay=".4s"
                            >
                                <img
                                    src="/img/icon/drukkerij-printvisie-rotterdam.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h2
                                    className="title wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    De groenste drukkerij van Rotterdam
                                </h2>
                                <Link
                                    href="/contact"
                                    className="btn wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    Ontdek waarom <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                    <img src="/img/banner/banner_shape01.png" alt="" />
                    <img
                        src="/img/banner/banner_shape02.png"
                        alt=""
                        className="animationFramesOne"
                    />
                    <img
                        src="/img/banner/banner_shape03.png"
                        alt=""
                        className="contactSwimmer"
                    />
                    <img
                        src="/img/banner/banner_shape04.png"
                        alt=""
                        className="rotateme"
                    />
                    <img
                        src="/img/banner/banner_shape05.png"
                        alt=""
                        className="animation1"
                    />
                    <img
                        src="/img/banner/banner_shape06.png"
                        alt=""
                        className="ribbonRotate"
                    />
                    <img
                        src="/img/banner/banner_shape07.png"
                        alt=""
                        className="float-bob-x"
                    />
                </div>
            </section>
            <section className="services-area pt-35 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        {services_area_list.map((item, index) => (
                            <div
                                key={index}
                                className="col-xl-4 col-lg-5 col-md-6 col-sm-10"
                            >
                                <div
                                    className="services-item wow fadeInUp"
                                    data-wow-delay={`.${item.delay_time}s`}
                                >
                                    <div className="services-icon">
                                        <img
                                            src={`/img/icon/services_icon0${
                                                index + 1
                                            }.png`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="services-content">
                                        <h4 className="title">
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="about-area">
                <div className="container custom-container">
                    <div className="about-inner">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-46 order-0 order-lg-2">
                                <div className="about-img text-end">
                                    <img
                                        src="/img/icon/dennis-den-engelsman-offerte-aanvragen-printvisie.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-54">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">
                                            Over ons
                                        </span>
                                        <h2 className="title">
                                            Creatief en Duurzaam Denken
                                        </h2>
                                    </div>
                                    <p>
                                        Bij ons draait alles om creativiteit en
                                        duurzaamheid. Wij geloven dat design en
                                        productie hand in hand gaan met respect
                                        voor de natuur. Met een frisse blik en
                                        passie voor kleur brengen we ideeën tot
                                        leven, altijd met een groen hart.
                                    </p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img
                                                    src="/img/icon/about_icon01.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">
                                                    Duurzaam vakmanschap
                                                </h4>
                                                <p>
                                                    Innovatieve oplossingen die
                                                    zorgen voor een schonere en
                                                    groenere toekomst.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img
                                                    src="/img/icon/about_icon02.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">
                                                    Samen sterker
                                                </h4>
                                                <p>
                                                    We werken samen met passie
                                                    en aandacht om ideeën
                                                    werkelijkheid te maken.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="about-content-bottom">
                                        <span>
                                            samen maken we de wereld een stukje
                                            mooier.
                                        </span>
                                        <div className="read-more-btn">
                                            <Link
                                                href="/about-us"
                                                className="btn"
                                            >
                                                Lees Meer <span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-img-wrap">
                                <img
                                    src="/img/icon/services_icon01.png"
                                    alt=""
                                    className="img-shape"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-content">
                                <div className="section-title mb-25">
                                    <span className="sub-title">Ons Team</span>
                                    <h2 className="title">
                                        Maak kennis met ons team
                                    </h2>
                                </div>
                                <p>
                                    Ons creatieve team zet zich in om jouw
                                    ideeën tot leven te brengen met passie en
                                    vakmanschap
                                </p>
                                <Link href="/team" className="btn">
                                    Lees Meer<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-shape-wrap">
                    <img
                        src="/img/images/team_shape01.png"
                        alt=""
                        className="ribbonRotate"
                    />
                    <img
                        src="/img/images/team_shape02.png"
                        alt=""
                        className="float-bob-x"
                    />
                </div>
            </section>
            <section className="project-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="project-content">
                                <div className="section-title white-title mb-30">
                                    <span className="sub-title">
                                        Recente Projecten
                                    </span>
                                    <h2 className="title">Zien is geloven</h2>
                                </div>
                                <p>Dit zijn projecten die we gemaakt hebben</p>
                                <div className="content-bottom">
                                    <div className="project-nav">
                                        <button
                                            className="swiper-button-prev"
                                            // onClick={toPrev}
                                        ></button>
                                        <button
                                            className="swiper-button-next"
                                            // onClick={toNext}
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Disable the project section for now */}
                        <div className="col-xl-8">
                            <div className="project-item-wrap">
                                {/* <div className="swiper-container project-active">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        {...swiper_settings}
                                        onBeforeInit={(swiper) => {
                                            sliderRef.current = swiper;
                                        }}
                                    >
                                        {[1, 2, 3, 2].map((x, index) => (
                                            <SwiperSlide
                                                key={x + index + Math.random()}
                                            >
                                                <div className="swiper-slide">
                                                    <div className="project-item">
                                                        <Link href="/project-details">
                                                            <img
                                                                src={`/img/project/project_img0${x}.jpg`}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-shape-wrap">
                    <img
                        src="/img/project/project_shape01.png"
                        alt=""
                        className="shape-one ribbonRotate"
                    />
                    <img
                        src="/img/project/project_shape02.png"
                        alt=""
                        className="shape-two ribbonRotate"
                    />
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
                                {review_items.map((item, index) => (
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
            <section className="consultation-area pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="consultation-content">
                                <div className="section-title mb-25">
                                    <img
                                        src="/img/icon/consultation_icon01.png"
                                        alt=""
                                    />
                                    <span className="sub-title">Offerte</span>
                                    <h2 className="title">
                                        Op Maat Gemaakt: Vraag Jouw Offerte Aan
                                    </h2>
                                </div>
                                <p>
                                    Vraag eenvoudig een offerte aan en ontdek
                                    wat wij voor jou kunnen betekenen. Op maat
                                    gemaakt en vrijblijvend!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="consultation-form-wrap">
                                <h4 className="title">
                                    Snel en Eenvoudig: Vraag een Offerte aan
                                </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-grp">
                                        <input
                                            type="text"
                                            name="naam"
                                            placeholder="Naam"
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Emailadres"
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <input
                                            type="text"
                                            name="telefoon"
                                            placeholder="Telefoonnummer"
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <input
                                            type="text"
                                            name="vraag"
                                            placeholder="Beschrijf hier jouw vraag"
                                        />
                                    </div>
                                    <div className="recaptcha-terms">
                                        <small>
                                            Deze site is beschermd door
                                            reCAPTCHA en de
                                            <a
                                                href="https://policies.google.com/privacy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {" "}
                                                Google Privacy Policy
                                            </a>{" "}
                                            en
                                            <a
                                                href="https://policies.google.com/terms"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {" "}
                                                Terms of Service
                                            </a>{" "}
                                            zijn van toepassing.
                                        </small>
                                    </div>
                                    <button
                                        className="btn"
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{
                                            cursor: isSubmitting
                                                ? "not-allowed"
                                                : "pointer",
                                            opacity: isSubmitting ? 0.7 : 1,
                                        }}
                                    >
                                        {isSubmitting
                                            ? "Bezig met verzenden..."
                                            : "Verzenden"}
                                    </button>
                                </form>

                                {notification.show && (
                                    <div
                                        className={`notification-popup ${notification.type}`}
                                        style={{
                                            position: "fixed",
                                            bottom: "20px",
                                            right: "20px",
                                            padding: "15px 20px",
                                            borderRadius: "4px",
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.15)",
                                            zIndex: 1000,
                                            maxWidth: "300px",
                                            backgroundColor:
                                                notification.type === "success"
                                                    ? "#4CAF50"
                                                    : notification.type ===
                                                      "error"
                                                    ? "#F44336"
                                                    : "#2196F3",
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            animation: "slideIn 0.3s ease-out",
                                        }}
                                    >
                                        <span>{notification.message}</span>
                                        <button
                                            onClick={() =>
                                                setNotification({
                                                    ...notification,
                                                    show: false,
                                                })
                                            }
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "white",
                                                cursor: "pointer",
                                                marginLeft: "10px",
                                                fontSize: "16px",
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}

                                {/* Add CSS for animation */}
                                <style jsx>{`
                                    @keyframes slideIn {
                                        from {
                                            transform: translateX(100%);
                                            opacity: 0;
                                        }
                                        to {
                                            transform: translateX(0);
                                            opacity: 1;
                                        }
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CreativeAgency;
