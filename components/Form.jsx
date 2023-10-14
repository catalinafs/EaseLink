const Form = ({ children, handleLongLink }) => {
    return (
        <form
            onSubmit={handleLongLink}
            // className="bg-red-500 w-full px-[25%] flex items-center justify-center"
            className="w-fullx flex flex-col items-center justify-center gap-7 "
        >
            {children}
        </form>
    )
}

export default Form
