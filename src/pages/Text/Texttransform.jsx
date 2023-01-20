import React, { useContext, useState } from 'react'
import { MainContext } from '../../components/Context/MainContextProvider'
import './../generalStyle.css'
import { motion } from 'framer-motion'
import copyed from '../../func'

export default function Texttransform() {
  const [textTransform, settextTransform] = useState('none')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const textTransformHandler = (e) => {
    settextTransform(`${e.target.value}`)
  }

  const textTransformCopyHandler = async () => {
    let text = `text-transform: ${textTransform};`
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
      <span className='titr'>Text-transform</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className='preview_box drop_preview'>
            <p style={{ textTransform: `${textTransform}`, fontSize: 20 }} >Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box responsive_code">
            <pre>
              <span className='code_one'>text-transform</span>
              {': '}
              <span className='code_two'>{textTransform}</span>
              ;
            </pre>
          </div>
          <button onClick={textTransformCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => textTransformHandler(e)}>
              <option value="none">none</option>
              <option value="uppercase">uppercase</option>
              <option value="capitalize">capitalize</option>
              <option value="lowercase">lowercase</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
