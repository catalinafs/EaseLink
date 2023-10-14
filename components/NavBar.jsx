import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import { Context } from '@/context';
import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();
    const [theme, setTheme] = useState('dark');
    let ifTitle = theme === 'dark' ? 'text-primary-dark font-extrabold' : 'EaseLink'
    const { responsive } = useContext(Context);

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
        <header
            className='dark:bg-background-dark dark:border-none bg-background border-b-2 border-secondary-dark
            py-5 px-20 2xl:px-[20%] xl:px-20 lg:px-20 md:px-36'
        >
            <nav className='flex items-center justify-between'>
                <Link href='/'>
                    <h1
                        className={`text-3xl ${ifTitle}`}
                    >EaseLink</h1>
                </Link>
                {
                    responsive <= 1024
                        ?
                        <NavBarMobile NavLinks={NavLinks} />
                        :
                        <NavBarDesktop
                            NavLinks={NavLinks}
                            theme={theme}
                            setTheme={setTheme}
                            router={router}
                        />
                }
            </nav>
        </header>
    );
}

export default NavBar;
