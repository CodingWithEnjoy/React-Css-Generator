import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import copyed from '../../func'
import { motion } from 'framer-motion'


export default function Border() {
    const [borderWidth, setBorderWidth] = useState('50px')
    const [borderColor, setBorderColor] = useState('#000')
    const [borderStyle, setBorderStyle] = useState('solid')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const handleChange = (e) => {
        setBorderColor(e.target.value)
    }

    const borderWidthHandler = (e) => {
        setBorderWidth(`${e.target.value}px`)
    }

    const borderStyleHandler = (e) => {
        setBorderStyle(e.target.value)
    }

    const borderCopyHandler = async () => {
        let text = `border: ${borderWidth} ${borderStyle} ${borderColor}`
        await copyed(text)
        btnCopyTextChange()
    }
    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='style_Container'>
            <span className='titr'>Border</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div style={{ border: `${borderWidth} ${borderStyle} ${borderColor}` }} className='preview_box'></div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>border</span>
                            {': '}
                            <span className='code_three'>{borderWidth}</span>
                            {' '}
                            <span className='code_two'>{borderStyle}</span>
                            {' '}
                            <span className='code_three'>{borderColor}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={borderCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>color</label>
                        <input onChange={(e) => handleChange(e)} type="color" />
                    </div>
                    <div className="input_box">
                        <label>Width</label>
                        <input onChange={(e) => borderWidthHandler(e)} type="range" />
                        <span>{borderWidth}</span>
                    </div>
                    <div className="input_box">
                        <label>Style</label>
                        <select onChange={(e) => borderStyleHandler(e)}>
                            <option value="solid">solid</option>
                            <option value="dashed">dashed</option>
                            <option value="dotted">dotted</option>
                            <option value="double">double</option>
                            <option value="groove">groove</option>
                            <option value="ridge">ridge</option>
                            <option value="inset">inset</option>
                            <option value="outset">outset</option>
                        </select>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
