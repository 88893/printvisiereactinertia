import * as React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import PageComponentEditor from "../../components/Dashboard/PageComponentEditor";

export default function Create({ page, auth }) {
    const { data, setData, post, processing, errors } = useForm({
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
        post(route("pages.store"));
    };

    return (
        <>
            <div className="py-12 bg-[#121212]">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <DashboardHeader
                        title="Create New Page"
                        user={auth?.user}
                    />
                    <div className="overflow-hidden bg-[#1E1E1E] shadow-xl sm:rounded-lg border border-zinc-800">
                        <div className="p-6 bg-[#1E1E1E] border-b border-zinc-800">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-300"
                                            htmlFor="title"
                                        >
                                            Page Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                            className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                            Page Content
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
                                            height="500px"
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
                                            SEO Information
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-300"
                                                htmlFor="meta_title"
                                            >
                                                Meta Title
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
                                                className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                                className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                                Meta Description
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
                                                className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                                Meta Image URL
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
                                                className="w-full mt-1 bg-zinc-800 text-white border-zinc-700 rounded-md shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
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
                                                    className="text-zinc-600 bg-zinc-800 border-zinc-700 rounded shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
                                                />
                                                <span className="ml-2 text-sm text-gray-400">
                                                    Page Active
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 ml-4 font-bold text-white bg-zinc-700 rounded hover:bg-zinc-600 disabled:opacity-50 transition-colors duration-200"
                                    >
                                        Create Page
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
