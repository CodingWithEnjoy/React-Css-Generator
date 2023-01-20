import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContextProvider'
import { Link } from 'react-router-dom'
import './MenuBar.css'
import Datas from '../../Datas'

export default function MenuBar() {
    const { menuActive, closeMenu } = useContext(MainContext)

    return (
        <div className={`menu ${menuActive && 'active'}`}>
            <Link onClick={closeMenu} to={'/'} className='btn_Menu'>Home</Link>
            {Datas.map((data) => (
                <div key={data.id} className="group_Menu">
                    <span className="title_Menu">{data.title}</span>
                    <div className="Menu_btn">
                        {data.routeAddress.map((routes) => (
                            <Link key={routes.id} onClick={closeMenu} to={routes.route} className='btn_Menu'>{routes.name}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
