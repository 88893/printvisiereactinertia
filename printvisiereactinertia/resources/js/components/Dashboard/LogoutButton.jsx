import React from "react";
import { router } from "@inertiajs/react";

export default function LogoutButton({ className = "" }) {
    const handleLogout = () => {
        router.post(
            "/logout",
            {},
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <button
            onClick={handleLogout}
            className={`inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 ${className}`}
            type="button"
        >
            Uitloggen
        </button>
    );
}
