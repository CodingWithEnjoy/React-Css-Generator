import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function FontSize() {
    const [fontsize, setFontsize] = useState('50px')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const fontsizeHandler = (e) => {
        setFontsize(`${e.target.value}px`)
    }

    const fontsizeCopyHandler = async () => {
        let text = `font-size: ${fontsize};`
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
            <span className='titr'>Font-size</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <p style={{ fontSize: `${fontsize}` }} >Font-size</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>font-size</span>
                            {': '}
                            <span className='code_three'>{fontsize}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={fontsizeCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => fontsizeHandler(e)} type="range" max={70} />
                        <span>{fontsize}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
