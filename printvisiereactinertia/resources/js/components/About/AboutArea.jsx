import React from "react";
import { Link } from "@inertiajs/react";

const AboutArea = ({
    title,
    subTitle,
    desc,
    about_items = [],
    button_text,
    footer_text,
}) => {
    console.log(about_items);
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
                                    <span className="sub-title">
                                        {subTitle}
                                    </span>
                                    <h2 className="title">{title}</h2>
                                </div>
                                <p>{desc}</p>
                                <ul className="list-wrap">
                                    {about_items?.map((item, index) => (
                                        <li key={index}>
                                            <div className="icon">
                                                <img
                                                    src={item.icon.src}
                                                    alt={item.icon.alt}
                                                />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">
                                                    {item.content.title}
                                                </h4>
                                                <p>
                                                    {item.content.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="about-content-bottom">
                                    <span>{footer_text}</span>
                                    <div className="read-more-btn">
                                        <Link href="/about-us" className="btn">
                                            {button_text} <span></span>
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
