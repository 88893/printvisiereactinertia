import React from "react";

const ConsultationAreaForm = () => {
    return (
        <div className="consultation-form-wrap">
            <h4 className="title">Snel en Eenvoudig: Vraag een Offerte aan</h4>
            <form action="#">
                <div className="form-grp">
                    <input type="text" placeholder="naam" />
                </div>
                <div className="form-grp">
                    <input type="email" placeholder="Emailadres" />
                </div>
                <div className="form-grp">
                    <input type="text" placeholder="Telefoonnummer" />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        placeholder="Beschrijf hier jouw vraag"
                    />
                </div>
                <button className="btn" type="submit">
                    Verzenden
                </button>
            </form>
        </div>
    );
};

export default ConsultationAreaForm;
