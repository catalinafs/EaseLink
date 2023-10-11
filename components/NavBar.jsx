import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import ToggleDarkMode from './ToggleDarkMode';

const NavBar = () => {
    const router = useRouter();

    const NavLinks = [
        {
            id: 1,
            link: 'Home',
            path: '/',
        },
        {
            id: 2,
            link: 'Link',
            path: '/allLinks',
        },
        {
            id: 3,
            link: 'Project Resources',
            path: '/projectResources',
        }
    ]

    return (
        <header className='bg-secondary-dark py-5 px-20'>
            <nav className='flex items-center justify-between'>
                <h1 className='text-3xl text-primary-dark font-extrabold'>EaseLink</h1>
                <ul className='flex items-center justify-center gap-6'>
                    {
                        NavLinks.map(({ id, link, path }) => {
                            let pathActive = router.pathname === path;
                            let active = pathActive ? 'text-primary-dark' : 'text-text-dark'

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
                        <ToggleDarkMode />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
