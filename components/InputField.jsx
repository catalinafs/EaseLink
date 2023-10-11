const InputField = ({ inputRef, labelText }) => {
    return (
        <div className='relative' id="InputBox">
            <input
                type='text'
                id='LongLink'
                ref={inputRef}
                className='bg-transparent outline-none py-2 dark:text-text-dark text-text border-b-2
                dark:border-primary-dark border-primary'
                required
            />
            <label
                htmlFor="LongLink"
                className='border-none dark:text-text-dark text-text border-b-2 py-2 font-medium
                pointer-events-none'
                id="LabelInputText"
            >{labelText}</label>
        </div>
    );
}

export default InputField;
