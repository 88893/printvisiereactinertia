import * as React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import PageComponentEditor from "../../components/Dashboard/PageComponentEditor";

export default function Edit({ page, success, auth }) {
    const { data, setData, put, processing, errors } = useForm({
        title: page.title || "",
        slug: page.slug || "",
        content: page.content || [],
        meta_title: page.meta_title || "",
        meta_description: page.meta_description || "",
        meta_keywords: page.meta_keywords || "",
        meta_image: page.meta_image || "",
        is_active: page.is_active || false,
    });

    const handleContentChange = (newContent) => {
        setData("content", newContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("pages.update", page.slug));
    };

    return (
        <div className="min-h-screen bg-[#121212]">
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <DashboardHeader
                        title="Gebruikersbeheer"
                        user={auth?.user}
                    />

                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                Pagina Bewerken: {page.title}
                            </h1>
                            <p className="mt-1 text-sm text-gray-400">
                                Bewerk de inhoud en instellingen van deze pagina
                            </p>
                        </div>
                    </div>

                    {success && (
                        <div className="mb-6 rounded-md bg-zinc-800 p-4 shadow-md border border-zinc-700">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-300">
                                        {success}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="overflow-hidden rounded-lg bg-[#1E1E1E] shadow-xl border border-zinc-800">
                        <div className="p-6 border-b border-zinc-800">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-300"
                                            htmlFor="title"
                                        >
                                            Paginatitel
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                            required
                                        />
                                        {errors.title && (
                                            <div className="mt-2 text-sm text-red-400">
                                                {errors.title}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-300"
                                            htmlFor="slug"
                                        >
                                            URL Slug
                                        </label>
                                        <input
                                            type="text"
                                            name="slug"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) =>
                                                setData("slug", e.target.value)
                                            }
                                            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                            required
                                        />
                                        {errors.slug && (
                                            <div className="mt-2 text-sm text-red-400">
                                                {errors.slug}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="mb-4 border-b border-zinc-800">
                                        <h2 className="mb-2 text-xl font-semibold text-white">
                                            Pagina Inhoud
                                        </h2>
                                        <p className="mb-4 text-gray-400">
                                            Bewerk de inhoud van uw pagina door
                                            de onderstaande componenten aan te
                                            passen.
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <PageComponentEditor
                                            value={data.content}
                                            onChange={handleContentChange}
                                            height="600px"
                                        />
                                        {errors.content && (
                                            <div className="mt-2 text-sm text-red-400">
                                                {errors.content}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="mb-4 border-b border-zinc-800">
                                        <h2 className="mb-2 text-xl font-semibold text-white">
                                            SEO Informatie
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-300"
                                                htmlFor="meta_title"
                                            >
                                                Meta Titel
                                            </label>
                                            <input
                                                type="text"
                                                name="meta_title"
                                                id="meta_title"
                                                value={data.meta_title}
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_title",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                            />
                                            {errors.meta_title && (
                                                <div className="mt-2 text-sm text-red-400">
                                                    {errors.meta_title}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-300"
                                                htmlFor="meta_keywords"
                                            >
                                                Meta Keywords
                                            </label>
                                            <input
                                                type="text"
                                                name="meta_keywords"
                                                id="meta_keywords"
                                                value={data.meta_keywords}
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_keywords",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                            />
                                            {errors.meta_keywords && (
                                                <div className="mt-2 text-sm text-red-400">
                                                    {errors.meta_keywords}
                                                </div>
                                            )}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-300"
                                                htmlFor="meta_description"
                                            >
                                                Meta Beschrijving
                                            </label>
                                            <textarea
                                                name="meta_description"
                                                id="meta_description"
                                                value={data.meta_description}
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_description",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                                rows="2"
                                            ></textarea>
                                            {errors.meta_description && (
                                                <div className="mt-2 text-sm text-red-400">
                                                    {errors.meta_description}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-300"
                                                htmlFor="meta_image"
                                            >
                                                Meta Afbeelding URL
                                            </label>
                                            <input
                                                type="text"
                                                name="meta_image"
                                                id="meta_image"
                                                value={data.meta_image}
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_image",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                            />
                                            {errors.meta_image && (
                                                <div className="mt-2 text-sm text-red-400">
                                                    {errors.meta_image}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center mt-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="is_active"
                                                    checked={data.is_active}
                                                    onChange={(e) =>
                                                        setData(
                                                            "is_active",
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="text-zinc-600 bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500 focus:ring-offset-zinc-800"
                                                />
                                                <span className="ml-2 text-sm text-gray-300">
                                                    Pagina Actief
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200 disabled:opacity-50"
                                    >
                                        {processing
                                            ? "Bezig met opslaan..."
                                            : "Pagina Opslaan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
