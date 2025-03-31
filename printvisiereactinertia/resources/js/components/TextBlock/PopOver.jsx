import React, { useState, useEffect, useRef } from "react";

const PopOver = ({
    message = "Notification message",
    title = "",
    type = "info",
    duration = 9000,
    showIcon = true,
    isVisible = true,
    onClose = () => {},
}) => {
    const [visible, setVisible] = useState(isVisible);
    const timerRef = useRef(null);

    useEffect(() => {
        setVisible(isVisible);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        if (isVisible && duration > 0) {
            timerRef.current = setTimeout(() => {
                setVisible(false);
                onClose();
            }, duration);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isVisible, duration]);

    const animationClass = visible ? "animate-slideIn" : "animate-slideOut";

    const typeStyles = {
        info: {
            bgColor: "bg-pink-500 bg-opacity-90",
            textColor: "text-white",
            icon: "i-info-circle",
        },
    };

    const style = typeStyles[type] || typeStyles.info;

    if (!visible) return null;

    return (
        <div className={`fixed right-4 bottom-6 z-50 ${animationClass}`}>
            <div
                className={`rounded-lg shadow-lg px-4 py-7 ${style.bgColor} max-w-xs`}
            >
                <div className="flex items-start">
                    {showIcon && (
                        <div className="flex-shrink-0 mr-3">
                            <span className="text-xl">
                                {type === "info" && "ℹ️"}
                            </span>
                        </div>
                    )}

                    <div className="flex-1">
                        {title && (
                            <h3
                                className={`font-bold text-base ${style.textColor} drop-shadow-sm`}
                            >
                                {title}
                            </h3>
                        )}
                        <p
                            className={`text-sm ${style.textColor} drop-shadow-sm`}
                        >
                            {message}
                        </p>
                    </div>

                    <button
                        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                        onClick={() => {
                            setVisible(false);
                            onClose();
                        }}
                    >
                        ×
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes slideOut {
                    from {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                }

                .animate-slideIn {
                    animation: slideIn 0.3s ease forwards;
                }

                .animate-slideOut {
                    animation: slideOut 0.3s ease forwards;
                }
            `}</style>
        </div>
    );
};

export default PopOver;
