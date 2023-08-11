"use client"

import { useEffect, useState } from "react";
import Footer from "./includes/Footer"
import Navbar from "./includes/Navbar"

export default function MainLayout({children}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

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