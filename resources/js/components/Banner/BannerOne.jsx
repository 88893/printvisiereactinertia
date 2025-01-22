import React from "react";
import { Link } from "@inertiajs/react";

const BannerOne = () => {
    return (
        <section className="banner-area banner-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div
                            className="banner-img wow fadeInLeft"
                            data-wow-delay=".4s"
                        >
                            <img src="/img/icon/drukkerij-printvisie-rotterdam.jpg" alt="" />
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
    );
};

export default BannerOne;
