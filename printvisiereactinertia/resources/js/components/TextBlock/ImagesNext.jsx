import React from "react";

/**
 * ImagesNext component - displays multiple images in a row using Tailwind CSS
 *
 * @param {Object} props
 * @param {Array|string} props.images - Array of image paths or objects with src property, or comma-separated string
 * @param {string} props.defaultWidth - Default width for all images
 * @param {string} props.defaultHeight - Default height for all images
 * @param {string} props.gap - Gap between images
 * @param {string} props.alignment - Alignment of images ("center", "left", "right")
 */
const ImagesNext = ({
    images = [],
    Width = "120px",
    Height = "120px",
    gap = "16px",
    alignment = "center",
}) => {
    // Process images depending on the format
    let processedImages = [];

    if (typeof images === "string") {
        // Split the comma-separated string into an array
        processedImages = images.split(",").map((path) => ({
            src: path.trim(),
        }));
    } else if (Array.isArray(images)) {
        processedImages = images
            .map((image) => {
                if (typeof image === "string") {
                    // Check if this string might contain comma-separated paths
                    if (image.includes(",")) {
                        // Split and trim paths
                        return image
                            .split(",")
                            .map((path) => ({ src: path.trim() }));
                    }
                    // Single path string
                    return { src: image.trim() };
                }
                // Already an object
                return image;
            })
            .flat();
    }

    // Determine alignment class based on the alignment prop
    const alignmentClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
    };

    const alignClass = alignmentClasses[alignment] || "justify-center";

    return (
        <div
            className={`flex flex-wrap ${alignClass} items-center w-full p-4`}
            style={{ gap }}
        >
            {processedImages.map((image, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 transform transition-transform duration-200 hover:scale-105"
                >
                    <img
                        src={image.src}
                        alt=""
                        style={{
                            width: Width,
                            height: Height,
                            objectFit: "contain",
                        }}
                        className="rounded"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImagesNext;
