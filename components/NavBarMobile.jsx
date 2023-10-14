import ClosedMenu from "@/public/icons/ClosedMenu";
import Menu from "@/public/icons/Menu";
import { useState } from "react";

const NavBarMobile = ({ NavLinks }) => {
    const [open, setOpen] = useState(false);

    function handleMenu(event) {
        event.preventDefault();
        setOpen(!open)
    }

    return (
        <>
            <button className='block' onClick={(event) => { handleMenu(event) }} >
                {
                    open ?
                    <Menu fill='#fff' width='28px' height='28px' />
                    : <ClosedMenu />
                }
            </button>
        </>
    );
}

export default NavBarMobile;
