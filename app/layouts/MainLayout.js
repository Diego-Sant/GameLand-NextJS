"use client"

import Navbar from "./includes/Navbar"

export default function MainLayout({children}) {
    return (
        <>
            <div id="MainLayout">
                <div>
                    <Navbar />
                </div>
            </div>
        </>
    )
}