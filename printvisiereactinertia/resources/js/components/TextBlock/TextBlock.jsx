import React from "react";

const TextBlock = ({
    text,
    title,
    textColor,
    textAlign,
    fontSize,
    fontWeight,
}) => {
    // Stel standaard stijlen in, maar gebruik de aangepaste stijlen als ze beschikbaar zijn
    const titleStyle = {
        fontSize: fontSize || "30px",
        fontWeight: fontWeight || "600",
        color: textColor || "#ec4899", // roze-500
        textAlign: textAlign || "left",
    };

    const textStyle = {
        fontSize: fontSize || "16px",
        fontWeight: fontWeight || "normal",
        color: textColor || "#374151", // gray-700
        textAlign: textAlign || "left",
    };

    return (
        <div
            className="flex flex-col items-center justify-center max-w-2xl mx-auto"
            style={{ width: "100%" }}
        >
            {title && (
                <h3
                    className="text-3xl font-semibold mb-3 mt-8 px-4"
                    style={titleStyle}
                >
                    {title}
                </h3>
            )}
            {text && (
                <p className="leading-relaxed px-4" style={textStyle}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default TextBlock;
