const ColorPalette = ({ theme, palette }) => {
    return (
        <div
            className="dark:bg-secondary bg-secondary-dark rounded-Radius40 p-7 flex
            flex-col items-center justify-center"
        >
            <h2
                className="dark:text-text text-text-dark font-semibold text-xl mb-5 text-center"
            >{theme === 'dark' ? 'Dark' : 'Light'} Mode Color Palette</h2>
            <ul className="flex flex-col items-center gap-3 mx-2 relative w-[200px]">
                {
                    palette.map(({ id, hexDark, hexLight, bgDark, bgLight, colorType, textColorDark, textColorLight }) => {
                        let ifThemeBg = theme === 'dark' ? hexDark : hexLight;

                        return (
                            <li
                                key={id}
                                className={`flex flex-col items-center justify-center
                                dark:${textColorDark} ${textColorLight} dark:${bgDark} ${bgLight}
                                rounded-Radius15 w-full py-4 font-medium`}
                            >
                                <h5>{ifThemeBg}</h5>
                                <h5>{colorType}</h5>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ColorPalette;
