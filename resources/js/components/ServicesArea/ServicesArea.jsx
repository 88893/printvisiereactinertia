import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = ({ services = [] }) => {
    return (
        <section className="services-area pt-35 pb-95">
            <div className="container">
                <div className="row justify-content-center">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-4 col-lg-5 col-md-6 col-sm-10"
                        >
                            <ServicesAreaItem index={index} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;
