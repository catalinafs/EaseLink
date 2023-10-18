import Link from "next/link";
import ToggleDarkMode from '../ToggleDarkMode';

const NavBarDesktop = ({ NavLinks, theme, setTheme, router }) => {
    return (
        <ul className='flex items-center justify-center gap-6'>
            {
                NavLinks.map(({ id, link, path }) => {
                    let pathActive = router.pathname === path;
                    let active = pathActive ? 'dark:text-primary-dark text-primary' : 'dark:text-text-dark text-text'

                    return (
                        <li key={id}>
                            <Link
                                href={path}
                            >
                                <h3
                                    className={`${active} inline-block relative font-medium
                                            after:underline after:content-[" "] after:absolute after:w-full after:h-[3px]
                                            after:bottom-0 after:left-0 after:bg-primary-dark after:scale-x-0
                                            after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                                            after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left
                                            hover:text-primary-dark`}
                                >
                                    {link}
                                </h3>
                            </Link>
                        </li>
                    )
                })
            }
            <li className='ml-5'>
                <ToggleDarkMode setTheme={setTheme} theme={theme} />
            </li>
        </ul>
    );
}

export default NavBarDesktop;
