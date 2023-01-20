import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function BorderRadius() {
    const [borderRadius, setBorderRadius] = useState('50px')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const borderRadiusHandler = (e) => {
        setBorderRadius(`${e.target.value}px`)
    }

    const borderCopyHandler = async () => {
        let text = `border-radius: ${borderRadius}`
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
            <span className='titr'>Border-Radius</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div style={{ borderRadius: `${borderRadius}` }} className='preview_box'></div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>border-radius</span>
                            {': '}
                            <span className='code_three'>{borderRadius}</span>
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
                        <label>Radius</label>
                        <input onChange={(e) => borderRadiusHandler(e)} type="range" />
                        <span>{borderRadius}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
