import React, { useState } from 'react'

const InputComponent = ({ label = 'Enter something interesting', svg, type = 'text', placeholder = 'Enter something interesting', changeType = false, newType = 'text' }) => {
    const [modifiedLable, SetmodifiedLable] = useState('demmy')
    const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');


    return (
        <>
            <div>
                <label htmlFor={id} className="text-base font-medium text-gray-900">{label}</label>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {svg}
                    </div>

                    <input
                        type={changeType ? newType : type}
                        name={id}
                        id={id}
                        placeholder={placeholder}
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                </div>
            </div>
        </>
    )
}

export default InputComponent