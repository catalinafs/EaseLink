const InputField = ({ inputRef, labelText }) => {
    return (
        <div className='relative w-[80%] 2xl:w-[500px] xl:w-[400px] lg:w-[350px] md:w-[300px]' id="InputBox">
            <input
                type='text'
                id='LongLink'
                ref={inputRef}
                className='bg-transparent outline-none py-2 dark:text-text-dark text-text border-b-2
                dark:border-primary-dark border-primary w-full'
                required
            />
            <label
                htmlFor="LongLink"
                className='border-none dark:text-text-dark text-text border-b-2 py-2 font-medium
                pointer-events-none'
            >{labelText}</label>
        </div>
    );
}

export default InputField;
