import * as React from "react";
import { useState } from "react";

const ComponentTypeOptions = [
    { value: "BreadcrumbArea", label: "Breadcrumb Area" },
    { value: "CounterAreaThree", label: "Counter Area" },
    { value: "HistoryArea", label: "History Area" },
    { value: "TestimonialArea", label: "Testimonial Area" },
    { value: "HeroArea", label: "Hero Area" },
    { value: "TextBlock", label: "Text Block" },
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
];

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

    const renderArrayOfObjects = (propKey, arrayValue, itemFields) => {
        if (!Array.isArray(arrayValue)) return null;

        return (
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-300">
                    {propKey}
                </label>
                <div className="space-y-3">
                    {arrayValue.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className="p-3 border border-zinc-700 rounded-md bg-zinc-800"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-300">
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
                                    className="inline-flex items-center rounded-md bg-zinc-400 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200 "
                                >
                                    Verwijderen
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                {itemFields.map((field) => (
                                    <div key={field} className="mb-2">
                                        <label className="block mb-1 text-xs font-medium text-gray-400">
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
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                    className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
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
                                    <label className="block mb-1 text-sm font-medium text-gray-300">
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
                                        className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                                        className="h-4 w-4 text-zinc-600 focus:ring-zinc-500 border-zinc-700 rounded bg-zinc-800"
                                    />
                                    <label
                                        htmlFor={`${component.type}-${propKey}-${index}`}
                                        className="ml-2 block text-sm text-gray-300"
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
                                    <label className="block mb-1 text-sm font-medium text-gray-300">
                                        {propKey} (één per regel)
                                    </label>
                                    <textarea
                                        value={(propValue || []).join("\n")}
                                        onChange={(e) => {
                                            const newItems = e.target.value
                                                .split("\n")
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
                                        className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                                    className="mb-4 border border-zinc-700 rounded-md p-3"
                                    key={propKey}
                                >
                                    <label className="block mb-2 text-sm font-medium text-gray-300">
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
                                                    <label className="block mb-1 text-xs font-medium text-gray-400">
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
                                                        className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                                                        className="h-4 w-4 text-zinc-600 focus:ring-zinc-500 border-zinc-700 rounded bg-zinc-800"
                                                    />
                                                    <label
                                                        htmlFor={`${component.type}-${propKey}-${objKey}-${index}`}
                                                        className="ml-2 block text-xs text-gray-400"
                                                    >
                                                        {objKey}
                                                    </label>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div className="mb-2" key={objKey}>
                                                <label className="block mb-1 text-xs font-medium text-gray-400">
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
                                                    className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        }

                        return (
                            <div className="mb-4" key={propKey}>
                                <label className="block mb-1 text-sm font-medium text-gray-300">
                                    {propKey}
                                </label>
                                <p className="mb-2 text-xs text-gray-400">
                                    Complexe waarde - klik om te bewerken
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        alert(
                                            `Bewerk ${propKey} via "Toon JSON" onderaan`
                                        );
                                    }}
                                    className="px-3 py-1 text-sm text-white bg-zinc-700 rounded hover:bg-zinc-600"
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
                        <label className="block mb-1 text-sm font-medium text-gray-300">
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
                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-300">
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
                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="button"
                            onClick={redirectToDashboard}
                            className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
                        <label className="block mb-1 text-sm font-medium text-gray-300">
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
                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-300">
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
                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                        />
                    </div>
                </div>
            );
        }

        return renderGenericFields();
    };

    return (
        <div className="p-6 mb-6 bg-[#1E1E1E] rounded-lg shadow-md border border-zinc-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mr-2 text-gray-500 focus:outline-none"
                    >
                        {isExpanded ? "▼" : "►"}
                    </button>
                    <h3 className="text-lg font-medium text-white">
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
                        className={`p-1 mr-1 text-gray-300 rounded hover:bg-zinc-700 ${
                            index === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        ↑
                    </button>
                    <button
                        type="button"
                        onClick={() => moveComponent(index, index + 1)}
                        className="p-1 mr-1 text-gray-300 rounded hover:bg-zinc-700"
                    >
                        ↓
                    </button>
                    <button
                        type="button"
                        onClick={() => removeComponent(index)}
                        className="inline-flex items-center rounded-md bg-zinc-400 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200 "
                    >
                        X
                    </button>
                </div>
            </div>

            {renderFields()}
        </div>
    );
};

const PageComponentEditor = ({ value, onChange, height }) => {
    const [components, setComponents] = useState(value || []);
    const [showJSON, setShowJSON] = useState(false);
    const [newComponentType, setNewComponentType] = useState(
        ComponentTypeOptions[0]?.value || ""
    );

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
        }

        const newComponent = {
            type: newComponentType,
            props: defaultProps,
        };

        const newComponents = [...components, newComponent];
        setComponents(newComponents);
        onChange(newComponents);
    };

    return (
        <div
            className="border border-zinc-700 rounded-md bg-[#121212]"
            style={{ height }}
        >
            <div
                className="p-4 overflow-y-auto"
                style={{ height: `calc(${height} - 50px)` }}
            >
                {components.map((component, index) => (
                    <ComponentEditor
                        key={index}
                        component={component}
                        index={index}
                        updateComponent={updateComponent}
                        removeComponent={removeComponent}
                        moveComponent={moveComponent}
                    />
                ))}

                <div className="flex items-center mt-4">
                    <select
                        value={newComponentType}
                        onChange={(e) => setNewComponentType(e.target.value)}
                        className="px-3 py-2 mr-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
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
                        className="px-4 py-2 text-white bg-zinc-700 rounded hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    >
                        Component Toevoegen
                    </button>

                    <button
                        type="button"
                        onClick={() => setShowJSON(!showJSON)}
                        className="px-4 py-2 ml-auto text-gray-300 bg-zinc-800 border border-zinc-700 rounded hover:bg-zinc-700 focus:outline-none"
                    >
                        {showJSON ? "Verberg JSON" : "Toon JSON"}
                    </button>
                </div>

                {showJSON && (
                    <div
                        className="p-3 mt-4 overflow-auto font-mono text-sm bg-zinc-800 border border-zinc-700 rounded-md text-gray-300"
                        style={{ maxHeight: "200px" }}
                    >
                        <pre>{JSON.stringify(components, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageComponentEditor;
