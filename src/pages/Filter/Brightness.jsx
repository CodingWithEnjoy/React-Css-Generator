import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import './Filter.css'
import copyed from '../../func'

export default function Brightness() {
  const [brightness, setBrightness] = useState('10%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const brightnessHandler = (e) => {
    setBrightness(`${e.target.value}%`)
  }

  const brightnessCopyHandler = async () => {
    let text = `filter: brightness(${brightness});`
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
      <span className='titr'>Brightness</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `brightness(${brightness})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>brightness</span>
              (
              <span className='code_three'>{brightness}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={brightnessCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => brightnessHandler(e)} type="range" />
            <span>{brightness}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
