import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Opasity() {
    const [opasity, setOpasity] = useState('0.5')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const opasityHandler = (e) => {
        setOpasity(`${e.target.value / 100}`)
    }

    const opasityCopyHandler = async () => {
        let text = `opasity: ${opasity};`
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
            <span className='titr'>Opasity</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div style={{ opacity: `${opasity}` }} className='preview_box'></div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>opasity</span>
                            {': '}
                            <span className='code_three'>{opasity}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={opasityCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>Radius</label>
                        <input onChange={(e) => opasityHandler(e)} type="range" />
                        <span>{opasity}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
