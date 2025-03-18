import { Head } from "@inertiajs/react";
import { useState, useEffect, Suspense, lazy } from "react";
import React from "react";
import Layout from "../layouts/Layout";

const BreadcrumbArea = lazy(() =>
    import("../components/BreadcrumbArea/BreadcrumbArea")
);
const InnerContactArea = lazy(() =>
    import("../components/Contact/InnerContactArea")
);
const BrandAreaThree = lazy(() => import("../components/Brand/BrandAreaThree"));
const CommunityArea = lazy(() =>
    import("../components/CommunityArea/CommunityArea")
);
const NewsLetterAreaTwo = lazy(() =>
    import("../components/NewsLetter/NewsLetterAreaTwo")
);
const TeamAreaThree = lazy(() => import("../components/Team/TeamAreaThree"));
const AboutArea = lazy(() => import("../components/About/AboutArea"));
const BannerOne = lazy(() => import("../components/Banner/BannerOne"));
const ConsultationArea = lazy(() =>
    import("../components/Consultation/ConsultationArea")
);
const ProjectArea = lazy(() => import("../components/Project/ProjectArea"));
const ServicesArea = lazy(() =>
    import("../components/ServicesArea/ServicesArea")
);
const TeamArea = lazy(() => import("../components/Team/TeamArea"));
const TestimonialArea = lazy(() =>
    import("../components/Testimonial/TestimonialArea")
);
const BrandArea = lazy(() => import("../components/Brand/BrandArea"));
const ConsultationAreaTwo = lazy(() =>
    import("../components/Consultation/ConsultationAreaTwo")
);
const CounterAreaThree = lazy(() =>
    import("../components/CounterArea/CounterAreaThree")
);
const HistoryArea = lazy(() => import("../components/HistoryArea/HistoryArea"));
const InnerServicesArea = lazy(() =>
    import("../components/ServicesArea/InnerServicesArea")
);
const SuccessArea = lazy(() => import("../components/SuccessArea/SuccessArea"));
const TeamAreaTwo = lazy(() => import("../components/Team/TeamAreaTwo"));

const ComponentMap = {
    BreadcrumbArea,
    InnerContactArea,
    BrandAreaThree,
    CommunityArea,
    NewsLetterAreaTwo,
    TeamAreaThree,
    AboutArea,
    BannerOne,
    ConsultationArea,
    ProjectArea,
    ServicesArea,
    TeamArea,
    TestimonialArea,
    BrandArea,
    ConsultationAreaTwo,
    CounterAreaThree,
    HistoryArea,
    InnerServicesArea,
    SuccessArea,
    TeamAreaTwo,
};

const LoadingFallback = () => (
    <div className="component-loading-indicator">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
        <style jsx>{`
            .component-loading-indicator {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 200px;
            }
            .spinner {
                margin: 100px auto 0;
                width: 70px;
                text-align: center;
            }
            .spinner > div {
                width: 18px;
                height: 18px;
                background-color: #333;
                border-radius: 100%;
                display: inline-block;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                margin: 0 3px;
            }
            .spinner .bounce1 {
                animation-delay: -0.32s;
            }
            .spinner .bounce2 {
                animation-delay: -0.16s;
            }
            @keyframes sk-bouncedelay {
                0%,
                80%,
                100% {
                    transform: scale(0);
                }
                40% {
                    transform: scale(1);
                }
            }
        `}</style>
    </div>
);

const renderComponent = (component) => {
    if (!component || !component.type) return null;

    const ComponentToRender = ComponentMap[component.type];

    if (!ComponentToRender) {
        console.warn(`Component ${component.type} not found in ComponentMap`);
        return null;
    }

    const childrenComponents = component.children?.map(renderComponent) || [];

    return (
        <Suspense
            fallback={<LoadingFallback />}
            key={component.id || Math.random().toString(36)}
        >
            <ComponentToRender {...component.props}>
                {childrenComponents}
            </ComponentToRender>
        </Suspense>
    );
};

const DynamicPage = ({ page }) => {
    const [pageLoadTime, setPageLoadTime] = useState(null);

    useEffect(() => {
        const startTime = performance.now();

        return () => {
            const endTime = performance.now();
            setPageLoadTime(endTime - startTime);
            console.log(`Page rendering took: ${endTime - startTime}ms`);
        };
    }, [page.components]);

    return (
        <>
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

            {page.components && page.components.length > 0 ? (
                <Suspense
                    fallback={
                        <div className="page-loading">
                            Loading page content...
                        </div>
                    }
                >
                    <div className="dynamic-page-components">
                        {page.components.map(renderComponent)}
                    </div>
                </Suspense>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
            )}

            {process.env.NODE_ENV !== "production" && pageLoadTime && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 10,
                        right: 10,
                        background: "#f0f0f0",
                        padding: 8,
                        borderRadius: 4,
                        fontSize: 12,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        zIndex: 9999,
                    }}
                >
                    Page render time: {pageLoadTime.toFixed(2)}ms
                </div>
            )}
        </>
    );
};

DynamicPage.layout = (page) => (
    <Layout
        header={1}
        footer={1}
        className=""
        mainClassName=""
        children={page}
    />
);

export default DynamicPage;
