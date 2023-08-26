"use client"

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react"

const Context = createContext();

const WishListProvider = ({ children }) => {
    const router = useRouter()

    const [isItemAdded, setIsItemAdded] = useState(false);

    const getWishList = () => {
        let wishlist = [];

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }
        return wishlist;
    }

    const addToWishList = (product) => {
        let wishlist = [];

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }

        wishlist.push(product);

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        isItemAddedToWishList(product)
        router.refresh()
    }

    const removeFromWishList = (product) => {
        let wishlist = [];

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }

        wishlist = wishlist.filter(item => item.id !== product.id);

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        isItemAddedToWishList(product)
        router.refresh()
    }

    const isItemAddedToWishList = (product) => {
        let wishlist = [];

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }

        wishlist = wishlist.filter(item => item.id === product.id);

        if (wishlist.length > 0) {
            setIsItemAdded(true)
            return
        }

        setIsItemAdded(false)
    }

    const wishListCount = () => {
        let wishlist = [];

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }

        return wishlist.length
    }

    const wishListTotal = () => {
        let total = 0;
        let wishlist = []

        if (typeof localStorage !== "undefined") {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        }

        for (let i = 0; i < wishlist.length; i++) {
            const element = wishlist[i];
            total += element.price
        }

        return total;
    }

    const clearWishList = () => {
        localStorage.removeItem('wishlist');
        router.refresh()
    }

    const exposed = {isItemAdded, getWishList, addToWishList, removeFromWishList, isItemAddedToWishList, wishListCount, wishListTotal, clearWishList}

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useWishList = () => useContext(Context);

export default WishListProvider;