import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import './Filter.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Grayscale() {
  const [grayscale, setGrayscale] = useState('50%')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const grayscaleHandler = (e) => {
    setGrayscale(`${e.target.value}%`)
  }

  const grayscaleCopyHandler = async () => {
    let text = `filter: grayscale(${grayscale});`
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
      <span className='titr'>Grayscale</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ filter: `grayscale(${grayscale})` }} className='preview_box sepia_preview'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className='code_one'>filter</span>
              {': '}
              <span className='code_two'>grayscale</span>
              (
              <span className='code_three'>{grayscale}</span>
              )
              ;
            </pre>
          </div>
          <button onClick={grayscaleCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => grayscaleHandler(e)} type="range" />
            <span>{grayscale}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
