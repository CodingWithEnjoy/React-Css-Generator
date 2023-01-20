import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import './Filter.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Contrast() {
  const [contrast, setContrast] = useState('100%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const contrastHandler = (e) => {
    setContrast(`${e.target.value}%`)
  }

  const contrastCopyHandler = async () => {
    let text = `filter: contrast(${contrast});`
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
      <span className='titr'>Contrast</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `contrast(${contrast})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>contrast</span>
              (
              <span className='code_three'>{contrast}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={contrastCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => contrastHandler(e)} type="range" max={200} />
            <span>{contrast}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
