import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import './Filter.css'
import copyed from '../../func'

export default function Saturate() {
  const [saturate, setSaturate] = useState('100%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const saturateHandler = (e) => {
    setSaturate(`${e.target.value}%`)
  }

  const saturateCopyHandler = async () => {
    let text = `filter: saturate(${saturate});`
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
      <span className='titr'>Saturate</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `saturate(${saturate})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>saturate</span>
              (
              <span className='code_three'>{saturate}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={saturateCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => saturateHandler(e)} type="range" max={300} />
            <span>{saturate}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}