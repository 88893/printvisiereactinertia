import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Controleer en stel de thema-status in vanuit localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            setIsDarkMode(true);
        }
    }, []);

    // Functie om dark mode te togglen
    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
