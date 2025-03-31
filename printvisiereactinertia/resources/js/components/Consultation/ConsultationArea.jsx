import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationArea = ({ title, subTitle, desc, icon_path }) => {
    return (
        <section className="consultation-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="consultation-content">
                            <div className="section-title mb-25">
                                <img src={icon_path} alt="" />
                                <span className="sub-title">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                            </div>
                            <p>{desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <ConsultationAreaForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationArea;
