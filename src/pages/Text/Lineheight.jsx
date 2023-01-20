import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Lineheight() {
    const [lineHeight, setLineHeight] = useState('30px')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const lineHeightHandler = (e) => {
        setLineHeight(`${e.target.value}px`)
    }

    const lineHeightCopyHandler = async () => {
        let text = `line-height: ${lineHeight};`
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
            <span className='titr'>Line-height</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <p style={{ lineHeight: `${lineHeight}`, padding: 20 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis et itaque saepe suscipit autem architecto voluptatibus libero id impedit! . Sunt omnis et itaque saepe suscipit autem architecto voluptatibus libero id impedit!</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>line-height</span>
                            {': '}
                            <span className='code_three'>{lineHeight}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={lineHeightCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => lineHeightHandler(e)} type="range" max={55} />
                        <span>{lineHeight}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
