import { useEffect, useState } from "react";

const ToggleDarkMode = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const handleModeDark = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <div className="toggle-switch">
            <label className="switch-label">
                <input type="checkbox" className="checkbox" defaultChecked={false} onClick={handleModeDark} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ToggleDarkMode;
