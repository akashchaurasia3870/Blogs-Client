import React, { useState, useContext, useEffect } from 'react';
import { BlogDataContext } from '../../../context/Blog_Context';

const Settings = () => {
    const { theme, setTheme, fontSize, setFontSize, fontColor, setFontColor, fontWeight, setFontWeight, fontStyle, setFontStyle, backgroundImage, setBackgroundImage , handleInputChange ,updateThemeData,getThemeData } = useContext(BlogDataContext);

    useEffect(()=>{
        getThemeData()
    },[]);

    return (
        <div className="p-6">
            <h1 className="text-inherit font-bold mb-6">Settings</h1>

        
            <div className="flex">
                <div className="space-y-6 w-full lg:w-1/3 p-2">
                    {/* Theme */}
                    <div className='shadow-md p-2 w-full bg-gray-200'>
                        <label className="block text-lg font-medium mb-2">Theme</label>
                        <div className="flex items-center space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="light"
                                    name='theme'
                                    checked={theme === "light"}
                                    onChange={(e) => {setTheme(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Light</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="dark"
                                    name='theme'
                                    checked={theme === "dark"}
                                    onChange={(e) => {setTheme(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Dark</span>
                            </label>
                        </div>
                    </div>


                    {/* Font Size
                    <div className='shadow-md p-2 w-full bg-gray-200'>
                            <label className="block text-lg font-medium mb-2">Font Size</label>
                            <div className="flex items-center justify-between">
                                <div className="text-sm" style={{ fontSize: '10px' }}>Aa</div>
                                <input
                                    type="range"
                                    min="10"
                                    max="50"
                                    step="5"
                                    name='fontSize'
                                    value={fontSize}
                                    onChange={(e) => {setFontSize(e.target.value), handleInputChange(e)}}
                                    className="w-full h-2 mx-4 bg-white rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="text-sm" style={{ fontSize: '50px' }}>Aa</div>
                            </div>
                            <div className="mt-2 text-sm">Selected Font Size: {fontSize}</div>
                    </div> */}
                    {/* Font Size */}
                    <div className="shadow-md p-4 w-full bg-gray-200">
                    <label className="block text-lg font-medium mb-4">Font Size</label>
                    <div className="grid grid-cols-3 gap-4">
                        {['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'].map((sizeClass, index) => (
                        <label key={index} className="flex items-center cursor-pointer">
                            <input
                            type="radio"
                            name="fontSize"
                            value={sizeClass}
                            checked={fontSize === sizeClass}
                            onChange={(e) => { setFontSize(e.target.value); handleInputChange(e); }}
                            className="mr-2"
                            />
                            <span className={`${sizeClass}`}>Aa</span>
                        </label>
                        ))}
                    </div>
                    <div className="mt-4 text-sm">Selected Font Size: <span className={`${fontSize}`}>{fontSize.replace('text-', '')}</span></div>
                    </div>


                    {/* Font Color */}
                    <div className='shadow-md p-2 w-full bg-gray-200'>
                        <label className="block text-lg font-medium mb-2">Font Color</label>
                        <div className="flex flex-row items-center justify-between">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="#000000"
                                    name='fontColor'
                                    checked={fontColor === "#000000"}
                                    onChange={(e) => {setFontColor(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-black"
                                />
                                <span className="ml-2 text-black">Black</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="#FF0000"
                                    name='fontColor'
                                    checked={fontColor === "#FF0000"}
                                    onChange={(e) => {setFontColor(e.target.value), handleInputChange(e)}}

                                    className="form-radio text-red-600"
                                />
                                <span className="ml-2 text-red-600">Red</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="#0000FF"
                                    name='fontColor'
                                    checked={fontColor === "#0000FF"}
                                    onChange={(e) => {setFontColor(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-blue-600"
                                />
                                <span className="ml-2 text-blue-600">Blue</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="#008000"
                                    name='fontColor'
                                    checked={fontColor === "#008000"}
                                    onChange={(e) => {setFontColor(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-green-600"
                                />
                                <span className="ml-2 text-green-600">Green</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="#FFA500"
                                    name='fontColor'
                                    checked={fontColor === "#FFA500"}
                                    onChange={(e) => {setFontColor(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-orange-600"
                                />
                                <span className="ml-2 text-orange-600">Orange</span>
                            </label>
                        </div>
                    </div>


                    {/* Font Weight */}
                    <div className='shadow-md p-2 w-full  bg-gray-200'>
                        <label className="block text-lg font-medium mb-2">Font Weight</label>
                        <div className="flex flex-row items-center justify-between">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="font-light"
                                        name='fontWeight'
                                        checked={fontWeight === "font-light"}
                                        onChange={(e) => {setFontWeight(e.target.value), handleInputChange(e)}}

                                        className="form-radio text-indigo-600"
                                    />
                                    <span className="ml-2">Light</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="font-normal"
                                        name='fontWeight'
                                        checked={fontWeight === "font-normal"}
                                        onChange={(e) => {setFontWeight(e.target.value), handleInputChange(e)}}

                                        className="form-radio text-indigo-600"
                                    />
                                    <span className="ml-2">Normal</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="font-semibold"
                                        name='fontWeight'
                                        checked={fontWeight === "font-semibold"}
                                        onChange={(e) => {setFontWeight(e.target.value), handleInputChange(e)}}

                                        className="form-radio text-indigo-600"
                                    />
                                    <span className="ml-2">Semi-Bold</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="font-bold"
                                        name='fontWeight'
                                        checked={fontWeight === "font-bold"}
                                        onChange={(e) => {setFontWeight(e.target.value), handleInputChange(e)}}

                                        className="form-radio text-indigo-600"
                                    />
                                    <span className="ml-2">Bold</span>
                                </label>
                        </div>
                    </div>


                    {/* Font Style */}
                    <div className='shadow-md p-2 w-full bg-gray-200'>
                        <label className="block text-lg font-medium mb-2">Font Style</label>
                        <div className="flex flex-row items-center justify-start space-x-3">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="font-normal"
                                    name='fontStyle'
                                    checked={fontStyle === "font-normal"}
                                    onChange={(e) => {setFontStyle(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Normal</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="font-italic"
                                    name='fontStyle'
                                    checked={fontStyle === "font-italic"}
                                    onChange={(e) => {setFontStyle(e.target.value), handleInputChange(e)}}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Italic</span>
                            </label>
                        </div>
                    </div>


                    {/* Background Image
                    <div>
                        <label className="block text-lg font-medium mb-2">Background Image URL</label>
                        <input
                            type="text"
                            value={backgroundImage}
                            name='backgroundStyle'
                            onChange={(e) => {setBackgroundImage(e.target.value), handleInputChange(e)}}
                            className="border border-gray-300 rounded p-2 w-full"
                        />
                    </div> */}

                    <div onClick={updateThemeData}>
                        <button className='p-2 bg-blue-500 text-white m-2'>SAVE</button>
                    </div>
                </div>
                {/* <div className="w-full lg:w-2/3 bg-gray-300">
                    <label className="block text-lg font-medium mb-2">Site Preview</label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden h-full w-full">
                        <iframe 
                            src={window.location.href} 
                            title="Site Preview" 
                            className="w-full h-full"
                            frameBorder="0"
                        />
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Settings;
