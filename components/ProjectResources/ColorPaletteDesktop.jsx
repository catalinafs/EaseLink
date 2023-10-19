const ColorPalette = ({ theme, palette }) => {
    return (
        <div
            className="dark:bg-secondary bg-secondary-dark rounded-Radius40 p-7 flex
            flex-col items-center justify-center"
        >
            <h2
                className="dark:text-text text-text-dark font-semibold text-xl mb-4"
            >{theme === 'dark' ? 'Dark' : 'Light'} Mode Color Palette</h2>
            <ul className="flex items-center mx-2 mr-7 relative">
                {
                    palette.map(({ id, hexDark, hexLight, bgDark, bgLight, colorType, textColorDark, textColorLight }) => {
                        let ifThemeBg = theme === 'dark' ? hexDark : hexLight;

                        return (
                            <li
                                key={id}
                                className={`flex flex-col items-center justify-center gap-6
                                sm:-mr-5`}
                            >
                                <div
                                    className={`w-32 h-32 dark:${bgDark} ${bgLight}
                                    rounded-RadiusRounded flex items-center justify-center
                                    dark:${textColorDark} ${textColorLight}`}
                                >{ifThemeBg}</div>
                                <h5 className="dark:text-text text-text-dark font-medium text-sm">
                                    {colorType}
                                </h5>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ColorPalette;
