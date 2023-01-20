import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function SkewY() {
    const [skewY, setSkewY] = useState('0')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const skewYHandler = (e) => {
        setSkewY(`${e.target.value}deg`)
    }

    const skewYCopyHandler = async () => {
        let text = `transform: skewY(${skewY});`
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
            <span className='titr'>SkewY</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ transform: `skewY(${skewY})` }} className="box_Shadow_example"></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>transform</span>
                            {': '}
                            <span className='code_two'>skewY</span>
                            {'('}
                            <span className='code_three'>{skewY}</span>
                            {')'}
                            ;
                        </pre>
                    </div>
                    <button onClick={skewYCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => skewYHandler(e)} type="range" min={-60} max={60} />
                        <span>{skewY}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
