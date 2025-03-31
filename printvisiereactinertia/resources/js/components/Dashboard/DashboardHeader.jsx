import React from "react";
import { Link } from "@inertiajs/react";
import LogoutButton from "./LogoutButton";

export default function DashboardHeader({ title, user }) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                    {title}
                </h1>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center text-sm text-gray-500">
                        Ingelogd als:{" "}
                        <span className="font-semibold ml-1">
                            {user?.name || "Gebruiker"}
                        </span>
                    </div>

                    <div className="flex space-x-2">
                        <Link
                            href={route("pages.index")}
                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
                        >
                            Pages
                        </Link>
                        <Link
                            href={route("users.index")}
                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
                        >
                            Gebruikers
                        </Link>
                        <Link
                            href={route("dashboard")}
                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
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
