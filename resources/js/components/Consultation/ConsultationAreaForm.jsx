import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ConsultationAreaForm = () => {
    const [captchaValidated, setCaptchaValidated] = useState(false);

    const handleCaptchaChange = (value) => {
        if (value) {
            setCaptchaValidated(true);
        } else {
            setCaptchaValidated(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValidated) {
            alert("Verifieer dat je geen robot bent!");
            return;
        }
        alert("Formulier succesvol verzonden!");
    };

    return (
        <div className="consultation-form-wrap">
            <h4 className="title">Snel en Eenvoudig: Vraag een Offerte aan</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-grp">
                    <input type="text" placeholder="naam" required />
                </div>
                <div className="form-grp">
                    <input type="email" placeholder="Emailadres" required />
                </div>
                <div className="form-grp">
                    <input type="text" placeholder="Telefoonnummer" required />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        placeholder="Beschrijf hier jouw vraag"
                    />
                </div>
                <div className="form-grp">
                    <ReCAPTCHA
                        sitekey="PRINTVISIE-KEY"
                        onChange={handleCaptchaChange}
                    />
                </div>
                <button
                    className="btn"
                    type="submit"
                    disabled={!captchaValidated}
                >
                    Verzenden
                </button>
            </form>
        </div>
    );
};

export default ConsultationAreaForm;
