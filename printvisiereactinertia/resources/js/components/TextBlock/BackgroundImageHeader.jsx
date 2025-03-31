import React from "react";
import { Link } from "@inertiajs/react";
import cn from "classnames";

const BackgroundImageHeader = ({
    title,
    subtitle,
    backgroundImage = "/img/images/default-header-bg.jpg",
    showShape = true,
    className,
    showShapeThree,
    height = "400px",
    textColor = "white",
    breadcrumb = true,
    overlay = true,
    overlayColor = "rgba(0, 0, 0, 0.5)",
    overlayOpacity = 0.5,
}) => {
    return (
        <section
            className={cn("background-image-header mt-[4.9rem]", className)}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: height,
                position: "relative",
            }}
        >
            {/* Overlay */}
            {overlay && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: overlayColor,
                        opacity: overlayOpacity,
                    }}
                />
            )}

            <div
                className="container relative z-10"
                style={{ position: "relative", zIndex: 10 }}
            >
                <div className="row">
                    <div className="col-12">
                        <div
                            className="breadcrumb-content text-center"
                            style={{ color: textColor, paddingTop: "100px" }}
                        >
                            <h2
                                className="title font-bold text-4xl mb-4"
                                style={{ color: textColor }}
                            >
                                {title}
                            </h2>

                            {subtitle && !breadcrumb && (
                                <p className="subtitle text-xl">{subtitle}</p>
                            )}

                            {breadcrumb && (
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-black inline-flex justify-center">
                                        <li className="breadcrumb-item1">
                                            <Link
                                                href="/"
                                                style={{ color: "white" }}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item1 active before:content-['/'] before:text-white"
                                            aria-current="page"
                                            style={{ color: textColor }}
                                        >
                                            {subtitle}
                                        </li>
                                    </ol>
                                </nav>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {showShape && (
                <div className="breadcrumb-shape-wrap">
                    <img src="/img/images/breadcrumb_shape01.png" alt="" />
                    <img src="/img/images/breadcrumb_shape02.png" alt="" />
                </div>
            )}

            {showShapeThree && (
                <div className="breadcrumb-shape-wrap-three">
                    <img
                        src="/img/images/breadcrumb_shape04.png"
                        alt=""
                        className="wow zoomIn"
                        data-wow-delay=".2s"
                    />
                    <img
                        src="/img/images/breadcrumb_shape05.png"
                        alt=""
                        className="wow zoomIn"
                        data-wow-delay=".2s"
                    />
                    <img
                        src="/img/images/breadcrumb_shape06.png"
                        alt=""
                        className="wow zoomIn"
                        data-wow-delay=".2s"
                    />
                </div>
            )}
        </section>
    );
};

export default BackgroundImageHeader;
