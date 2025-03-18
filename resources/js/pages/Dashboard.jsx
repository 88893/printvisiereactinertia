import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import ReviewForm from "../Components/Dashboard/ReviewForm";

export default function Dashboard(props) {
    const { reviews = [], flash = {}, auth = { user: null } } = props;
    const [showForm, setShowForm] = useState(false);
    const [editingReview, setEditingReview] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const { delete: destroy, processing } = useForm();

    const totalReviews = reviews.length;
    const recentReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.created_at);
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        return reviewDate >= lastWeek;
    }).length;

    const handleAddClick = () => {
        setEditingReview(null);
        setShowForm(true);
        setShowDeleteConfirm(false);
    };

    const handleEditClick = (review) => {
        setEditingReview(review);
        setShowForm(true);
        setShowDeleteConfirm(false);
    };

    const handleDeleteClick = (review) => {
        setReviewToDelete(review);
        setShowDeleteConfirm(true);
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setEditingReview(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
        setReviewToDelete(null);
    };

    const handleDelete = () => {
        if (reviewToDelete) {
            destroy(route("reviews.destroy", reviewToDelete.id), {
                onSuccess: () => {
                    setShowDeleteConfirm(false);
                    setReviewToDelete(null);
                },
            });
        }
    };

    const filteredReviews = reviews.filter((review) => {
        const matchesSearch =
            searchTerm.trim() === "" ||
            review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeFilter === "all") return matchesSearch;

        const reviewDate = new Date(review.created_at);
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);

        if (activeFilter === "recent") {
            return matchesSearch && reviewDate >= lastWeek;
        }

        return matchesSearch;
    });

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("nl-NL", options);
    };

    const renderContent = () => {
        if (showForm) {
            return (
                <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-md border border-zinc-800">
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        {editingReview
                            ? "Referentie Bewerken"
                            : "Nieuwe Referentie"}
                    </h2>
                    <ReviewForm
                        review={editingReview}
                        onCancel={handleCancelForm}
                        processing={processing}
                        darkMode={true}
                    />
                </div>
            );
        }

        if (showDeleteConfirm && reviewToDelete) {
            return (
                <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-md border border-zinc-800">
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Referentie Verwijderen
                    </h2>
                    <p className="mb-4 text-gray-300">
                        Weet je zeker dat je de referentie "
                        <span className="font-semibold text-white">
                            {reviewToDelete.title}
                        </span>
                        " wilt verwijderen?
                    </p>
                    <div className="mt-2 p-3 bg-zinc-800 rounded mb-4 border border-zinc-700">
                        <p className="italic text-gray-300">
                            {reviewToDelete.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="px-4 py-2 bg-zinc-800 text-gray-300 ring-1 ring-inset ring-red-800 hover:bg-zinc-700 rounded-md focus:outline-none transition-colors duration-150"
                            onClick={handleDelete}
                            disabled={processing}
                            type="button"
                        >
                            {processing
                                ? "Bezig met verwijderen..."
                                : "Verwijderen"}
                        </button>
                        <button
                            className="px-4 py-2 bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 rounded-md focus:outline-none transition-colors duration-150"
                            onClick={handleCancelDelete}
                            type="button"
                        >
                            Annuleren
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="overflow-hidden rounded-lg bg-[#1E1E1E] shadow-xl border border-zinc-800">
                <div className="p-4 bg-[#1E1E1E] flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-800">
                    <div className="w-full mb-4 sm:mb-0 sm:w-80">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Zoeken..."
                                className="pl-10 w-full bg-zinc-800 text-white border border-zinc-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            className={`px-3 py-2 text-sm font-medium rounded-md ${
                                activeFilter === "all"
                                    ? "bg-zinc-700 text-white"
                                    : "text-gray-400 hover:bg-zinc-700"
                            } transition-colors duration-150 ease-in-out`}
                            onClick={() => setActiveFilter("all")}
                        >
                            Alle referenties
                        </button>
                        <button
                            className={`px-3 py-2 text-sm font-medium rounded-md ${
                                activeFilter === "recent"
                                    ? "bg-zinc-700 text-white"
                                    : "text-gray-400 hover:bg-zinc-700"
                            } transition-colors duration-150 ease-in-out`}
                            onClick={() => setActiveFilter("recent")}
                        >
                            Recente referenties
                        </button>
                    </div>
                </div>

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
                                    Beschrijving
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                                >
                                    Afbeelding
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                                >
                                    Datum
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-400"
                                >
                                    Acties
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 bg-[#1E1E1E]">
                            {filteredReviews.length > 0 ? (
                                filteredReviews.map((review) => (
                                    <tr
                                        key={review.id}
                                        className="hover:bg-[#252525] transition-colors duration-150"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-white">
                                                {review.title}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-300 truncate max-w-xs">
                                                {review.description}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {review.image_path ? (
                                                <div className="flex items-center">
                                                    <img
                                                        src={review.image_path}
                                                        alt={review.title}
                                                        className="h-10 w-10 object-cover rounded-md border border-zinc-700"
                                                        onError={(e) => {
                                                            e.target.onerror =
                                                                null;
                                                            e.target.src =
                                                                "/placeholder.jpg";
                                                        }}
                                                    />
                                                    <span className="ml-2 text-xs text-gray-400 truncate max-w-xs">
                                                        {review.image_path
                                                            .split("/")
                                                            .pop()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-500 text-sm">
                                                    Geen afbeelding
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-400">
                                                {formatDate(review.created_at)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() =>
                                                    handleEditClick(review)
                                                }
                                                className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 transition-colors duration-150 mr-2"
                                                type="button"
                                            >
                                                Bewerken
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteClick(review)
                                                }
                                                className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 transition-colors duration-150"
                                                type="button"
                                            >
                                                Verwijderen
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
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
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        <h3 className="mt-2 text-sm font-medium text-gray-300">
                                            {searchTerm
                                                ? "Geen referenties gevonden voor je zoekopdracht."
                                                : "Geen referenties beschikbaar."}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Voeg een nieuwe referentie toe om te
                                            beginnen.
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {filteredReviews.length > 0 && (
                    <div className="bg-[#1E1E1E] px-4 py-3 border-t border-zinc-800 sm:px-6">
                        <div className="text-sm text-gray-400">
                            Tonen van{" "}
                            <span className="font-medium text-white">
                                {filteredReviews.length}
                            </span>{" "}
                            van de{" "}
                            <span className="font-medium text-white">
                                {reviews.length}
                            </span>{" "}
                            referenties
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#121212] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <DashboardHeader
                    title="Gebruikersbeheer"
                    user={auth?.user || { name: "Gebruiker" }}
                />

                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            Referenties
                        </h1>
                        <p className="mt-1 text-sm text-gray-400">
                            Beheer alle referenties op je website
                        </p>
                    </div>
                </div>

                {flash?.message && (
                    <div className="mb-6 rounded-md bg-zinc-800 p-4 shadow-md border border-zinc-700">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg
                                    className={`h-5 w-5 ${
                                        flash.success
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    {flash.success ? (
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clipRule="evenodd"
                                        />
                                    )}
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-300">
                                    {flash.message}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mb-6 flex justify-end">
                    <button
                        onClick={handleAddClick}
                        className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
                        type="button"
                    >
                        Nieuwe Referentie
                    </button>
                </div>

                <div className="mb-8">{renderContent()}</div>
            </div>
        </div>
    );
}
