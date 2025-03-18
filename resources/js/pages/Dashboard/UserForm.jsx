import React from "react";
import { useForm } from "@inertiajs/react";

export default function UserForm({ user, onCancel, darkMode = false }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: user ? user.name : "",
        email: user ? user.email : "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            put(route("users.update", user.id));
        } else {
            post(route("users.store"));
        }
    };

    const formClasses = {
        formGroup: "mb-4",
        label: darkMode
            ? "block mb-2 text-sm font-medium text-gray-300"
            : "block mb-2 text-sm font-medium text-gray-700",
        input: darkMode
            ? "w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
            : "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        errorText: darkMode
            ? "mt-1 text-sm text-red-400"
            : "mt-1 text-sm text-red-600",
        buttonPrimary: darkMode
            ? "px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 focus:outline-none transition-colors duration-200"
            : "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none",
        buttonSecondary: darkMode
            ? "px-4 py-2 bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 rounded-md focus:outline-none transition-colors duration-150"
            : "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 focus:outline-none",
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={formClasses.formGroup}>
                <label htmlFor="name" className={formClasses.label}>
                    Naam
                </label>
                <input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className={formClasses.input}
                    required
                />
                {errors.name && (
                    <div className={formClasses.errorText}>{errors.name}</div>
                )}
            </div>

            <div className={formClasses.formGroup}>
                <label htmlFor="email" className={formClasses.label}>
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className={formClasses.input}
                    required
                />
                {errors.email && (
                    <div className={formClasses.errorText}>{errors.email}</div>
                )}
            </div>

            <div className={formClasses.formGroup}>
                <label htmlFor="password" className={formClasses.label}>
                    Wachtwoord {user && "(leeg laten om ongewijzigd te houden)"}
                </label>
                <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    className={formClasses.input}
                    required={!user}
                />
                {errors.password && (
                    <div className={formClasses.errorText}>
                        {errors.password}
                    </div>
                )}
            </div>

            <div className={formClasses.formGroup}>
                <label
                    htmlFor="password_confirmation"
                    className={formClasses.label}
                >
                    Wachtwoord bevestigen
                </label>
                <input
                    id="password_confirmation"
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    className={formClasses.input}
                    required={!user}
                />
            </div>

            <div className="flex items-center justify-between mt-6">
                <button
                    type="submit"
                    className={formClasses.buttonPrimary}
                    disabled={processing}
                >
                    {processing ? "Bezig..." : user ? "Bijwerken" : "Toevoegen"}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className={formClasses.buttonSecondary}
                >
                    Annuleren
                </button>
            </div>
        </form>
    );
}
