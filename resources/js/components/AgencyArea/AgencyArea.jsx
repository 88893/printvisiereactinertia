import React from "react";
import { Link } from "@inertiajs/inertia-react";

const AgencyArea = () => {
    return (
        <section className="agency-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text-center agency-img">
                            <img
                                src="/img/images/agency_img.png"
                                alt="Agency"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="agency-content">
                            <div className="mb-20 section-title title-style-two">
                                <span className="sub-title">Our Agency</span>
                                <h2 className="title">
                                    Best Online Agency Since 2023
                                </h2>
                            </div>
                            <p className="info-one">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.
                            </p>
                            <p className="info-two">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.
                            </p>

                            {/* Fixed Link Component */}
                            <Link href="/about-us" className="btn">
                                Learn More <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agency Shapes */}
            <div className="agency-shape-wrap">
                <img src="/img/images/agency_shape01.png" alt="Shape 1" />
                <img src="/img/images/agency_shape02.png" alt="Shape 2" />
                <img src="/img/images/agency_shape03.png" alt="Shape 3" />
                <img src="/img/images/agency_shape04.png" alt="Shape 4" />
            </div>
        </section>
    );
};

export default AgencyArea;
