import React from "react";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../layouts/Layout";

const ContactPage = () => {
    const info_items = [
        {
            src: "/img/icon/loction_icon03.png",
            title: "Adres",
            desc: (
                <>
                    <p>Aristotelesstraat 20, 3076BD, Rotterdam</p>
                </>
            ),
        },
        {
            src: "/img/icon/mail_icon03.png",
            title: "E-mail",
            desc: (
                <>
                    <a href="mailto:info@printvisie.nl">info@printvisie.nl</a>
                </>
            ),
        },
        {
            src: "/img/icon/phone_icon03.png",
            title: "Bellen",
            desc: (
                <>
                    <a href="tel:0107410410">010 - 7410410</a>
                </>
            ),
        },
    ];
    return (
        <Layout header={1} footer={1} className="" mainClassName="">
            <BreadcrumbArea
                title={"Vragen???"}
                subtitle={"Contact"}
                className={"breadcrumb-area-four pt-175 pb-160"}
                showShape={false}
                showShapeThree={true}
            />
            <section className="inner-contact-area">
                <div className="container">
                    <div className="inner-contact-wrap">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10">
                                <div className="section-title title-style-two mb-50">
                                    <h2 className="title">
                                        Een <span>Drukwerk Idee?</span> Neem
                                        contact op!
                                    </h2>
                                </div>

                                <div className="inner-contact-form-wrap">
                                    <form action="#">
                                        <div className="form-grp">
                                            <label htmlFor="name">
                                                <i className="fas fa-user"></i>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Naam"
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="phone">
                                                <i className="fas fa-phone"></i>
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                placeholder="Telefoonnummer"
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="email">
                                                <i className="fas fa-envelope"></i>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Emailadres"
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="subject">
                                                <i className="fas fa-book-alt"></i>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                placeholder="Bedrijfsnaam"
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="comment">
                                                <i className="fas fa-user-edit"></i>
                                            </label>
                                            <textarea
                                                name="comment"
                                                id="comment"
                                                placeholder="Beschrijf jouw drukwerk idee of vraag"
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn">
                                            Verzenden <span></span>
                                        </button>
                                    </form>
                                </div>

                                <div id="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.9791540180895!2d4.520896077082605!3d51.882959283197884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43252b4d097b1%3A0x7538a788239d9cf2!2sDrukkerij%20Printvisie%20B.V.!5e1!3m2!1sen!2snl!4v1737475121465!5m2!1sen!2snl"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>

                                <div className="inner-contact-info">
                                    <ul className="list-wrap">
                                        {info_items.map((x, index) => (
                                            <li key={index}>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img
                                                            src={x.src}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">
                                                            {x.title}
                                                        </h6>
                                                        {x.desc}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;
