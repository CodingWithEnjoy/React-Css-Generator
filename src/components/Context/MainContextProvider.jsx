import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export default function MainContextProvider({ children }) {
    const [menuActive, setMenuActive] = useState(false)
    const [copyClickText, setcopyClickText] = useState(false)

    const btnCopyTextChange = () => {
        setcopyClickText(true)
        setTimeout(() => {
            setcopyClickText(false)
        }, 3000);
    }

    const closeMenu = () => {
        setMenuActive(false)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const mainVariant = {
        hidden: {
            y: "-5rem",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: "5rem",
            opacity: 0
        }
    }
    return (
        <MainContext.Provider
            value={{
                menuActive,
                setMenuActive,
                copyClickText,
                setcopyClickText,
                btnCopyTextChange,
                mainVariant,
                closeMenu
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
