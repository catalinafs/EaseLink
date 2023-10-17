const Button = ({ text }) => {
    return (
        <button
            className='dark:bg-primary-dark dark:text-background-dark text-primary bg-transparent
            font-semibold py-2 px-8 rounded-md transition-all duration-[.2s] ease-in-out
            dark:hover:shadow-ButtonHover hover:shadow-ButtonHover hover:-translate-y-1 dark:font-bold
            whitespace-nowrap dark:border-none border-2 border-primary w-[80%] md:w-auto
            lg:w-auto xl:w-auto 2xl:w-auto'
        >{text}</button>
    );
}

export default Button;
