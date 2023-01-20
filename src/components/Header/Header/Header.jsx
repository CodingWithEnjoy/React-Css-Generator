import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { MainContext } from '../../Context/MainContextProvider'

export default function Header() {
    const { menuActive, setMenuActive, } = useContext(MainContext)

    const openMenu = () => {
        setMenuActive(prevState => !prevState)
    }

    return (
        <header className='header'>
            <Link to={'/'} className='logo'><span style={{ color: 'rgba(197, 18, 205, 1)' }}>Css</span> Generator</Link>
            <div className='icon_box_Header'>
                <div onClick={openMenu}>
                    {!menuActive ? (
                        <FiMenu className='menu_Icon' />
                    ) : (
                        <GrClose className='menu_Icon' />
                    )}
                </div>
            </div>
        </header>
    )
}
