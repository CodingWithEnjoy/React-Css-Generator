import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function TranslateX() {
    const [translateX, setTranslateX] = useState('0')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const translateXHandler = (e) => {
        setTranslateX(`${e.target.value}px`)
    }

    const translateXCopyHandler = async () => {
        let text = `transform: scaleY(${translateX});`
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
            <span className='titr'>TranslateX</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ transform: `translateX(${translateX})` }} className="box_Shadow_example"></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>transform</span>
                            {': '}
                            <span className='code_two'>translateX</span>
                            {'('}
                            <span className='code_three'>{translateX}</span>
                            {')'}
                            ;
                        </pre>
                    </div>
                    <button onClick={translateXCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => translateXHandler(e)} type="range" min={-100} max={100} />
                        <span>{translateX}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
