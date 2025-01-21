import React from "react";
import { Link } from "@inertiajs/react";

const AboutArea = () => {
    return (
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
                                    <span className="sub-title">Over ons</span>
                                    <h2 className="title">
                                        Creatief en Duurzaam Denken
                                    </h2>
                                </div>
                                <p>
                                    Bij ons draait alles om creativiteit en
                                    duurzaamheid. Wij geloven dat design en
                                    productie hand in hand gaan met respect voor
                                    de natuur. Met een frisse blik en passie
                                    voor kleur brengen we ideeën tot leven,
                                    altijd met een groen hart.
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
                                                We werken samen met passie en
                                                aandacht om ideeën werkelijkheid
                                                te maken.
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
                                        <Link href="/about-us" className="btn">
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
    );
};

export default AboutArea;
