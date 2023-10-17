import ClosedMenu from "@/public/icons/ClosedMenu";
import Menu from "@/public/icons/Menu";
import Link from "next/link";
import { useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";

const NavBarMobile = ({ NavLinks, theme, setTheme, router }) => {
    const [open, setOpen] = useState(false);
    let ifOpen = open ? 'flex flex-col z-10' : 'hidden';
    let ifNavOpen = open ? 'absolute top-6 sm:right-36 right-8' : ''

    function handleMenu(event) {
        setOpen(!open);
    }

    return (
        <>
            <button className={`block ${ifNavOpen} z-40`} onClick={(event) => { handleMenu(event) }} >
                {
                    open
                    ? <ClosedMenu className='fill-primary dark:fill-white' />
                    : <Menu width='28px' height='28px' className='fill-primary dark:fill-white' />
                }
            </button>

            <ul
                className={`w-full h-full ${ifOpen} flex flex-col justify-center gap-16 dark:bg-background-dark
                bg-secondary absolute left-0 top-0 transition-all ease-in-out duration-75 sm:pl-[35%] pl-[22%]`}
            >
                {
                    NavLinks.map(({ id, link, path }) => {
                        let pathActive = router.pathname === path;
                        let active = pathActive ? 'dark:text-primary-dark text-primary' : 'dark:text-text-dark text-text'

                        return (
                            <li key={id}>
                                <Link
                                    href={path}
                                    onClick={handleMenu}
                                >
                                    <h3
                                        className={`${active} inline-block relative font-medium text-xl
                                            after:underline after:content-[" "] after:absolute after:w-full after:h-[3px]
                                            after:bottom-0 after:left-0 after:bg-primary-dark after:scale-x-0
                                            after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                                            after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left
                                            hover:text-primary-dark whitespace-nowrap sm:text-2xl`}
                                    >
                                        {link}
                                    </h3>
                                </Link>
                            </li>
                        )
                    })
                }
                <li className="flex items-center gap-6 text-xl sm:text-2xl font-medium">
                    <h3 className="dark:text-text-dark text-text whitespace-nowrap">Dark Mode</h3>
                    <ToggleDarkMode setTheme={setTheme} theme={theme} />
                </li>
            </ul>
        </>
    );
}

export default NavBarMobile;
