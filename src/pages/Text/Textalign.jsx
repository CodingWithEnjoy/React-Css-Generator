import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Textalign() {
    const [textAlign, setTextAlign] = useState('center')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const textAlignHandler = (e) => {
        setTextAlign(`${e.target.value}`)
    }

    const textAlignCopyHandler = async () => {
        let text = `text-align: ${textAlign};`
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
            <span className='titr'>Text-align</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box'>
                        <p style={{ textAlign: `${textAlign}`, lineHeight: 10, fontSize: 25 }} >Text-align</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>text-align</span>
                            {': '}
                            <span className='code_three'>{textAlign}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={textAlignCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Type</label>
                        <select onChange={(e) => textAlignHandler(e)}>
                            <option value="center">center</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="justify">justify</option>
                            <option value="end">end</option>
                            <option value="start">start</option>
                        </select>
                        <span>{textAlign}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
