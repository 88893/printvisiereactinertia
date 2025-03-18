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
            className={`inline-flex items-center rounded-md bg-zinc-400 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200 ${className}`}
            type="button"
        >
            Uitloggen
        </button>
    );
}
