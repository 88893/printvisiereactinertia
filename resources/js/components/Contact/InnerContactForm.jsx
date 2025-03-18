import React from "react";

const InnerContactForm = () => {
    return (
        <form action="#">
            <div className="form-grp">
                <label htmlFor="name">
                    <i className="fas fa-user"></i>
                </label>
                <input type="text" id="name" placeholder="Naam" />
            </div>
            <div className="form-grp">
                <label htmlFor="phone">
                    <i className="fas fa-phone"></i>
                </label>
                <input type="text" id="phone" placeholder="Telefoonnummer" />
            </div>
            <div className="form-grp">
                <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                </label>
                <input type="email" id="email" placeholder="Emailadres" />
            </div>
            <div className="form-grp">
                <label htmlFor="subject">
                    <i className="fas fa-book-alt"></i>
                </label>
                <input type="text" id="subject" placeholder="Bedrijfsnaam" />
            </div>
            <div className="form-grp">
                <label htmlFor="comment">
                    <i className="fas fa-user-edit"></i>
                </label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Beschrijf jouw drukwerk idee of vraag"
                ></textarea>
            </div>
            <button type="submit" className="btn">
                Verzenden <span></span>
            </button>
        </form>
    );
};

export default InnerContactForm;
