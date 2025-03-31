import React from "react";

const InnerContactInfo = ({ info_items = [] }) => {
    return (
        <ul className="list-wrap">
            {info_items.map((x, index) => {
                const renderDesc = () => {
                    if (typeof x.desc === "string") {
                        if (x.desc.includes("@")) {
                            return <a href={`mailto:${x.desc}`}>{x.desc}</a>;
                        } else if (/\d{3}[\s-]\d+/.test(x.desc)) {
                            return (
                                <a href={`tel:${x.desc.replace(/\s|-/g, "")}`}>
                                    {x.desc}
                                </a>
                            );
                        }
                        return <p>{x.desc}</p>;
                    }
                    return x.desc;
                };

                return (
                    <li key={index}>
                        <div className="contact-info-item">
                            <div className="icon">
                                <img src={x.src} alt="" />
                            </div>
                            <div className="content">
                                <h6 className="title">{x.title}</h6>
                                {renderDesc()}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default InnerContactInfo;
