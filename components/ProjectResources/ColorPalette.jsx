import { useContext } from "react";
import { Context } from "@/context";

const ColorPalette = () => {
    const { responsive, theme } = useContext(Context);

    const palette = [
        {
            id: 1,
            hexDark: '#070f13',
            hexLight: '#ecf4f8',
            bgDark: 'bg-background-dark',
            bgLight: 'bg-background',
            colorType: 'Background',
            textColorDark: 'text-text-dark',
            textColorLight: 'text-text',
        },
        {
            id: 2,
            hexDark: '#BE754B',
            hexLight: '#B46B41',
            bgDark: 'bg-primary-dark',
            bgLight: 'bg-primary',
            colorType: 'Primary',
            textColorDark: 'text-text',
            textColorLight: 'text-text',
        },
        {
            id: 3,
            hexDark: '#122630',
            hexLight: '#cfe3ed',
            bgDark: 'bg-secondary-dark',
            bgLight: 'bg-secondary',
            colorType: 'Secondary',
            textColorDark: 'text-text-dark',
            textColorLight: 'text-text',
        },
        {
            id: 4,
            hexDark: '#BF784F',
            hexLight: '#B06940',
            bgDark: 'bg-accent-dark',
            bgLight: 'bg-accent',
            colorType: 'Accent',
            textColorDark: 'text-text',
            textColorLight: 'text-text',
        },
    ]

    return (
        <div className="dark:bg-secondary bg-secondary-dark rounded-Radius40 p-7 text-center">
            <h2
                className="dark:text-text text-text-dark font-semibold text-xl mb-4"
            >{theme === 'dark' ? 'Dark' : 'Light'} Mode Color Palette</h2>
            <ul className="flex items-center mx-2 mr-7 relative">
                {
                    palette.map(({ id, hexDark, hexLight, bgDark, bgLight, colorType, textColorDark, textColorLight }) => {
                        let ifThemeBg = theme === 'dark' ? hexDark : hexLight;
                        // let ifThemeColor = theme === 'dark' ? textColorDark : textColorLight;

                        console.log(ifThemeBg)
                        return (
                            <li key={id} className={`flex flex-col items-center justify-center gap-6 -mr-5`}>
                                <div
                                    className={`w-32 h-32 dark:${bgDark} ${bgLight}
                                    rounded-RadiusRounded flex items-center justify-center
                                    dark:${textColorDark} ${textColorLight}`}
                                >{ifThemeBg}</div>
                                <h5 className="dark:text-text text-text-dark font-medium text-sm">{colorType}</h5>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ColorPalette;
