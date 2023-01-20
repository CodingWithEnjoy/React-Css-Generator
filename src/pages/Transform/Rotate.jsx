import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Rotate() {
    const [rotate, setRotate] = useState('0')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const rotateYHandler = (e) => {
        setRotate(`${e.target.value}deg`)
    }

    const rotateCopyHandler = async () => {
        let text = `transform: rotate(${rotate});`
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
            <span className='titr'>Rotate</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ transform: `rotate(${rotate})` }} className="box_Shadow_example"></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>transform</span>
                            {': '}
                            <span className='code_two'>rotate</span>
                            {'('}
                            <span className='code_three'>{rotate}</span>
                            {')'}
                            ;
                        </pre>
                    </div>
                    <button onClick={rotateCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => rotateYHandler(e)} type="range" min={-360} max={360} />
                        <span>{rotate}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
