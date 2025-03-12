import React from "react";
import { Link } from "@inertiajs/react";

const FooterOne = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Logo en sociale media */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <img
                                                src="/img/logo/logo.png"
                                                alt="Printvisie Logo"
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
                                        <span>KVK Rotterdam</span>
                                        <h3 className="title">
                                            <a>24139784</a>
                                        </h3>
                                        <span>KVK Rotterdam</span>
                                        <h3 className="title">
                                            <a>24139784</a>
                                        </h3>
                                        <span>IBAN-nummer</span>
                                        <h3 className="title">
                                            <a>NL75 RABO 0117 1309 58</a>
                                        </h3>
                                        <span>BTW-nummer</span>
                                        <h3 className="title">
                                            <a>NL009621416B01</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Pagina's */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Pagina's</h4>
                                    <div className="fw-link">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/index">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">Over ons</Link>
                                            </li>
                                            <li>
                                                <Link href="/services">Diensten</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link href="/vacatures">Vacatures</Link>
                                            </li>
                                            <li>
                                                <Link href="/showcases">Showcases</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contactgegevens */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Contact</h4>
                                    <div className="footer-about">
                                        <ul className="list-wrap">
                                            <li>
                                                <img
                                                    src="/img/icon/phone_icon.svg"
                                                    alt="Telefoon"
                                                />
                                                <a href="tel:0107410410">010-7410410</a>
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/icon/mail_icon.svg"
                                                    alt="Email"
                                                />
                                                <a href="mailto:info@printvisie.nl">
                                                    info@printvisie.nl
                                                </a>
                                            </li>
                                            <li>
                                                {/* <img
                                                    src="/img/icon/location_icon.svg"
                                                    alt="Adres"
                                                /> */}
                                                <span>Aristotelesstraat 20, 3076BD, Rotterdam</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Overig */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Overig</h4>
                                    <div className="fw-link">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/climatecalc">ClimateCalc</Link>
                                            </li>
                                            <li>
                                                <Link href="/wetransfer">WeTransfer</Link>
                                            </li>
                                            <li>
                                                <Link href="/webshop">Webshop</Link>
                                            </li>
                                            <li>
                                                <Link href="/greenlabel">Groenlabel</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="cart-img">
                                    {/* Optionele afbeelding */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="copyright-text text-end">
                                    <p>© 2025 Printvisie. Alle rechten voorbehouden</p>
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
