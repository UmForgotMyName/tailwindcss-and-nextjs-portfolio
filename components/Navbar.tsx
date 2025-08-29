"use client"
import React, { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"


const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [navbar, setNavbar] = useState(false)
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === "system" ? systemTheme : theme

    interface NavItem {
        label: string
        page: string
    }

    const NAV_ITEMS: Array<NavItem> = [
        {
            label: "Home",
            page: "home",
        },
        {
            label: "Work Experience",
            page: "work",
        },
        {
            label: "Projects",
            page: "projects",
        },
    ]

    useEffect(() => {
        setMounted(true);
      }, []);

    const renderThemeChanger = () => {
        if(!mounted) return null;

        if (currentTheme === "dark") {
            return (
                <button
                    onClick={() => setTheme("light")}
                    className="bg-stone-800 p-2 rounded-xl"
                >
                    <RiSunLine size={25} color="white" />
                </button>
            )
        } else {
            return (
                <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                >
                    <RiMoonFill size={25} color="black" />
                </button>
            )
        }
    }

    return (
        <header className="w-full mx-auto px-6 bg-white shadow fixed top-0 z-50 sm:px-32 dark:bg-neutral-900 dark:border-b dark:border-stone-600 h-16">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center h-full">
                    <span className="text-3xl md:text-4xl mr-2" style={{lineHeight: '1'}} role="img" aria-label="robot">🤖</span>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-red-600 leading-none">Rehan Siddiqi</h2>
                        <span className="text-xs text-neutral-500 dark:text-neutral-300 leading-none">AI/Robotics</span>
                    </div>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setNavbar(!navbar)} className="focus:outline-none">
                        {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                </div>
                {/* Desktop menu */}
                <div className="hidden md:block">
                    <div className="flex items-center space-x-6">
                        {NAV_ITEMS.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.page}
                                className="block px-3 py-2 rounded-md font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-red-600 transition-colors cursor-pointer"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        {renderThemeChanger()}
                    </div>
                </div>
            </div>
            {/* Mobile dropdown menu */}
            {navbar && (
                <div className="md:hidden w-full bg-white dark:bg-neutral-900 shadow-lg absolute left-0 top-16 z-50">
                    <div className="flex flex-col items-center space-y-2 py-4">
                        {NAV_ITEMS.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.page}
                                className="block w-full text-center px-3 py-2 rounded-md font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-red-600 transition-colors cursor-pointer"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        {renderThemeChanger()}
                    </div>
                </div>
            )}
        </header >
    )
}

export default Navbar