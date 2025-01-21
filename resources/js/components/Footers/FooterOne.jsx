import React from "react";
import { Link } from "@inertiajs/react";

const FooterOne = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <img
                                                src="/img/logo/logo.png"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="https://www.facebook.com/DrukkerijPrintvisie/?locale=nl_NL">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://nl.linkedin.com/company/drukkerij-printvisie">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-contact">
                                        <span>Contact</span>
                                        <h2 className="title">
                                            <a href="tel: 010 -7410410">
                                                010-7410410
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Paginas</h4>
                                    <div className="fw-link">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/index">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Contact</h4>
                                    <div className="footer-about">
                                        <ul className="list-wrap">
                                            <li>
                                                <img
                                                    src="/img/icon/phone_icon.svg"
                                                    alt=""
                                                />
                                                <a href="tel:0123456789">
                                                    010 -7410410
                                                </a>
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/icon/mail_icon.svg"
                                                    alt=""
                                                />
                                                <a href="mailto:company@gmail.com">
                                                    Info@printvisie.nl
                                                </a>
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/icon/loction_icon.svg"
                                                    alt=""
                                                />
                                                <span>
                                                    Aristotelesstraat 20 3076BD
                                                    Rotterdam
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="cart-img">
                                    {/* <img src="/img/images/cart_img.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="copyright-text text-end">
                                    <p>
                                        © 2025 Printvisie. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
