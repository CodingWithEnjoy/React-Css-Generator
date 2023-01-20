import React, { useContext, useState } from 'react'
import './../generalStyle.css'
import copyed from '../../func'
import { MainContext } from '../../components/Context/MainContextProvider'
import { motion } from 'framer-motion'

export default function Backgroundgradient() {
  const [gradientColorOne, setGradientColorOne] = useState('#000')
  const [gradientColorTwo, setGradientColorTwo] = useState('#fff')
  const [gradientRateOne, setGradientRateOne] = useState('0%')
  const [gradientRateTwo, setGradientRateTwo] = useState('100%')
  const [gradientType, setGradientType] = useState('linear-gradient')
  const [gradientAngel, setGradientAngel] = useState('90deg,')
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

  const gradientColorOneChange = (e) => {
    setGradientColorOne(e.target.value)
  }

  const gradientColorTowChange = (e) => {
    setGradientColorTwo(e.target.value)
  }

  const gradientAngelChange = (e) => {
    setGradientAngel(`${e.target.value}deg,`)
  }

  const gradientRateOneChange = (e) => {
    setGradientRateOne(`${e.target.value}%`)
  }

  const gradientRateTwoChange = (e) => {
    setGradientRateTwo(`${e.target.value}%`)
  }

  const gradientTypeChange = (e) => {
    setGradientType(e.target.value)

    if (e.target.value === 'radial-gradient') {
      setGradientAngel('')
    } else {
      setGradientAngel('90deg,')
    }
  }

  const bgColorCopyHandler = async () => {
    let text = `background: ${gradientType}(${gradientAngel} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo});`
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
      <span className='titr'>Background-color</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div style={{ background: `${gradientType}(${gradientAngel} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo})` }} className='preview_box'></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div style={{ wordBreak: 'break-all' }} className="code_box responsive_code">
            <p>
              <span className='code_one'>background</span>
              {': '}
              <span className='code_two'>{gradientType}</span>
              {'('}
              <span className='code_three'>{gradientAngel}</span>
              <span className='code_two'>{gradientColorOne}</span>
              {' '}
              <span className='code_three'>{gradientRateOne}</span>
              {', '}
              <span className='code_two'>{gradientColorTwo}</span>
              {' '}
              <span className='code_three'>{gradientRateTwo}</span>
              {');'}
            </p>
          </div>
          <button onClick={bgColorCopyHandler} className='copyBtn'>
            {copyClickText ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box color_Grid">
            <div className='col_color'>
              <label>color</label>
              <input onChange={(e) => gradientColorOneChange(e)} type="color" />
            </div>
            <dir>
              <label>%</label>
              <input onChange={(e) => gradientRateOneChange(e)} type="number" />
            </dir>
          </div>
          <div className="input_box color_Grid">
            <div className='col_color'>
              <label>color</label>
              <input onChange={(e) => gradientColorTowChange(e)} type="color" />
            </div>
            <div>
              <label>%</label>
              <input onChange={(e) => gradientRateTwoChange(e)} type="number" />
            </div>
          </div>
          {gradientType === 'linear-gradient' &&
            <div className="input_box">
              <label>Angel</label>
              <input onChange={(e) => gradientAngelChange(e)} type="range" max={360} />
              <span>{gradientAngel}</span>
            </div>
          }
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => gradientTypeChange(e)} name="" id="">
              <option value="linear-gradient">linear-gradient</option>
              <option value="radial-gradient">radial-gradient</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
