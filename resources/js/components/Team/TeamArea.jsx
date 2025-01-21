import React from "react";
import { Link } from "@inertiajs/react";

const TeamArea = () => {
    return (
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
                                Ons creatieve team zet zich in om jouw ideeën
                                tot leven te brengen met passie en vakmanschap
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
    );
};

export default TeamArea;
