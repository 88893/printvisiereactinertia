import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
    return (
        <section className="inner-contact-area">
            <div className="container">
                <div className="inner-contact-wrap">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title title-style-two mb-50">
                                <h2 className="title">
                                    Een <span>Drukwerk Idee?</span> Neem contact
                                    op!
                                </h2>
                            </div>

                            <div className="inner-contact-form-wrap">
                                <InnerContactForm />
                            </div>

                            <div id="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.9791540180895!2d4.520896077082605!3d51.882959283197884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43252b4d097b1%3A0x7538a788239d9cf2!2sDrukkerij%20Printvisie%20B.V.!5e1!3m2!1sen!2snl!4v1737475121465!5m2!1sen!2snl"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>

                            <div className="inner-contact-info">
                                <InnerContactInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnerContactArea;
