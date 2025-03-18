import React, { useState } from "react";
import ReviewForm from "@/Components/ReviewForm";

export default function ReviewsSection({ reviews = [] }) {
    const [showForm, setShowForm] = useState(false);
    const [editingReview, setEditingReview] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);

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

    const sampleReviews =
        reviews.length > 0
            ? reviews
            : [
                  {
                      id: 1,
                      author: "Jan Jansen",
                      email: "jan@example.com",
                      rating: 5,
                      content: "Uitstekende service, zeer tevreden!",
                      status: "approved",
                      created_at: "2023-01-15",
                  },
                  {
                      id: 2,
                      author: "Petra Peters",
                      email: "petra@example.com",
                      rating: 4,
                      content: "Goede kwaliteit, snelle verzending.",
                      status: "approved",
                      created_at: "2023-02-20",
                  },
                  {
                      id: 3,
                      author: "Karel Karelsen",
                      email: "karel@example.com",
                      rating: 2,
                      content: "Product voldeed niet aan mijn verwachtingen.",
                      status: "pending",
                      created_at: "2023-03-25",
                  },
              ];

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("nl-NL", options);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={
                        i <= rating ? "text-yellow-500" : "text-gray-300"
                    }
                >
                    ★
                </span>
            );
        }
        return <div className="flex">{stars}</div>;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Reviews Beheer</h2>
                <button
                    onClick={handleAddClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Nieuwe Review Toevoegen
                </button>
            </div>

            {showForm && (
                <ReviewForm
                    review={editingReview}
                    onCancel={handleCancelForm}
                    title={
                        editingReview
                            ? "Review Bewerken"
                            : "Nieuwe Review Toevoegen"
                    }
                />
            )}

            {showDeleteConfirm && reviewToDelete && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Review Verwijderen
                    </h2>
                    <p className="mb-4">
                        Weet je zeker dat je de review van "
                        {reviewToDelete.author}" wilt verwijderen?
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 rounded mb-4">
                        <p className="italic">"{reviewToDelete.content}"</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                alert("Review verwijderd!");
                                setShowDeleteConfirm(false);
                                setReviewToDelete(null);
                            }}
                            type="button"
                        >
                            Verwijderen
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleCancelDelete}
                            type="button"
                        >
                            Annuleren
                        </button>
                    </div>
                </div>
            )}

            {!showForm && !showDeleteConfirm && (
                <div className="bg-white shadow-md rounded overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Auteur
                                </th>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Beoordeling
                                </th>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Inhoud
                                </th>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Status
                                </th>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Datum
                                </th>
                                <th className="py-3 px-4 bg-gray-100 font-semibold text-sm text-gray-600 text-left">
                                    Acties
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            {sampleReviews.map((review) => (
                                <tr
                                    key={review.id}
                                    className="border-b border-gray-200 hover:bg-gray-50"
                                >
                                    <td className="py-3 px-4">
                                        <div>{review.author}</div>
                                        <div className="text-xs text-gray-500">
                                            {review.email}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        {renderStars(review.rating)}
                                    </td>
                                    <td className="py-3 px-4 max-w-xs truncate">
                                        {review.content}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                review.status === "approved"
                                                    ? "bg-green-100 text-green-800"
                                                    : review.status ===
                                                      "pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {review.status === "approved"
                                                ? "Goedgekeurd"
                                                : review.status === "pending"
                                                ? "In behandeling"
                                                : "Afgekeurd"}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        {formatDate(review.created_at)}
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() =>
                                                handleEditClick(review)
                                            }
                                            className="text-blue-600 hover:text-blue-900 mr-2"
                                            type="button"
                                        >
                                            Bewerken
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDeleteClick(review)
                                            }
                                            className="text-red-600 hover:text-red-900"
                                            type="button"
                                        >
                                            Verwijderen
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
