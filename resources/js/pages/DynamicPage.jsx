import { Head } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
import React from "react";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";
import Layout from "../../layouts/Layout";
import { Link } from "@inertiajs/react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import HistoryAreaRoadmap from "../../components/HistoryArea/HistoryAreaRoadmap";

export default function DynamicPage({ page }) {
    // Add custom imports to the head
    useEffect(() => {
        // Add custom imports to head
        if (page.imports) {
            const headElement = document.head;
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = page.imports;

            const elements = tempDiv.children;
            const importedElements = [];

            // Add all the import elements to the head
            while (elements.length > 0) {
                const element = elements[0];
                headElement.appendChild(element);
                importedElements.push(element);
            }

            // Cleanup function to remove imports when component unmounts
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
                // Clean up script when component unmounts
                const elements = document.getElementsByClassName(
                    "dynamic-page-script"
                );
                while (elements.length > 0) {
                    elements[0].parentNode.removeChild(elements[0]);
                }
            };
        }
    }, [page.scripts]);

    // Dynamically set the HTML content
    const createMarkup = () => {
        return { __html: page.content };
    };

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

            <div>
                <div
                    className="dynamic-page-content"
                    dangerouslySetInnerHTML={createMarkup()}
                />
            </div>
        </>
    );
}
