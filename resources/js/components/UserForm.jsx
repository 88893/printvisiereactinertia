import React, { useState, useEffect } from "react";

export default function UserForm({
    user = null,
    onCancel,
    title = "Nieuwe Gebruiker Toevoegen",
}) {
    const [formData, setFormData] = useState({
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
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted with:", formData);

        alert(`Gebruiker ${user ? "bijgewerkt" : "toegevoegd"}!`);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Naam
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {user && (
                    <div className="mb-4">
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
                                className="text-gray-700 text-sm font-bold"
                            >
                                Wachtwoord wijzigen
                            </label>
                        </div>
                    </div>
                )}

                {(!user || showPassword) && (
                    <>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Wachtwoord
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required={!user}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Bevestig Wachtwoord
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required={!user}
                            />
                        </div>
                    </>
                )}

                <div className="mb-4">
                    <label
                        htmlFor="role"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Rol
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="admin">Administrator</option>
                        <option value="manager">Manager</option>
                        <option value="user">Gebruiker</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="status"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="active">Actief</option>
                        <option value="inactive">Inactief</option>
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className={`${
                            user
                                ? "bg-green-500 hover:bg-green-700"
                                : "bg-blue-500 hover:bg-blue-700"
                        } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    >
                        {user ? "Gebruiker Bijwerken" : "Gebruiker Toevoegen"}
                    </button>

                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Annuleren
                    </button>
                </div>
            </form>
        </div>
    );
}
