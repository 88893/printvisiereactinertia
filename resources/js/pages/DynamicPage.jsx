import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import SlickSlider from "../components/SlickSlider/SlickSlider";
import $ from "jquery";
import { doAnimations } from "../lib/helpers";
import cn from "classnames";
import Layout from "../layouts/Layout";
import { Link } from "@inertiajs/react";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import HistoryAreaRoadmap from "../components/HistoryArea/HistoryAreaRoadmap";

const DynamicPage = ({ page }) => {
    // Define mock data for your JSX expressions
    const services_area_list = [
        {
            title: "Service 1",
            url: "/service1",
            desc: "Description for service 1",
            delay_time: 2,
        },
        {
            title: "Service 2",
            url: "/service2",
            desc: "Description for service 2",
            delay_time: 4,
        },
        {
            title: "Service 3",
            url: "/service3",
            desc: "Description for service 3",
            delay_time: 6,
        },
    ];

    const review_items = [
        {
            title: "Client 1",
            designation: "Company 1",
            desc: "Testimonial 1",
            src: "/img/testimonial/testimonial_img01.png",
        },
        {
            title: "Client 2",
            designation: "Company 2",
            desc: "Testimonial 2",
            src: "/img/testimonial/testimonial_img02.png",
        },
        {
            title: "Client 3",
            designation: "Company 3",
            desc: "Testimonial 3",
            src: "/img/testimonial/testimonial_img03.png",
        },
    ];

    const slick_settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        type: "success",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock form submission
        setTimeout(() => {
            setNotification({
                show: true,
                type: "success",
                message: "Form submitted successfully!",
            });
            setIsSubmitting(false);

            // Hide notification after 3 seconds
            setTimeout(() => {
                setNotification((prev) => ({ ...prev, show: false }));
            }, 3000);
        }, 1500);
    };

    // Add custom imports to the head
    useEffect(() => {
        if (page.imports) {
            const headElement = document.head;
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = page.imports;

            const elements = tempDiv.children;
            const importedElements = [];

            while (elements.length > 0) {
                const element = elements[0];
                headElement.appendChild(element);
                importedElements.push(element);
            }

            return () => {
                importedElements.forEach((element) => {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                });
            };
        }
    }, [page.imports]);

    // Add custom scripts
    useEffect(() => {
        if (page.scripts) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.innerHTML = page.scripts;
            script.className = "dynamic-page-script";
            document.body.appendChild(script);

            return () => {
                const elements = document.getElementsByClassName(
                    "dynamic-page-script"
                );
                while (elements.length > 0) {
                    elements[0].parentNode.removeChild(elements[0]);
                }
            };
        }
    }, [page.scripts]);

    // For demonstration purposes - you'd need to implement more logic based on your page slug
    // This is a simplistic approach that would need customization per page template
    const PageContent = () => {
        if (page.slug === "homet") {
            return (
                <>
                    <section className="banner-area banner-bg">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div
                                        className="banner-img wow fadeInLeft"
                                        data-wow-delay=".4s"
                                    >
                                        <img
                                            src="/img/icon/drukkerij-printvisie-rotterdam.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-content">
                                        <h2
                                            className="title wow fadeInUp"
                                            data-wow-delay=".4s"
                                        >
                                            De groenste drukkerij van Rotterdam
                                        </h2>
                                        <Link
                                            href="/contact"
                                            className="btn wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            Ontdek waarom <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-shape-wrap">
                            <img src="/img/banner/banner_shape01.png" alt="" />
                            <img
                                src="/img/banner/banner_shape02.png"
                                alt=""
                                className="animationFramesOne"
                            />
                            <img
                                src="/img/banner/banner_shape03.png"
                                alt=""
                                className="contactSwimmer"
                            />
                            <img
                                src="/img/banner/banner_shape04.png"
                                alt=""
                                className="rotateme"
                            />
                            <img
                                src="/img/banner/banner_shape05.png"
                                alt=""
                                className="animation1"
                            />
                            <img
                                src="/img/banner/banner_shape06.png"
                                alt=""
                                className="ribbonRotate"
                            />
                            <img
                                src="/img/banner/banner_shape07.png"
                                alt=""
                                className="float-bob-x"
                            />
                        </div>
                    </section>

                    <section className="services-area pt-35 pb-95">
                        <div className="container">
                            <div className="row justify-content-center">
                                {services_area_list.map((item, index) => (
                                    <div
                                        key={index}
                                        className="col-xl-4 col-lg-5 col-md-6 col-sm-10"
                                    >
                                        <div
                                            className="services-item wow fadeInUp"
                                            data-wow-delay={`.${item.delay_time}s`}
                                        >
                                            <div className="services-icon">
                                                <img
                                                    src={`/img/icon/services_icon0${
                                                        index + 1
                                                    }.png`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="services-content">
                                                <h4 className="title">
                                                    <Link href={item.url}>
                                                        {item.title}
                                                    </Link>
                                                </h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Add more sections as needed */}
                </>
            );
        } else {
            // For other pages or unknown content, use dangerouslySetInnerHTML
            return <div dangerouslySetInnerHTML={{ __html: page.content }} />;
        }
    };

    return (
        <Layout>
            <Head>
                <title>{page.meta_title || page.title}</title>
                {page.meta_description && (
                    <meta name="description" content={page.meta_description} />
                )}
                {page.meta_keywords && (
                    <meta name="keywords" content={page.meta_keywords} />
                )}
                {page.meta_image && (
                    <>
                        <meta property="og:image" content={page.meta_image} />
                        <meta name="twitter:image" content={page.meta_image} />
                    </>
                )}
            </Head>

            <PageContent />
        </Layout>
    );
};

export default DynamicPage;
