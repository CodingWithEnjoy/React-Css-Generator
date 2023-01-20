import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import './Filter.css'
import copyed from '../../func'

export default function Sepia() {
  const [sepia, setSepia] = useState('10%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const sepiaHandler = (e) => {
    setSepia(`${e.target.value}%`)
  }

  const sepiaCopyHandler = async () => {
    let text = `filter: sepia(${sepia});`
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
      <span className='titr'>Sepia</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `sepia(${sepia})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>sepia</span>
              (
              <span className='code_three'>{sepia}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={sepiaCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Radius</label>
            <input onChange={(e) => sepiaHandler(e)} type="range" />
            <span>{sepia}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
