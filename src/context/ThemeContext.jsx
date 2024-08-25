import React, { createContext, useState } from 'react';

// Create a ThemeContext with default values
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState('text-base');
    const [fontColor, setFontColor] = useState('#000000');
    const [fontWeight, setFontWeight] = useState('font-normal');
    const [fontStyle, setFontStyle] = useState('font-normal');
    const [backgroundImage, setBackgroundImage] = useState('');

    const themeStyles = {
        light: {
            backgroundColor: '#ffffff',
            color: fontColor,
        },
        dark: {
            backgroundColor: '#333333',
            color: fontColor,
        },
    };

    const currentThemeStyles = themeStyles[theme] || themeStyles.light;

    const themeContextValue = {
        theme,
        setTheme,
        fontSize,
        setFontSize,
        fontColor,
        setFontColor,
        fontWeight,
        setFontWeight,
        fontStyle,
        setFontStyle,
        backgroundImage,
        setBackgroundImage,
        currentThemeStyles,
        currentFontSize: fontSize,
        currentFontWeight: fontWeight,
        currentFontStyle: fontStyle,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <div
                className={`${currentThemeStyles.backgroundColor} ${currentThemeStyles.color} ${fontSize} ${fontWeight} ${fontStyle} ${backgroundImage ? `bg-[url(${backgroundImage})]` : ''}`}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
