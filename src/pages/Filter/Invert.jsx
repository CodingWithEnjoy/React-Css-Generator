import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import './Filter.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Invert() {
  const [invert, setInvert] = useState('100%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const invertHandler = (e) => {
    setInvert(`${e.target.value}%`)
  }

  const invertCopyHandler = async () => {
    let text = `filter: invert(${invert});`
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
      <span className='titr'>Invert</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `invert(${invert})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>invert</span>
              (
              <span className='code_three'>{invert}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={invertCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => invertHandler(e)} type="range" />
            <span>{invert}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
