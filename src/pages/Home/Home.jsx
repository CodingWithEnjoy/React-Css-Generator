import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Datas from '../../Datas'
import { motion } from 'framer-motion'
import { MainContext } from '../../components/Context/MainContextProvider'
import {
    AwesomeButton,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import './Button.css'
import GitHubLink from '../../components/GithubLink/GitHubLink'

export default function Home() {
    const { mainVariant, closeMenu } = useContext(MainContext)

    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='home_Container'>
            {Datas.map((data) => (
                <div key={data.id} className="group_container">
                    <span className="title_group">{data.title}</span>
                    <div className="group_btn">
                        {data.routeAddress.map((routes) => (
                            <Link onClick={closeMenu} key={routes.id} to={routes.route}>
                                <AwesomeButton>{routes.name}</AwesomeButton>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <GitHubLink />
        </motion.div>
    )
}


