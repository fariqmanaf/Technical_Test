import { categories } from "@/utils/arrayOfCategory";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Navbar({ setCategory, noActive }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState(noActive === true ? "" : "terbaru");

    useEffect(() => {
        if (noActive) {
            setActive("");
        }
    }
    , [noActive]);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`w-full ${isScrolled ? "bg-blue-400" : "bg-white"}  flex justify-center h-[10vh] p-4 md:p-6 fixed top-0 z-50 transition-all ease-linear duration-300`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <img
                        src={`${isScrolled ? "/logo/logo3.png" : "/logo/logo.png"}`}
                        alt="Logo"
                        className="h-10 cursor-pointer transition-all ease-linear duration-300"
                        onClick={() => navigate({ to: "/" })}
                    />
                    <div
                        className={`menu flex items-center gap-6 text-sm ${isScrolled ? "text-white" : "text-gray-600"}`}
                    >
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={"/"}
                                onClick={() => {
                                    setCategory(category);
                                    setActive(category);
                                }}
                                className={`${active === category && "text-blue-400"} ${active === category && isScrolled ? "text-white font-semibold" : ""} transition-all ease-linear duration-300`}
                            >
                                <p className="first-letter:uppercase">
                                    {category}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
