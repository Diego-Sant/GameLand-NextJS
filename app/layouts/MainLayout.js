"use client"

import { useEffect, useState } from "react";
import Footer from "./includes/Footer"
import Navbar from "./includes/Navbar"
import Loading from "@/components/Loading";

export default function MainLayout({children}) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.addEventListener("storage", function() {
            let res = localStorage.getItem('isLoading');
            res === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
    }, [])
    
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
                    {isLoading ? <Loading /> : <div></div>}
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}