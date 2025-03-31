import * as React from "react";
import { useState } from "react";

const ComponentTypeOptions = [
    { value: "BreadcrumbArea", label: "Breadcrumb Area" },
    { value: "Gap", label: "Gap" },
    { value: "PopOver", label: "Pop Over" },
    { value: "TextBlockImage", label: "Text Block Image" },
    { value: "TextBlock", label: "Text Block" },
    { value: "ImagesNext", label: "Image List" },
    { value: "CounterAreaThree", label: "Counter Area" },
    { value: "HistoryArea", label: "History Area" },
    { value: "TestimonialArea", label: "Testimonial Area" },
    { value: "HeroArea", label: "Hero Area" },
    { value: "ImageBlock", label: "Image Block" },
    { value: "InnerContactArea", label: "Inner Contact Area" },
    { value: "BrandAreaThree", label: "Brand Area Three" },
    { value: "CommunityArea", label: "Community Area" },
    { value: "NewsLetterAreaTwo", label: "News Letter Area Two" },
    { value: "TeamAreaThree", label: "Team Area Three" },
    { value: "AboutArea", label: "About Area" },
    { value: "BannerOne", label: "Banner One" },
    { value: "ConsultationArea", label: "Consultation Area" },
    { value: "ProjectArea", label: "Project Area" },
    { value: "ServicesArea", label: "Services Area" },
    { value: "TeamArea", label: "Team Area" },
    { value: "BrandArea", label: "Brand Area" },
    { value: "ConsultationAreaTwo", label: "Consultation Area Two" },
    { value: "InnerServicesArea", label: "Inner Services Area" },
    { value: "SuccessArea", label: "Success Area" },
    { value: "TeamAreaTwo", label: "Team Area Two" },
    { value: "List", label: "List" },
    { value: "BackgroundImageHeader", label: "Background Image Header" },
];

const StyleEditor = ({ style, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Splitst padding en margin op in top, right, bottom, left voor eenvoudigere invoer
    const paddingValues = {
        top: style?.paddingTop || "",
        right: style?.paddingRight || "",
        bottom: style?.paddingBottom || "",
        left: style?.paddingLeft || "",
    };

    const marginValues = {
        top: style?.marginTop || "",
        right: style?.marginRight || "",
        bottom: style?.marginBottom || "",
        left: style?.marginLeft || "",
    };

    const styleOptions = {
        color: style?.color || "",
        backgroundColor: style?.backgroundColor || "",
        textAlign: style?.textAlign || "left",
        fontSize: style?.fontSize || "",
        fontWeight: style?.fontWeight || "",
        borderRadius: style?.borderRadius || "",
        border: style?.border || "",
        boxShadow: style?.boxShadow || "",
    };

    const fontWeightOptions = [
        { value: "", label: "Standaard" },
        { value: "300", label: "Light (300)" },
        { value: "400", label: "Regular (400)" },
        { value: "500", label: "Medium (500)" },
        { value: "600", label: "Semi-Bold (600)" },
        { value: "700", label: "Bold (700)" },
        { value: "800", label: "Extra Bold (800)" },
    ];

    const textAlignOptions = [
        { value: "left", label: "Links" },
        { value: "center", label: "Midden" },
        { value: "right", label: "Rechts" },
        { value: "justify", label: "Justify" },
    ];

    const handleStyleChange = (property, value) => {
        onChange({
            ...style,
            [property]: value,
        });
    };

    const handlePaddingChange = (position, value) => {
        onChange({
            ...style,
            [`padding${position.charAt(0).toUpperCase() + position.slice(1)}`]:
                value,
        });
    };

    const handleMarginChange = (position, value) => {
        onChange({
            ...style,
            [`margin${position.charAt(0).toUpperCase() + position.slice(1)}`]:
                value,
        });
    };

    return (
        <div className="mt-4 border border-gray-300 rounded-md p-3">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-md font-medium text-gray-700">
                    Styling opties
                </h4>
                <span>{isOpen ? "▼" : "►"}</span>
            </div>

            {isOpen && (
                <div className="mt-3 space-y-3">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* Tekstkleur */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Tekstkleur
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="color"
                                    value={styleOptions.color || "#000000"}
                                    onChange={(e) =>
                                        handleStyleChange(
                                            "color",
                                            e.target.value
                                        )
                                    }
                                    className="h-8 w-8 mr-2 rounded-md border border-gray-300"
                                />
                                <input
                                    type="text"
                                    value={styleOptions.color}
                                    onChange={(e) =>
                                        handleStyleChange(
                                            "color",
                                            e.target.value
                                        )
                                    }
                                    placeholder="#000000 of rgba(0,0,0,1)"
                                    className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Achtergrondkleur */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Achtergrondkleur
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="color"
                                    value={
                                        styleOptions.backgroundColor ||
                                        "#ffffff"
                                    }
                                    onChange={(e) =>
                                        handleStyleChange(
                                            "backgroundColor",
                                            e.target.value
                                        )
                                    }
                                    className="h-8 w-8 mr-2 rounded-md border border-gray-300"
                                />
                                <input
                                    type="text"
                                    value={styleOptions.backgroundColor}
                                    onChange={(e) =>
                                        handleStyleChange(
                                            "backgroundColor",
                                            e.target.value
                                        )
                                    }
                                    placeholder="#ffffff of rgba(255,255,255,1)"
                                    className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Tekst uitlijning */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Tekst uitlijning
                            </label>
                            <select
                                value={styleOptions.textAlign}
                                onChange={(e) =>
                                    handleStyleChange(
                                        "textAlign",
                                        e.target.value
                                    )
                                }
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {textAlignOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Font grootte */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Font grootte
                            </label>
                            <input
                                type="text"
                                value={styleOptions.fontSize}
                                onChange={(e) =>
                                    handleStyleChange(
                                        "fontSize",
                                        e.target.value
                                    )
                                }
                                placeholder="16px of 1rem"
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Font gewicht */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Font gewicht
                            </label>
                            <select
                                value={styleOptions.fontWeight}
                                onChange={(e) =>
                                    handleStyleChange(
                                        "fontWeight",
                                        e.target.value
                                    )
                                }
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {fontWeightOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Padding - Gebruiksvriendelijker gemaakt met vier invoervelden */}
                        <div className="col-span-2">
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Ruimte binnen (padding)
                            </label>
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Boven
                                    </label>
                                    <input
                                        type="text"
                                        value={paddingValues.top}
                                        onChange={(e) =>
                                            handlePaddingChange(
                                                "top",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Rechts
                                    </label>
                                    <input
                                        type="text"
                                        value={paddingValues.right}
                                        onChange={(e) =>
                                            handlePaddingChange(
                                                "right",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Onder
                                    </label>
                                    <input
                                        type="text"
                                        value={paddingValues.bottom}
                                        onChange={(e) =>
                                            handlePaddingChange(
                                                "bottom",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Links
                                    </label>
                                    <input
                                        type="text"
                                        value={paddingValues.left}
                                        onChange={(e) =>
                                            handlePaddingChange(
                                                "left",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Margin - Gebruiksvriendelijker gemaakt met vier invoervelden */}
                        <div className="col-span-2">
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Ruimte buiten (margin)
                            </label>
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Boven
                                    </label>
                                    <input
                                        type="text"
                                        value={marginValues.top}
                                        onChange={(e) =>
                                            handleMarginChange(
                                                "top",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Rechts
                                    </label>
                                    <input
                                        type="text"
                                        value={marginValues.right}
                                        onChange={(e) =>
                                            handleMarginChange(
                                                "right",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Onder
                                    </label>
                                    <input
                                        type="text"
                                        value={marginValues.bottom}
                                        onChange={(e) =>
                                            handleMarginChange(
                                                "bottom",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                        Links
                                    </label>
                                    <input
                                        type="text"
                                        value={marginValues.left}
                                        onChange={(e) =>
                                            handleMarginChange(
                                                "left",
                                                e.target.value
                                            )
                                        }
                                        placeholder="10px"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Border radius */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Afgeronde hoeken
                            </label>
                            <input
                                type="text"
                                value={styleOptions.borderRadius}
                                onChange={(e) =>
                                    handleStyleChange(
                                        "borderRadius",
                                        e.target.value
                                    )
                                }
                                placeholder="5px of 50%"
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Border */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Rand
                            </label>
                            <input
                                type="text"
                                value={styleOptions.border}
                                onChange={(e) =>
                                    handleStyleChange("border", e.target.value)
                                }
                                placeholder="1px solid #ffffff"
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Box shadow */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Schaduw
                            </label>
                            <input
                                type="text"
                                value={styleOptions.boxShadow}
                                onChange={(e) =>
                                    handleStyleChange(
                                        "boxShadow",
                                        e.target.value
                                    )
                                }
                                placeholder="0 0 10px rgba(0,0,0,0.5)"
                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ComponentEditor = ({
    component,
    index,
    updateComponent,
    removeComponent,
    moveComponent,
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const redirectToDashboard = () => {
        window.location.href = "/dashboard";
    };

    const handleStyleChange = (newStyle) => {
        updateComponent(index, {
            ...component,
            style: newStyle,
        });
    };

    const renderArrayOfObjects = (propKey, arrayValue, itemFields) => {
        if (!Array.isArray(arrayValue)) return null;

        return (
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                    {propKey}
                </label>
                <div className="space-y-3">
                    {arrayValue.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className="p-3 border border-gray-300 rounded-md bg-white"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                    Item {itemIndex + 1}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newItems = [...arrayValue];
                                        newItems.splice(itemIndex, 1);

                                        updateComponent(index, {
                                            ...component,
                                            props: {
                                                ...component.props,
                                                [propKey]: newItems,
                                            },
                                        });
                                    }}
                                    className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200 "
                                >
                                    Verwijderen
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                {itemFields.map((field) => (
                                    <div key={field} className="mb-2">
                                        <label className="block mb-1 text-xs font-medium text-gray-500">
                                            {field}
                                        </label>
                                        {Array.isArray(item[field]) ? (
                                            <textarea
                                                value={(item[field] || []).join(
                                                    "\n"
                                                )}
                                                onChange={(e) => {
                                                    const newItems = [
                                                        ...arrayValue,
                                                    ];
                                                    newItems[itemIndex] = {
                                                        ...newItems[itemIndex],
                                                        [field]: e.target.value
                                                            .split("\n")
                                                            .filter(
                                                                (i) =>
                                                                    i.trim() !==
                                                                    ""
                                                            ),
                                                    };

                                                    updateComponent(index, {
                                                        ...component,
                                                        props: {
                                                            ...component.props,
                                                            [propKey]: newItems,
                                                        },
                                                    });
                                                }}
                                                rows="2"
                                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={item[field] || ""}
                                                onChange={(e) => {
                                                    const newItems = [
                                                        ...arrayValue,
                                                    ];
                                                    newItems[itemIndex] = {
                                                        ...newItems[itemIndex],
                                                        [field]: e.target.value,
                                                    };

                                                    updateComponent(index, {
                                                        ...component,
                                                        props: {
                                                            ...component.props,
                                                            [propKey]: newItems,
                                                        },
                                                    });
                                                }}
                                                className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => {
                        const newItem = {};
                        itemFields.forEach((field) => {
                            newItem[field] = Array.isArray(
                                arrayValue[0]?.[field]
                            )
                                ? []
                                : "";
                        });

                        updateComponent(index, {
                            ...component,
                            props: {
                                ...component.props,
                                [propKey]: [...arrayValue, newItem],
                            },
                        });
                    }}
                    className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
                >
                    Nieuw Item Toevoegen
                </button>
            </div>
        );
    };

    const renderGenericFields = () => {
        const { props } = component;

        if (!props) return null;

        return (
            <div className="mt-3">
                <div className="space-y-4">
                    {Object.keys(props).map((propKey) => {
                        const propValue = props[propKey];
                        const propType = typeof propValue;

                        if (propType === "string" || propType === "number") {
                            return (
                                <div className="mb-4" key={propKey}>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        {propKey}
                                    </label>
                                    <input
                                        type={
                                            propType === "number"
                                                ? "number"
                                                : "text"
                                        }
                                        value={propValue}
                                        onChange={(e) => {
                                            const newValue =
                                                propType === "number"
                                                    ? parseFloat(e.target.value)
                                                    : e.target.value;

                                            updateComponent(index, {
                                                ...component,
                                                props: {
                                                    ...props,
                                                    [propKey]: newValue,
                                                },
                                            });
                                        }}
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            );
                        } else if (propType === "boolean") {
                            return (
                                <div
                                    className="mb-4 flex items-center"
                                    key={propKey}
                                >
                                    <input
                                        type="checkbox"
                                        id={`${component.type}-${propKey}-${index}`}
                                        checked={propValue}
                                        onChange={(e) => {
                                            updateComponent(index, {
                                                ...component,
                                                props: {
                                                    ...props,
                                                    [propKey]: e.target.checked,
                                                },
                                            });
                                        }}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-700 rounded bg-gray-800"
                                    />
                                    <label
                                        htmlFor={`${component.type}-${propKey}-${index}`}
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        {propKey}
                                    </label>
                                </div>
                            );
                        } else if (
                            Array.isArray(propValue) &&
                            propValue.every((item) => typeof item !== "object")
                        ) {
                            return (
                                <div className="mb-4" key={propKey}>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        {propKey} (comma gescheiden)
                                    </label>
                                    <textarea
                                        value={(propValue || []).join(",")}
                                        onChange={(e) => {
                                            const newItems = e.target.value
                                                .split(",")
                                                .filter(
                                                    (item) => item.trim() !== ""
                                                );

                                            updateComponent(index, {
                                                ...component,
                                                props: {
                                                    ...props,
                                                    [propKey]: newItems,
                                                },
                                            });
                                        }}
                                        rows="3"
                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            );
                        } else if (
                            Array.isArray(propValue) &&
                            propValue.length > 0 &&
                            typeof propValue[0] === "object"
                        ) {
                            const itemFields = propValue[0]
                                ? Object.keys(propValue[0])
                                : [];

                            return renderArrayOfObjects(
                                propKey,
                                propValue,
                                itemFields
                            );
                        } else if (
                            propType === "object" &&
                            propValue !== null &&
                            !Array.isArray(propValue)
                        ) {
                            return (
                                <div
                                    className="mb-4 border border-gray-300 rounded-md p-3"
                                    key={propKey}
                                >
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        {propKey}
                                    </label>

                                    {Object.keys(propValue).map((objKey) => {
                                        const objValue = propValue[objKey];
                                        const objValueType = typeof objValue;

                                        if (
                                            objValueType === "string" ||
                                            objValueType === "number"
                                        ) {
                                            return (
                                                <div
                                                    className="mb-2"
                                                    key={objKey}
                                                >
                                                    <label className="block mb-1 text-xs font-medium text-gray-500">
                                                        {objKey}
                                                    </label>
                                                    <input
                                                        type={
                                                            objValueType ===
                                                            "number"
                                                                ? "number"
                                                                : "text"
                                                        }
                                                        value={objValue}
                                                        onChange={(e) => {
                                                            const newObjValue =
                                                                objValueType ===
                                                                "number"
                                                                    ? parseFloat(
                                                                          e
                                                                              .target
                                                                              .value
                                                                      )
                                                                    : e.target
                                                                          .value;

                                                            updateComponent(
                                                                index,
                                                                {
                                                                    ...component,
                                                                    props: {
                                                                        ...props,
                                                                        [propKey]:
                                                                            {
                                                                                ...propValue,
                                                                                [objKey]:
                                                                                    newObjValue,
                                                                            },
                                                                    },
                                                                }
                                                            );
                                                        }}
                                                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            );
                                        }

                                        if (objValueType === "boolean") {
                                            return (
                                                <div
                                                    className="mb-2 flex items-center"
                                                    key={objKey}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`${component.type}-${propKey}-${objKey}-${index}`}
                                                        checked={objValue}
                                                        onChange={(e) => {
                                                            updateComponent(
                                                                index,
                                                                {
                                                                    ...component,
                                                                    props: {
                                                                        ...props,
                                                                        [propKey]:
                                                                            {
                                                                                ...propValue,
                                                                                [objKey]:
                                                                                    e
                                                                                        .target
                                                                                        .checked,
                                                                            },
                                                                    },
                                                                }
                                                            );
                                                        }}
                                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-700 rounded bg-gray-800"
                                                    />
                                                    <label
                                                        htmlFor={`${component.type}-${propKey}-${objKey}-${index}`}
                                                        className="ml-2 block text-xs text-gray-500"
                                                    >
                                                        {objKey}
                                                    </label>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div className="mb-2" key={objKey}>
                                                <label className="block mb-1 text-xs font-medium text-gray-500">
                                                    {objKey}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={JSON.stringify(
                                                        objValue
                                                    )}
                                                    onChange={(e) => {
                                                        try {
                                                            const newValue =
                                                                JSON.parse(
                                                                    e.target
                                                                        .value
                                                                );
                                                            updateComponent(
                                                                index,
                                                                {
                                                                    ...component,
                                                                    props: {
                                                                        ...props,
                                                                        [propKey]:
                                                                            {
                                                                                ...propValue,
                                                                                [objKey]:
                                                                                    newValue,
                                                                            },
                                                                    },
                                                                }
                                                            );
                                                        } catch (error) {}
                                                    }}
                                                    className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        }

                        return (
                            <div className="mb-4" key={propKey}>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    {propKey}
                                </label>
                                <p className="mb-2 text-xs text-gray-500">
                                    Complexe waarde - klik om te bewerken
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        alert(
                                            `Bewerk ${propKey} via "Toon JSON" onderaan`
                                        );
                                    }}
                                    className="px-3 py-1 text-sm text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Bewerken
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderFields = () => {
        const { type, props } = component;

        if (!isExpanded) return null;

        if (type === "TestimonialArea" || type === "BrandAreaThree") {
            return (
                <div className="mt-3">
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Titel
                        </label>
                        <input
                            type="text"
                            value={props.title || ""}
                            onChange={(e) =>
                                updateComponent(index, {
                                    ...component,
                                    props: {
                                        ...props,
                                        title: e.target.value,
                                    },
                                })
                            }
                            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Subtitel
                        </label>
                        <input
                            type="text"
                            value={
                                type === "TestimonialArea"
                                    ? props.subTitle || ""
                                    : props.subtitle || ""
                            }
                            onChange={(e) =>
                                updateComponent(index, {
                                    ...component,
                                    props: {
                                        ...props,
                                        [type === "TestimonialArea"
                                            ? "subTitle"
                                            : "subtitle"]: e.target.value,
                                    },
                                })
                            }
                            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="button"
                            onClick={redirectToDashboard}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Ga naar referen ietms
                        </button>
                    </div>
                </div>
            );
        } else if (type === "BreadcrumbArea") {
            return (
                <div className="mt-3">
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Titel
                        </label>
                        <input
                            type="text"
                            value={props.title || ""}
                            onChange={(e) =>
                                updateComponent(index, {
                                    ...component,
                                    props: {
                                        ...props,
                                        title: e.target.value,
                                    },
                                })
                            }
                            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Subtitel
                        </label>
                        <input
                            type="text"
                            value={props.subtitle || ""}
                            onChange={(e) =>
                                updateComponent(index, {
                                    ...component,
                                    props: {
                                        ...props,
                                        subtitle: e.target.value,
                                    },
                                })
                            }
                            className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            );
        }

        return renderGenericFields();
    };

    return (
        <div className="mb-4 p-4 border border-gray-300 rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mr-2 text-gray-500 focus:outline-none"
                    >
                        {isExpanded ? "▼" : "►"}
                    </button>
                    <h3 className="text-lg font-medium text-gray-800">
                        {ComponentTypeOptions.find(
                            (option) => option.value === component.type
                        )?.label || component.type}
                    </h3>
                </div>

                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => moveComponent(index, index - 1)}
                        disabled={index === 0}
                        className={`p-1 mr-1 text-gray-300 rounded hover:bg-gray-700 ${
                            index === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        ↑
                    </button>
                    <button
                        type="button"
                        onClick={() => moveComponent(index, index + 1)}
                        className="p-1 mr-1 text-gray-300 rounded hover:bg-gray-700"
                    >
                        ↓
                    </button>
                </div>
            </div>

            {renderFields()}

            <StyleEditor
                style={component.style || {}}
                onChange={handleStyleChange}
            />
        </div>
    );
};

/**
 * Get a human-readable description of a component based on its type and properties
 */
const getComponentDescription = (component) => {
    if (!component) return "";

    switch (component.type) {
        case "TextBlock":
            return component.props.title || "Text block";
        case "ImageBlock":
            return component.props.text || "Image block";
        case "TextBlockImage":
            return component.props.title || "Text with image";
        case "BreadcrumbArea":
            return component.props.title || "Breadcrumb area";
        case "TestimonialArea":
            return component.props.title || "Testimonials";
        case "BrandAreaThree":
            return component.props.title || "Brand section";
        case "PopOver":
            return component.props.title || "Pop over";
        case "ImagesNext":
            return `Image gallery (${
                component.props.images?.length || 0
            } images)`;
        case "List":
            return `List (${component.props.items?.length || 0} items)`;
        case "Gap":
            return `Spacer (${component.props.height || 0}px)`;
        case "BackgroundImageHeader":
            return component.props.title || "Background header";
        default:
            return component.type;
    }
};

const PageComponentEditor = ({ value, onChange, height }) => {
    const [components, setComponents] = useState(value || []);
    const [showJSON, setShowJSON] = useState(false);
    const [newComponentType, setNewComponentType] = useState(
        ComponentTypeOptions[0]?.value || ""
    );
    const [editingComponentIndex, setEditingComponentIndex] = useState(null);

    const handleEditComponentClick = (index) => {
        setEditingComponentIndex(index);
    };

    const handleDeleteComponentClick = (index) => {
        if (confirm("Weet je zeker dat je dit component wilt verwijderen?")) {
            removeComponent(index);
        }
    };

    const updateComponent = (index, updatedComponent) => {
        const newComponents = [...components];
        newComponents[index] = updatedComponent;
        setComponents(newComponents);
        onChange(newComponents);
    };

    const removeComponent = (index) => {
        const newComponents = [...components];
        newComponents.splice(index, 1);
        setComponents(newComponents);
        onChange(newComponents);
    };

    const moveComponent = (fromIndex, toIndex) => {
        if (toIndex < 0 || toIndex >= components.length) return;

        const newComponents = [...components];
        const [movedItem] = newComponents.splice(fromIndex, 1);
        newComponents.splice(toIndex, 0, movedItem);

        setComponents(newComponents);
        onChange(newComponents);
    };

    const addComponent = () => {
        if (!newComponentType) return;

        let defaultProps = { title: "" };

        if (newComponentType === "BreadcrumbArea") {
            defaultProps = {
                title: "Nieuwe Sectie",
                subtitle: "Ondertitel",
                className: "breadcrumb-area-four pt-175 pb-160",
                showShape: false,
                showShapeThree: true,
            };
        } else if (newComponentType === "TestimonialArea") {
            defaultProps = {
                title: "Wij werken voor",
                subTitle: "Referenties",
            };
        } else if (newComponentType === "BrandAreaThree") {
            defaultProps = {
                title: "Nieuwe Brand Sectie",
                subtitle: "Onze Partners",
            };
        } else if (newComponentType === "TextBlock") {
            defaultProps = {
                title: "",
                text: "",
            };
        } else if (newComponentType === "ImageBlock") {
            defaultProps = {
                img: "",
                text: "",
                width: "",
                height: "",
            };
        } else if (newComponentType === "PopOver") {
            defaultProps = {
                message: "",
                title: "",
            };
        } else if (newComponentType === "TextBlockImage") {
            defaultProps = {
                title: "",
                text: "",
                image: "",
                imageAlt: "",
                imageCaption: "",
                photographer: "",
                reversed: false,
            };
        } else if (newComponentType === "ImagesNext") {
            defaultProps = {
                images: [],
                Width: "",
                Height: "",
            };
        } else if (newComponentType === "List") {
            defaultProps = {
                items: [],
            };
        } else if (newComponentType === "Gap") {
            defaultProps = {
                height: 8,
            };
        } else if (newComponentType === "BackgroundImageHeader") {
            defaultProps = {
                title: "",
                subtitle: "",
                backgroundImage: [],
            };
        }
        const newComponent = {
            type: newComponentType,
            props: defaultProps,
            style: {},
        };

        const newComponents = [...components, newComponent];
        setComponents(newComponents);
        onChange(newComponents);
    };

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    Pagina Componenten
                </h3>
                <div className="flex space-x-2">
                    <select
                        value={newComponentType}
                        onChange={(e) => setNewComponentType(e.target.value)}
                        className="px-3 py-1.5 text-sm font-medium rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
                    >
                        {ComponentTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        onClick={addComponent}
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
                    >
                        <svg
                            className="-ml-0.5 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Component Toevoegen
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-md shadow-sm">
                {components.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-600">
                            Geen componenten toegevoegd
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Voeg je eerste component toe om te beginnen met het
                            bouwen van je pagina.
                        </p>
                    </div>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {components.map((component, index) => (
                            <li
                                key={index}
                                className="p-4 hover:bg-gray-50 transition-colors duration-150"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-800">
                                                {component.type} {index + 1}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {getComponentDescription(
                                                    component
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleEditComponentClick(index)
                                            }
                                            className="inline-flex items-center px-2 py-1 text-sm font-medium rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
                                        >
                                            Bewerken
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDeleteComponentClick(
                                                    index
                                                )
                                            }
                                            className="inline-flex items-center px-2 py-1 text-sm font-medium rounded-md bg-white text-red-600 border border-gray-300 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-150"
                                        >
                                            Verwijderen
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {editingComponentIndex !== null && (
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Component Bewerken
                        </h3>
                        <button
                            type="button"
                            onClick={() => setEditingComponentIndex(null)}
                            className="inline-flex items-center px-2 py-1 text-sm font-medium rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
                        >
                            Sluiten
                        </button>
                    </div>
                    <ComponentEditor
                        component={components[editingComponentIndex]}
                        index={editingComponentIndex}
                        updateComponent={updateComponent}
                        removeComponent={removeComponent}
                        moveComponent={moveComponent}
                    />
                </div>
            )}
        </div>
    );
};

export default PageComponentEditor;
