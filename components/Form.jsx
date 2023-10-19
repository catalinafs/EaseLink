const Form = ({ children, handleLongLink }) => {
    return (
        <form
            onSubmit={handleLongLink}
            className="w-full flex flex-col items-center justify-center gap-7 mt-36"
        >
            {children}
        </form>
    );
}

export default Form;
