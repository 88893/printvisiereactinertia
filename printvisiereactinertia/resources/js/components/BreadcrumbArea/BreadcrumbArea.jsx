import React from "react";
import { Link } from "@inertiajs/react";
import cn from "classnames";

const BreadcrumbArea = ({
    title,
    subtitle,
    showShape = true,
    className,
    showShapeThree,
    textColor,
    textAlign,
    fontSize,
    fontWeight,
}) => {
    // Stel standaard stijlen in voor de titel en subtitel
    const titleStyle = {
        color: textColor || "inherit",
        textAlign: textAlign || "center",
        fontSize: fontSize || "inherit",
        fontWeight: fontWeight || "inherit",
    };

    const breadcrumbStyle = {
        textAlign: textAlign || "center",
    };

    return (
        <section className={cn("breadcrumb-area", className)}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="breadcrumb-content"
                            style={breadcrumbStyle}
                        >
                            <h2 className="title leading-8" style={titleStyle}>
                                {title}
                            </h2>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>

                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                        style={{
                                            color: textColor || "inherit",
                                        }}
                                    >
                                        {subtitle}
                                    </li>
                                </ol>
                            </nav>
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

export default BreadcrumbArea;
