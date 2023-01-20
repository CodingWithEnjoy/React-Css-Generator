import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import './Filter.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function HeuRotate() {
  const [heuRotate, setHeuRotate] = useState('50deg')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const heuRotateHandler = (e) => {
    setHeuRotate(`${e.target.value}deg`)
  }

  const heuRotateCopyHandler = async () => {
    let text = `filter: hue-rotate(${heuRotate});`
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
      <span className='titr'>Heu-Rotate</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `hue-rotate(${heuRotate})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>hue-rotate</span>
              (
              <span className='code_three'>{heuRotate}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={heuRotateCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => heuRotateHandler(e)} type="range" max={200} />
            <span>{heuRotate}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
