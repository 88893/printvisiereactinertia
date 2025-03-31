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
        <div className="min-h-screen bg-gray-50">
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <DashboardHeader title="Pagina Beheer" user={auth?.user} />
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Pagina's
                            </h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Beheer alle pagina's van je website
                            </p>
                        </div>
                        <Link href={route("pages.create")}>
                            <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200">
                                Nieuwe Pagina
                            </button>
                        </Link>
                    </div>

                    {success && (
                        <div className="mb-6 rounded-md bg-green-50 p-4 shadow-md border border-green-100">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-green-400"
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
                                    <p className="text-sm font-medium text-green-800">
                                        {success}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="overflow-hidden rounded-lg bg-white shadow-md border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Titel
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            URL Slug
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Laatste Wijziging
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Acties
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {pages.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="px-6 py-16 text-center"
                                            >
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
                                                <h3 className="mt-2 text-sm font-medium text-gray-500">
                                                    Geen pagina's gevonden
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Maak je eerste pagina om te
                                                    beginnen.
                                                </p>
                                                <div className="mt-6">
                                                    <Link
                                                        href={route(
                                                            "pages.create"
                                                        )}
                                                    >
                                                        <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200">
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
                                                className="hover:bg-gray-50 transition-colors duration-150"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-800">
                                                                {page.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="text-sm text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">
                                                        {page.slug}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span
                                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium shadow-sm ${
                                                            page.is_active
                                                                ? "bg-green-100 text-green-800 border border-green-200"
                                                                : "bg-red-100 text-red-800 border border-red-200"
                                                        }`}
                                                    >
                                                        {page.is_active
                                                            ? "Actief"
                                                            : "Inactief"}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                                                    <div className="text-sm">
                                                        {formatDate(
                                                            page.updated_at
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-center text-sm">
                                                    <div className="flex justify-center space-x-3">
                                                        <Link
                                                            href={route(
                                                                "page.show",
                                                                page.slug
                                                            )}
                                                            className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
                                                            target="_blank"
                                                        >
                                                            <span className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 transition-colors duration-150">
                                                                Bekijken
                                                            </span>
                                                        </Link>

                                                        <Link
                                                            href={route(
                                                                "pages.edit",
                                                                page.slug
                                                            )}
                                                        >
                                                            <span className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 transition-colors duration-150">
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
                                                            className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 transition-colors duration-150"
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
