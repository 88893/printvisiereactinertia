import React, { useState } from "react";
import UserForm from "./UserForm";
import { useForm } from "@inertiajs/react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

export default function UserDashboard(props) {
    const { users, flash, auth } = props;
    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const { delete: destroy, processing: deleteProcessing } = useForm();

    const handleAddClick = () => {
        setEditingUser(null);
        setShowForm(true);
        setShowDeleteConfirm(false);
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setShowForm(true);
        setShowDeleteConfirm(false);
    };

    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setShowDeleteConfirm(true);
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setEditingUser(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
        setUserToDelete(null);
    };

    const handleDelete = () => {
        if (userToDelete) {
            destroy(route("users.destroy", userToDelete.id), {
                onSuccess: () => {
                    setShowDeleteConfirm(false);
                    setUserToDelete(null);
                },
            });
        }
    };

    const userList = React.useMemo(() => {
        return (
            <div className="overflow-hidden rounded-lg bg-white shadow-xl border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Naam
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Aangemaakt op
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Acties
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {users && users.length > 0 ? (
                                users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-800">
                                            {user.name}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="text-sm text-gray-700 font-mono bg-gray-100 px-2 py-1 rounded">
                                                {user.email}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {new Date(
                                                user.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                                            <div className="flex space-x-3">
                                                <button
                                                    onClick={() =>
                                                        handleEditClick(user)
                                                    }
                                                    className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors duration-150"
                                                    type="button"
                                                >
                                                    Bewerken
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteClick(user)
                                                    }
                                                    className="px-3 py-1.5 text-xs font-medium inline-flex items-center rounded-md bg-white text-red-600 ring-1 ring-inset ring-gray-300 hover:bg-red-50 transition-colors duration-150"
                                                    type="button"
                                                >
                                                    Verwijderen
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
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
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <h3 className="mt-2 text-sm font-medium text-gray-700">
                                            Geen gebruikers gevonden.
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Voeg een nieuwe gebruiker toe om te
                                            beginnen.
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }, [users]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <DashboardHeader
                        title="Gebruikersbeheer"
                        user={auth?.user}
                    />

                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Gebruikers
                            </h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Beheer alle gebruikers van je website
                            </p>
                        </div>
                    </div>

                    {flash?.message && (
                        <div className="mb-6 rounded-md bg-white p-4 shadow-md border border-gray-200">
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
                                    <p className="text-sm font-medium text-gray-700">
                                        {flash.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mb-6">
                        <button
                            onClick={handleAddClick}
                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-ml-0.5 mr-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                            Nieuwe Gebruiker Toevoegen
                        </button>
                    </div>

                    {showForm && (
                        <div className="p-6 mb-6 bg-white rounded-lg shadow-md border border-gray-200">
                            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                                {editingUser
                                    ? "Gebruiker Bewerken"
                                    : "Nieuwe Gebruiker"}
                            </h2>
                            <UserForm
                                user={editingUser}
                                onCancel={handleCancelForm}
                                darkMode={false}
                            />
                        </div>
                    )}

                    {showDeleteConfirm && userToDelete && (
                        <div className="p-6 mb-6 bg-white rounded-lg shadow-md border border-gray-200">
                            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                                Gebruiker Verwijderen
                            </h2>
                            <p className="mb-4 text-gray-600">
                                Weet je zeker dat je gebruiker "
                                <span className="font-semibold text-gray-800">
                                    {userToDelete.name}
                                </span>
                                " wilt verwijderen?
                            </p>
                            <div className="flex items-center justify-between">
                                <button
                                    className="px-4 py-2 bg-zinc-800 text-gray-300 ring-1 ring-inset ring-red-800 hover:bg-zinc-700 rounded-md focus:outline-none transition-colors duration-150"
                                    onClick={handleDelete}
                                    disabled={deleteProcessing}
                                    type="button"
                                >
                                    {deleteProcessing
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
                    )}

                    {!showForm && !showDeleteConfirm && userList}
                </div>
            </div>
        </div>
    );
}
