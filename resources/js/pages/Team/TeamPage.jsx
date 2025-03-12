import React from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import cn from "classnames";
import { Link } from "@inertiajs/react";

const TeamPage = () => {
    const team_members = [
        {
            src: "/img/team/dennise.png",
            // url: "/team-details",
            title: "Dennis den Engelsman",
            designation: "Bedrijfsleider / Calculator",
        },
        {
            src: "/img/team/henks.png",
            // url: "/team-details",
            title: "Henk Sint",
            designation: "Calculator",
        },
        {
            src: "/img/team/faruky.png",
            // url: "/team-details",
            title: "Faruk Yildiz",
            designation: "Verkoop",
        },
        {
            src: "/img/team/rogierk.png",
            // url: "/team-details",
            title: "Rogier Kloos",
            designation: "Orderbegeleider",
        },
        {
            src: "/img/team/stefans.png",
            // url: "/team-details",
            title: "Stefan Schippers",
            designation: "Bestandscontrole",
        },
        {
            src: "/img/team/hansr.png",
            // url: "/team-details",
            title: "Hans van Reek",
            designation: "Offset drukker",
        },
        {
            src: "/img/team/richarda.png",
            // url: "/team-details",
            title: "Richard Andressen",
            designation: "Offset drukker",
        },
        {
            src: "/img/team/gregorys.png",
            // url: "/team-details",
            title: "Gregory Stekkel",
            designation: "Digitale drukker",
        },
        {
            src: "/img/team/willemh.png",
            // url: "/team-details",
            title: "Willem van der Ham",
            designation: "Nabewerker",
        },
        {
            src: "/img/team/dennisl.png",
            // url: "/team-details",
            title: "Dennis van Leeuwen",
            designation: "Nabewerker",
        },
        {
            src: "/img/team/marvinb.png",
            // url: "/team-details",
            title: "Marvin Bhagola",
            designation: "Nabewerker",
        },
        {
            src: "/img/team/patrickl.png",
            // url: "/team-details",
            title: "Patrick Lima-Rocha",
            designation: "Nabewerker",
        },
    ];

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

    const images = [
        "/img/icon/philips-logo.png",
        "/img/icon/porsche-logo.png",
        "/img/icon/dudok-logo.jpg",
        "/img/icon/ahoy-rotterdam-logo.jpg",
        "/img/icon/prinses-beatrix-spierfonds-logo.jpg",
        "/img/icon/rvko-logo.jpg",
        "/img/icon/numatic-logo.jpg",
        "/img/icon/hilton-logo.jpg",
        "/img/icon/dyade-logo.jpg",
    ];
    return (
        <Layout header={1} footer={1} className="" mainClassName="">
            <BreadcrumbArea
                title={"Jouw specialisten"}
                subtitle={"Team"}
                showShape={false}
                className={" breadcrumb-area-two pt-175"}
            />
            <div className="community-area pt-30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="community-img">
                                <img
                                    src="/img/images/community_img.png"
                                    alt=""
                                />
                            </div>
                            <div className="community-content">
                                <p>
                                    Ons team zet zich dagelijks in om
                                    hoogwaardige en duurzame drukwerkoplossingen
                                    te leveren, met oog voor detail en passie
                                    voor het vak.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="team-area-two pt-110 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {team_members.map((item, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-10"
                            >
                                <div className={cn("team-item")}>
                                    <div className="team-thumb">
                                        <Link href={item.url}>
                                            <img src={item.src} alt="" />
                                        </Link>
                                    </div>

                                    <div className="team-content">
                                        <h2 className="title">
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        </h2>

                                        <span>{item.designation}</span>

                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="brand-area-two pt-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-80">
                                <span className="sub-title">Referenties</span>
                                <h2 className="title">Wij werken voor</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row brand-active">
                        <SlickSlider settings={slick_settings}>
                            {images.map((image, index) => (
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
        </Layout>
    );
};

export default TeamPage;
