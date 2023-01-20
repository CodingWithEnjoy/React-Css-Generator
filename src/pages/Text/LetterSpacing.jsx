import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function LetterSpacing() {
    const [letterSpacing, setLetterSpacing] = useState('15px')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const letterSpacingHandler = (e) => {
        setLetterSpacing(`${e.target.value}px`)
    }

    const letterSpacingCopyHandler = async () => {
        let text = `letter-spacing: ${letterSpacing};`
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
            <span className='titr'>Letter-Spacing</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <p style={{ letterSpacing: `${letterSpacing}` }} >Letter-Spacing</p>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>letter-spacing</span>
                            {': '}
                            <span className='code_three'>{letterSpacing}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={letterSpacingCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Size</label>
                        <input onChange={(e) => letterSpacingHandler(e)} type="range" max={15} />
                        <span>{letterSpacing}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
