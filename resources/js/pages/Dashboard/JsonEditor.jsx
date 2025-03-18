import React, { useRef, useEffect, useState } from "react";

const JsonEditor = ({ value, onChange, height = "300px" }) => {
    const [editorValue, setEditorValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const textareaRef = useRef(null);

    useEffect(() => {
        try {
            const formatted = JSON.stringify(value, null, 2);
            setEditorValue(formatted);
            setIsValid(true);
        } catch (error) {
            console.error("Error formatting JSON:", error);
            setEditorValue(typeof value === "string" ? value : "");
            setIsValid(false);
        }
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setEditorValue(newValue);

        try {
            const parsed = JSON.parse(newValue);
            onChange(parsed);
            setIsValid(true);
        } catch (error) {
            setIsValid(false);
        }
    };

    return (
        <div className="json-editor-container">
            <div
                className={`relative border ${
                    isValid ? "border-gray-300" : "border-red-500"
                } rounded-md`}
            >
                <textarea
                    ref={textareaRef}
                    value={editorValue}
                    onChange={handleChange}
                    className="w-full p-3 font-mono text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    style={{
                        height,
                        resize: "vertical",
                        lineHeight: "1.5",
                        tabSize: 2,
                    }}
                    spellCheck="false"
                ></textarea>

                <div className="absolute flex space-x-2 top-2 right-2">
                    <button
                        type="button"
                        onClick={() => {
                            try {
                                const formatted = JSON.stringify(
                                    JSON.parse(editorValue),
                                    null,
                                    2
                                );
                                setEditorValue(formatted);
                                onChange(JSON.parse(formatted));
                                setIsValid(true);
                            } catch (error) {}
                        }}
                        className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded hover:bg-blue-200"
                        title="Format JSON"
                    >
                        Format
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2 text-sm">
                <div>
                    {isValid ? (
                        <span className="text-green-600">✓ Valid JSON</span>
                    ) : (
                        <span className="text-red-600">✗ Invalid JSON</span>
                    )}
                </div>

                <div className="text-gray-500">
                    Edit the JSON content directly. Format button will help
                    organize your code.
                </div>
            </div>
        </div>
    );
};

export default JsonEditor;
