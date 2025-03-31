import React from "react";

const TextBlockImage = ({
    title,
    text,
    image,
    imageAlt = "",
    imageCaption = "",
    photographer = "",
    reversed = false,
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto p-5 my-8">
            {/* Image container */}
            <div
                className={`w-full md:w-1/2 ${
                    reversed ? "md:order-2" : "md:order-1"
                }`}
            >
                <div className="relative">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                    {imageCaption && (
                        <div className="mt-2 text-sm text-gray-600 italic">
                            {imageCaption}
                        </div>
                    )}
                    {photographer && (
                        <div className="mt-1 text-sm text-gray-500">
                            Foto: {photographer}
                        </div>
                    )}
                </div>
            </div>

            {/* Text container */}
            <div
                className={`w-full md:w-1/2 ${
                    reversed ? "md:order-1" : "md:order-2"
                }`}
            >
                {title && (
                    <h2
                        className="text-3xl font-semibold mb-4"
                        style={titleStyle}
                    >
                        {title}
                    </h2>
                )}
                {text && (
                    <div style={{ textAlign: textAlign || "left" }}>
                        {typeof text === "string" ? (
                            <p className="leading-relaxed" style={textStyle}>
                                {text}
                            </p>
                        ) : (
                            text
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextBlockImage;
