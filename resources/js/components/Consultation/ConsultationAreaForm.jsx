import React, { useState, useEffect } from "react";

const ConsultationAreaForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "",
    });
    const siteKey = "6LeiEfIqAAAAAN8JCu5LMx2Hv-YkvuuYVuRw9sRB";

    useEffect(() => {
        const loadRecaptchaScript = () => {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        };

        if (!window.grecaptcha) {
            loadRecaptchaScript();
        }
    }, []);

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ ...notification, show: false });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const formValues = Object.fromEntries(formData.entries());

            setNotification({
                show: true,
                message: "Bezig met verzenden...",
                type: "info",
            });

            if (!window.grecaptcha) {
                throw new Error("reCAPTCHA not loaded");
            }

            await new Promise((resolve) => {
                window.grecaptcha.ready(async () => {
                    try {
                        const token = await window.grecaptcha.execute(siteKey, {
                            action: "submit",
                        });

                        console.log("Form data:", formValues);
                        console.log("Captcha token:", token);

                        await new Promise((r) => setTimeout(r, 1000));

                        setNotification({
                            show: true,
                            message: "Formulier succesvol verzonden!",
                            type: "success",
                        });

                        e.target.reset();
                        resolve();
                    } catch (error) {
                        throw error;
                    }
                });
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setNotification({
                show: true,
                message:
                    "Er is een fout opgetreden bij het verzenden van het formulier.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="consultation-form-wrap">
            <h4 className="title">Snel en Eenvoudig: Vraag een Offerte aan</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-grp">
                    <input
                        type="text"
                        name="naam"
                        placeholder="Naam"
                        required
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="email"
                        name="email"
                        placeholder="Emailadres"
                        required
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        name="telefoon"
                        placeholder="Telefoonnummer"
                        required
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        name="vraag"
                        placeholder="Beschrijf hier jouw vraag"
                    />
                </div>
                <div className="recaptcha-terms">
                    <small>
                        Deze site is beschermd door reCAPTCHA en de
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Google Privacy Policy
                        </a>{" "}
                        en
                        <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Terms of Service
                        </a>{" "}
                        zijn van toepassing.
                    </small>
                </div>
                <button
                    className="btn"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                    }}
                >
                    {isSubmitting ? "Bezig met verzenden..." : "Verzenden"}
                </button>
            </form>

            {notification.show && (
                <div
                    className={`notification-popup ${notification.type}`}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        padding: "15px 20px",
                        borderRadius: "4px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        zIndex: 1000,
                        maxWidth: "300px",
                        backgroundColor:
                            notification.type === "success"
                                ? "#4CAF50"
                                : notification.type === "error"
                                ? "#F44336"
                                : "#2196F3",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        animation: "slideIn 0.3s ease-out",
                    }}
                >
                    <span>{notification.message}</span>
                    <button
                        onClick={() =>
                            setNotification({ ...notification, show: false })
                        }
                        style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            marginLeft: "10px",
                            fontSize: "16px",
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Add CSS for animation */}
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default ConsultationAreaForm;
