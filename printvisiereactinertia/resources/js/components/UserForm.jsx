import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

export default function UserForm({
    user = null,
    onCancel,
    title = "Nieuwe Gebruiker Toevoegen",
    darkMode = false,
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: user ? user.name : "",
        email: user ? user.email : "",
        password: "",
        password_confirmation: "",
        role: user ? user.role : "user",
        status: user ? user.status : "active",
    });

    const [showPassword, setShowPassword] = useState(!user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

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
            : "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",
        errorText: darkMode
            ? "mt-1 text-sm text-red-400"
            : "mt-1 text-sm text-red-600",
        buttonPrimary: darkMode
            ? "px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 focus:outline-none transition-colors duration-200"
            : "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none",
        buttonSecondary: darkMode
            ? "px-4 py-2 bg-zinc-800 text-gray-300 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700 rounded-md focus:outline-none transition-colors duration-150"
            : "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none",
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <form onSubmit={handleSubmit}>
                <div className={formClasses.formGroup}>
                    <label htmlFor="name" className={formClasses.label}>
                        Naam
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className={formClasses.input}
                        required
                    />
                </div>

                <div className={formClasses.formGroup}>
                    <label htmlFor="email" className={formClasses.label}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className={formClasses.input}
                        required
                    />
                </div>

                {user && (
                    <div className={formClasses.formGroup}>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="change_password"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className="mr-2"
                            />
                            <label
                                htmlFor="change_password"
                                className={formClasses.label}
                            >
                                Wachtwoord wijzigen
                            </label>
                        </div>
                    </div>
                )}

                {(!user || showPassword) && (
                    <>
                        <div className={formClasses.formGroup}>
                            <label
                                htmlFor="password"
                                className={formClasses.label}
                            >
                                Wachtwoord
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className={formClasses.input}
                                required={!user}
                            />
                        </div>

                        <div className={formClasses.formGroup}>
                            <label
                                htmlFor="password_confirmation"
                                className={formClasses.label}
                            >
                                Bevestig Wachtwoord
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={handleChange}
                                className={formClasses.input}
                                required={!user}
                            />
                        </div>
                    </>
                )}

                <div className={formClasses.formGroup}>
                    <label htmlFor="role" className={formClasses.label}>
                        Rol
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        className={formClasses.input}
                    >
                        <option value="admin">Administrator</option>
                        <option value="manager">Manager</option>
                        <option value="user">Gebruiker</option>
                    </select>
                </div>

                <div className={formClasses.formGroup}>
                    <label htmlFor="status" className={formClasses.label}>
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                        className={formClasses.input}
                    >
                        <option value="active">Actief</option>
                        <option value="inactive">Inactief</option>
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className={formClasses.buttonPrimary}>
                        {user ? "Gebruiker Bijwerken" : "Gebruiker Toevoegen"}
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
        </div>
    );
}
