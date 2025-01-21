import React from "react";

const InnerContactInfo = () => {
    const info_items = [
        {
            src: "/img/icon/loction_icon03.png",
            title: "Adres",
            desc: (
                <>
                    <p>Aristotelesstraat 20 3076BD Rotterdam</p>
                </>
            ),
        },
        {
            src: "/img/icon/mail_icon03.png",
            title: "E-mail",
            desc: (
                <>
                    <a href="info@printvisie.nl">info@printvisie.nl</a>
                </>
            ),
        },
        {
            src: "/img/icon/phone_icon03.png",
            title: "Address",
            desc: (
                <>
                    <a href="tel:0123456789">010 - 4 198 880</a>
                </>
            ),
        },
    ];

    return (
        <ul className="list-wrap">
            {info_items.map((x, index) => (
                <li key={index}>
                    <div className="contact-info-item">
                        <div className="icon">
                            <img src={x.src} alt="" />
                        </div>
                        <div className="content">
                            <h6 className="title">{x.title}</h6>
                            {x.desc}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default InnerContactInfo;
