import React, { useEffect } from "react";
import $ from "jquery";
import cn from "classnames";
import { Link } from "@inertiajs/react";

const HeaderOne = () => {
    useEffect(() => {
        /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $("#sticky-header").removeClass("sticky-menu");
                $(".scroll-to-target").removeClass("open");
            } else {
                $("#sticky-header").addClass("sticky-menu");
                $(".scroll-to-target").addClass("open");
            }
        });

        //SubMenu Dropdown Toggle
        if ($(".menu-area li.menu-item-has-children ul").length) {
            $(".menu-area .navigation li.menu-item-has-children").append(
                '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
            );
        }

        //Mobile Nav Hide Show
        if ($(".mobile-menu").length) {
            var mobileMenuContent = $(".menu-area .main-menu").html();
            $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

            //Dropdown Button
            $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
                "click",
                function () {
                    $(this).toggleClass("open");
                    $(this).prev("ul").slideToggle(300);
                }
            );
            //Menu Toggle Btn
            $(".mobile-nav-toggler").on("click", function () {
                $("body").addClass("mobile-menu-visible");
            });

            //Menu Toggle Btn
            $(".menu-backdrop, .mobile-menu .close-btn").on(
                "click",
                function () {
                    $("body").removeClass("mobile-menu-visible");
                }
            );
        }

        /*=============================================
	=          header btn active               =
=============================================*/
        $(function () {
            $(".header-btn").on("click", function () {
                $(".header-contact-wrap, .body-contact-overlay").toggleClass(
                    "active"
                );
                $("body").toggleClass("fix");
                return false;
            });
            $(".body-contact-overlay").on("click", function () {
                $(".header-contact-wrap, .body-contact-overlay").removeClass(
                    "active"
                );
                $("body").removeClass("fix");
                return false;
            });
        });
    }, []);

    // const { pathname } = useLocation();

    const isActiveClassName = (path) => {
        // return path === pathname ? "active" : "";
    };

    return (
        <>
            <header>
                <div
                    id="sticky-header"
                    className="menu-area transparent-header"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler">
                                    <i className="fas fa-bars"></i>
                                </div>

                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <img
                                                    src="/img/logo/logo.png"
                                                    alt="Logo"
                                                />
                                            </Link>
                                        </div>

                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li>
                                                    {" "}
                                                    <Link href="/">Home</Link>
                                                </li>

                                                <li
                                                    className={cn(
                                                        isActiveClassName(
                                                            "/about-us"
                                                        )
                                                    )}
                                                >
                                                    <Link href="/about-us">
                                                        Over ons
                                                    </Link>
                                                </li>

                                                <li
                                                    className={cn(
                                                        "menu-item-has-children",
                                                        [
                                                            "/about-me",
                                                            "/team",
                                                            "/team-details",
                                                            "/project-details",
                                                            "/services-details",
                                                            "/contact",
                                                        ]
                                                    )}
                                                ></li>

                                                <li
                                                    className={cn(
                                                        isActiveClassName(
                                                            "/team"
                                                        )
                                                    )}
                                                >
                                                    <Link href="/team">
                                                        Team
                                                    </Link>
                                                </li>

                                                <li
                                                    className={cn(
                                                        isActiveClassName(
                                                            "/contact"
                                                        )
                                                    )}
                                                >
                                                    <Link href="/contact">
                                                        Contact
                                                    </Link>
                                                </li>

                                                <li>
                                                    <a target="_blank" href="https://printvisie.wetransfer.com/">
                                                        WeTransfer
                                                    </a>
                                                </li>

                                                <li
                                                    className={cn(
                                                        "menu-item-has-children",
                                                        [
                                                            "/blog",
                                                            "/blog-details",
                                                        ]
                                                    )}
                                                >
                                                    {/* <Link href="#">News</Link>
                          <ul className="sub-menu">
                            <li className={cn(isActiveClassName("/blog"))}>
                              <Link href="/blog">Our Blog</Link>
                            </li>
                            <li
                              className={cn(isActiveClassName("/blog-details"))}
                            >
                              <Link href="/blog-details">Blog Details</Link>
                            </li>
                          </ul> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                {/* <!-- Mobile Menu  --> */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn">
                                            <i className="fas fa-times"></i>
                                        </div>
                                        <div className="nav-logo">
                                            <Link href="/">
                                                <img
                                                    src="/img/logo/logo.png"
                                                    alt="Logo"
                                                />
                                            </Link>
                                        </div>
                                        <div className="menu-outer">
                                            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop"></div>
                                {/* <!-- End Mobile Menu --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- header-contact --> */}

                    <div className="body-contact-overlay"></div>
                    {/* <!-- header-contact-end --> */}
                </div>
            </header>
        </>
    );
};

export default HeaderOne;
