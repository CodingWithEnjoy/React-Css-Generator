import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'
import { CirclePicker, SliderPicker } from 'react-color';

export default function TextDecoration() {
    const [textDecoration, setTextDecoration] = useState('line-through')
    const [textDecorationStyle, setTextDecorationStyle] = useState('solid')
    const [textDecorationColor, settextDecorationColor] = useState('')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const textDecorationHandler = (e) => {
        setTextDecoration(`${e.target.value}`)
    }

    const textDecorationStyleHandler = (e) => {
        setTextDecorationStyle(`${e.target.value}`)
    }

    const textDecorationColorHandler = (e) => {
        settextDecorationColor(`${e.target.value}`)
    }

    const textDecorationCopyHandler = async () => {
        let text = `text-decoration: ${textDecoration} ${textDecorationStyle} ${textDecorationColor};`
        await copyed(text)
        btnCopyTextChange()
    }

    const handleChangeComplete = (color, event) => {
        settextDecorationColor(color.hex);
    };
    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='style_Container'>
            <span className='titr'>Text-decoration</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <p style={{ textDecoration: `${textDecoration} ${textDecorationStyle} ${textDecorationColor}`, fontSize: 20 }} >Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box responsive_code">
                        <pre>
                            <span className='code_one'>text-decoration</span>
                            {': '}
                            <span className='code_two'>{textDecoration}</span>
                            {' '}
                            <span className='code_three'>{textDecorationStyle}</span>
                            {' '}
                            <span className='code_two'>{textDecorationColor}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={textDecorationCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Type</label>
                        <select onChange={(e) => textDecorationHandler(e)}>
                            <option value="line-through">line-through</option>
                            <option value="underline">underline</option>
                            <option value="overline">overline</option>
                        </select>
                    </div>
                    <div className="input_box">
                        <label>Style</label>
                        <select onChange={(e) => textDecorationStyleHandler(e)}>
                            <option value="solid">solid</option>
                            <option value="dotted">dotted</option>
                            <option value="dashed">dashed</option>
                            <option value="double">double</option>
                            <option value="wavy">wavy</option>
                        </select>
                    </div>
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => textDecorationColorHandler(e)} type="color" />
                        <span>{textDecorationColor}</span>
                    </div>
                    <div className="input_box">
                        <CirclePicker color={textDecorationColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                    <div className="input_box">
                        <SliderPicker color={textDecorationColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}