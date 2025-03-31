import React from "react";

const ContactForm = () => {
    return (
        <div className="contact-form-wrap">
            <form action="#">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="text" placeholder="Naam" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="email" placeholder="Emailadres" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="text" placeholder="Telefoonnummer" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="text" placeholder="Bedrijfsnaam" />
                        </div>
                    </div>
                </div>
                <div className="form-grp">
                    <textarea
                        name="message"
                        placeholder="Beschrijf jouw idee of vraag"
                    ></textarea>
                </div>
                <button type="submit" className="btn">
                    Submit Now <span></span>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
