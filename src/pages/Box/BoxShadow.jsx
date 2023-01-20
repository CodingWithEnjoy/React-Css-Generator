import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function BoxShadow() {
    const [boxshadowblur, setBoxshadowblur] = useState('10px')
    const [boxShadowColor, setBoxShadowColor] = useState('#000')
    const [boxShadowHorizontal, setBoxShadowHorizontal] = useState('10px')
    const [boxVertical, setBoxVertical] = useState('10px')
    const [boxSpread, setBoxSpread] = useState('10px')
    const [boxInset, setBoxInset] = useState('')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const boxColorChange = (e) => {
        setBoxShadowColor(e.target.value)
    }

    const boxSpreadHandler = (e) => {
        setBoxSpread(`${e.target.value}px`)
    }

    const boxBlurHandler = (e) => {
        setBoxshadowblur(`${e.target.value}px`)
    }

    const boxHorizontalHandler = (e) => {
        setBoxShadowHorizontal(`${e.target.value}px`)
    }

    const boxVerticalHandler = (e) => {
        setBoxVertical(`${e.target.value}px`)
    }

    const boxInsetHandler = (e) => {
        setBoxInset(e.target.value)
    }

    const boxShadowCopyHandler = async () => {
        let text = `box-shadow: ${boxShadowHorizontal} ${boxVertical} ${boxshadowblur} ${boxSpread} ${boxShadowColor} ${boxInset};`
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
            <span className='titr'>Box-Shadow</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div className='preview_box drop_preview'>
                        <div style={{ boxShadow: `${boxShadowHorizontal} ${boxVertical} ${boxshadowblur} ${boxSpread} ${boxShadowColor} ${boxInset}` }} className='box_Shadow_example'></div>
                    </div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box responsive_code">
                        <pre>
                            <span className='code_one'>box-shadow</span>
                            {': '}
                            <span className='code_three'>{boxShadowHorizontal}</span>
                            {' '}
                            <span className='code_two'>{boxVertical}</span>
                            {' '}
                            <span className='code_three'>{boxshadowblur}</span>
                            {' '}
                            <span className='code_two'>{boxSpread}</span>
                            {' '}
                            <span className='code_three'>{boxShadowColor}</span>
                            {' '}
                            <span className='code_two'>{boxInset}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={boxShadowCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>color</label>
                        <input onChange={(e) => boxColorChange(e)} type="color" />
                    </div>
                    <div className="input_box">
                        <label>Blur</label>
                        <input onChange={(e) => boxBlurHandler(e)} type="range" />
                        <span>{boxshadowblur}</span>
                    </div>
                    <div className="input_box">
                        <label>Horizontal offset</label>
                        <input onChange={(e) => boxHorizontalHandler(e)} type="range" min={-100} max={100} />
                        <span>{boxShadowHorizontal}</span>
                    </div>
                    <div className="input_box">
                        <label>Vertical offset</label>
                        <input onChange={(e) => boxVerticalHandler(e)} type="range" min={-100} max={100} />
                        <span>{boxVertical}</span>
                    </div>
                    <div className="input_box">
                        <label>Spread</label>
                        <input onChange={(e) => boxSpreadHandler(e)} type="range" min={-100} max={100} />
                        <span>{boxSpread}</span>
                    </div>
                    <div className="input_box">
                        <label>Inset</label>
                        <select onChange={(e) => boxInsetHandler(e)}>
                            <option value="">No</option>
                            <option value="inset">Yes</option>
                        </select>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
