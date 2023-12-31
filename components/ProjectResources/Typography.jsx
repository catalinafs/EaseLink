const Typography = () => {
    return (
        <div
            className="dark:bg-secondary bg-secondary-dark rounded-Radius40 p-7
            flex flex-col items-center lg:items-start justify-center relative"
        >
            <h2
                className="dark:text-text text-text-dark font-semibold text-xl mb-3 text-center 
                lg:text-center w-full"
            >
                Typography
            </h2>

            <div className="flex items-baseline dark:text-text text-text-dark">
                <span
                    className="text-6xl font-extrabold opacity-[15%] leading-[90%]"
                >Aa</span>
                <h3
                    className="text-2xl font-semibold -ml-4"
                >Montserrat</h3>
            </div>

            <div className="dark:text-text text-text-dark text-lg pt-6 px-3 break-words hidden sm:block">
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>{'0123456789?¿¡!@#%/()=$;,:.><'}</p>
            </div>
        </div>
    );
}

export default Typography;
