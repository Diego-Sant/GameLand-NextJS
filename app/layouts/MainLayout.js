"use client"

import Footer from "./includes/Footer"
import Navbar from "./includes/Navbar"

export default function MainLayout({children}) {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}