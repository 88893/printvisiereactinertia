import React from "react";

const List = ({ items = [], iconColor = "black", textColor = "#374151" }) => {
    return (
        <div className="flex justify-center w-full max-w-2xl mx-auto">
            <ul className="inline-block space-y-3" style={{ fontSize: "16px" }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center"
                        style={{ fontSize: "16px" }}
                    >
                        <div
                            className="flex-shrink-0 w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: iconColor }}
                        ></div>

                        <span style={{ fontSize: "16px", color: textColor }}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
