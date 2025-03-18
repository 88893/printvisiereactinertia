import * as React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage, useForm } from "@inertiajs/react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

const PagesDashboard = ({ pages, success, auth }) => {
    const { delete: destroy } = useForm();

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const confirmDelete = (title, slug) => {
        if (
            confirm(
                `Weet je zeker dat je de pagina "${title}" wilt verwijderen?`
            )
        ) {
            destroy(route("pages.destroy", slug));
        }
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
                                Pagina's
                            </h1>
                            <p className="mt-1 text-sm text-gray-400">
                                Beheer alle pagina's van je website
                            </p>
                        </div>
                        <Link href="/dashboard/pages/create">
                            <button className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200">
                                Nieuwe Pagina
                            </button>
                        </Link>
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
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-zinc-800">
                                <thead className="bg-[#252525]">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                                        >
                                            Titel
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                                        >
                                            URL Slug
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-400"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-400"
                                        >
                                            Laatste Wijziging
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-400"
                                        >
                                            Acties
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800 bg-[#1E1E1E]">
                                    {pages.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="px-6 py-16 text-center"
                                            >
                                                <svg
                                                    className="mx-auto h-12 w-12 text-zinc-600"
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
                                                <h3 className="mt-2 text-sm font-medium text-gray-300">
                                                    Geen pagina's gevonden
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Maak je eerste pagina om te
                                                    beginnen.
                                                </p>
                                                <div className="mt-6">
                                                    <Link href="/dashboard/pages/create">
                                                        <button className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200">
                                                            <svg
                                                                className="-ml-1 mr-2 h-5 w-5"
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
                                                            Nieuwe Pagina
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        pages.map((page) => (
                                            <tr
                                                key={page.id}
                                                className="hover:bg-[#252525] transition-colors duration-150"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="font-medium text-white">
                                                                {page.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="text-sm text-gray-300 font-mono bg-zinc-800 px-2 py-1 rounded">
                                                        {page.slug}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span
                                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium shadow-sm ${
                                                            page.is_active
                                                                ? "bg-zinc-800 text-green-400 border border-green-800"
                                                                : "bg-zinc-800 text-red-400 border border-red-800"
                                                        }`}
                                                    >
                                                        {page.is_active
                                                            ? "Actief"
                                                            : "Inactief"}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
                                                    <div className="text-sm">
                                                        {formatDate(
                                                            page.updated_at
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-center text-sm">
                                                    <div className="flex justify-center space-x-3">
                                                        <Link
                                                            href={`/${page.slug}`}
                                                            className="text-gray-300 hover:text-white transition-colors duration-150"
                                                            target="_blank"
                                                        >
                                                            <span className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 transition-colors duration-150">
                                                                Bekijken
                                                            </span>
                                                        </Link>

                                                        <Link
                                                            href={route(
                                                                "pages.edit",
                                                                page.slug
                                                            )}
                                                        >
                                                            <span className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 transition-colors duration-150">
                                                                Bewerken
                                                            </span>
                                                        </Link>

                                                        <button
                                                            onClick={() =>
                                                                confirmDelete(
                                                                    page.title,
                                                                    page.slug
                                                                )
                                                            }
                                                            className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 transition-colors duration-150"
                                                        >
                                                            Verwijderen
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagesDashboard;
