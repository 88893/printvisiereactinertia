import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationArea = () => {
    return (
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
                                Vraag eenvoudig een offerte aan en ontdek wat
                                wij voor jou kunnen betekenen. Op maat gemaakt
                                en vrijblijvend!
                            </p>
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
