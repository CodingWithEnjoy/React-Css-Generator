import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function SkewX() {
    const [skewX, setSkewX] = useState('0')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const skewXYHandler = (e) => {
        setSkewX(`${e.target.value}deg`)
    }

    const skewXCopyHandler = async () => {
        let text = `transform: skewX(${skewX});`
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
            <span className='titr'>SkewX</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ transform: `skewX(${skewX})` }} className="box_Shadow_example"></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>transform</span>
                            {': '}
                            <span className='code_two'>skewX</span>
                            {'('}
                            <span className='code_three'>{skewX}</span>
                            {')'}
                            ;
                        </pre>
                    </div>
                    <button onClick={skewXCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => skewXYHandler(e)} type="range" min={-60} max={60} />
                        <span>{skewX}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
