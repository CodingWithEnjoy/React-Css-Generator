import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function ScaleY() {
    const [scaleY, setScaleX] = useState('1')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const scaleYHandler = (e) => {
        setScaleX(`${e.target.value / 100}`)
    }

    const scaleYCopyHandler = async () => {
        let text = `transform: scaleY(${scaleY});`
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
            <span className='titr'>ScaleY</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ transform: `scaleY(${scaleY})` }} className="box_Shadow_example"></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>transform</span>
                            {': '}
                            <span className='code_two'>scaleY</span>
                            {'('}
                            <span className='code_three'>{scaleY}</span>
                            {')'}
                            ;
                        </pre>
                    </div>
                    <button onClick={scaleYCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => scaleYHandler(e)} type="range" max={200} />
                        <span>{scaleY}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
