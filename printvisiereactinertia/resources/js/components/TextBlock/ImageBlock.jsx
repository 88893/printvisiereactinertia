import React from "react";

const ImageBlock = ({ img, text = "", width = 384, height = 256 }) => {
    const imageStyle = {
        width: typeof width === "number" ? `${width}px` : `${width}px`,
        height: typeof height === "number" ? `${height}px` : `${height}px`,
    };

    return (
        <div className="flex flex-col items-center max-w-full mx-auto p-3 mt-3">
            <div className="flex justify-center w-full mb-4">
                <img
                    src={img}
                    alt={text}
                    style={imageStyle}
                    className="object-cover rounded-lg shadow-md hover:transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {text && (
                <div className="text-center">
                    <p className="m-0 leading-relaxed text-gray-700">{text}</p>
                </div>
            )}
        </div>
    );
};

export default ImageBlock;
