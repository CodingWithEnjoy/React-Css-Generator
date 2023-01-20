import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'
import { CirclePicker, SliderPicker } from 'react-color';

export default function Textcolor() {
    const [textColor, setTextColor] = useState('#f00')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const textColorHandler = (e) => {
        setTextColor(`${e.target.value}`)
    }

    const textColorCopyHandler = async () => {
        let text = `color: ${textColor};`
        await copyed(text)
        btnCopyTextChange()
    }

    const handleChangeComplete = (color, event) => {
        setTextColor(color.hex);
    };
    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='style_Container'>
            <span className='titr'>Color</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <p style={{ color: `${textColor}`, fontSize: 40 }} >Font-size</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>color</span>
                            {': '}
                            <span className='code_three'>{textColor}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={textColorCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => textColorHandler(e)} type="color" />
                        <span>{textColor}</span>
                    </div>
                    <div className="input_box">
                        <CirclePicker color={textColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                    <div className="input_box">
                        <SliderPicker color={textColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
