const Button = ({text}) => {
    return (
        <button
            className='bg-primary-dark text-background-dark m-6 py-2 px-8 rounded-md whitespace-nowrap 
            transition-all duration-[.2s] ease-in-out hover:shadow-ButtonHover hover:-translate-y-1 font-bold'
        >{text}</button>
    );
}

export default Button;
