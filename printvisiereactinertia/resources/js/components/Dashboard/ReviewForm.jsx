import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";

export default function ReviewForm({
    review = null,
    onCancel,
    processing = false,
    darkMode = true,
}) {
    const initialData = React.useMemo(
        () => ({
            title: review?.title || "",
            description: review?.description || "",
            image_path: review?.image_path || "",
        }),
        [review]
    );

    const {
        data,
        setData,
        post,
        put,
        processing: formProcessing,
        reset,
    } = useForm(initialData);

    useEffect(() => {
        if (review) {
            setData({
                title: review.title || "",
                description: review.description || "",
                image_path: review.image_path || "",
            });
        } else {
            reset();
        }
    }, [review]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (review) {
            put(route("reviews.update", review.id), {
                onSuccess: () => {
                    if (onCancel) onCancel();
                    window.location.href = route("dashboard");
                },
                preserveScroll: true,
            });
        } else {
            post(route("reviews.store"), {
                onSuccess: () => {
                    if (onCancel) onCancel();
                    window.location.href = route("dashboard");
                },
                preserveScroll: true,
            });
        }
    };

    const themeClasses = {
        container: darkMode
            ? "bg-[#1E1E1E] p-6 rounded-lg shadow-md mb-6 border border-zinc-800"
            : "bg-white p-6 rounded-lg shadow-md mb-6",
        title: darkMode
            ? "text-xl font-semibold mb-4 text-white"
            : "text-xl font-semibold mb-4",
        label: darkMode
            ? "block text-gray-300 text-sm font-bold mb-2"
            : "block text-gray-700 text-sm font-bold mb-2",
        input: darkMode
            ? "bg-zinc-800 border border-zinc-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-zinc-600"
            : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        textarea: darkMode
            ? "bg-zinc-800 border border-zinc-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-zinc-600"
            : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        primaryButton: (isUpdate) =>
            darkMode
                ? "bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-150 ease-in-out"
                : `${
                      isUpdate
                          ? "bg-green-500 hover:bg-green-700"
                          : "bg-blue-500 hover:bg-blue-700"
                  } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out`,
        cancelButton: darkMode
            ? "bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 rounded font-bold py-2 px-4 focus:outline-none transition duration-150 ease-in-out"
            : "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",
    };

    return (
        <div className={themeClasses.container}>
            <h2 className={themeClasses.title}>
                {review ? "Referentie Bewerken" : "Nieuwe Referentie Toevoegen"}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className={themeClasses.label}>
                        Titel
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className={themeClasses.input}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className={themeClasses.label}>
                        Beschrijving
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        rows="4"
                        className={themeClasses.textarea}
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="image_path" className={themeClasses.label}>
                        Afbeelding pad
                    </label>
                    <input
                        type="text"
                        id="image_path"
                        name="image_path"
                        value={data.image_path}
                        onChange={handleChange}
                        className={themeClasses.input}
                        placeholder="pad/naar/afbeelding.jpg (optioneel)"
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        disabled={formProcessing || processing}
                        className={`${themeClasses.primaryButton(!!review)} ${
                            formProcessing || processing
                                ? "opacity-75 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        {formProcessing || processing
                            ? review
                                ? "Bezig met bijwerken..."
                                : "Bezig met toevoegen..."
                            : review
                            ? "Referentie Bijwerken"
                            : "Referentie Toevoegen"}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className={themeClasses.cancelButton}
                    >
                        Annuleren
                    </button>
                </div>
            </form>
        </div>
    );
}
