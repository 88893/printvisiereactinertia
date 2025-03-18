import React from "react";
import { Link } from "@inertiajs/react";
import LogoutButton from "./LogoutButton";

export default function DashboardHeader({ title, user }) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center text-sm text-gray-400">
                        Ingelogd als:{" "}
                        <span className="font-semibold ml-1">
                            {user?.name || "Gebruiker"}
                        </span>
                    </div>

                    <div className="flex space-x-2">
                        <Link
                            href="/dashboard/pages"
                            className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
                        >
                            Pages
                        </Link>
                        <Link
                            href="/users"
                            className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
                        >
                            Gebruikers
                        </Link>
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-200"
                        >
                            Referenties
                        </Link>

                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
