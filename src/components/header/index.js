import React, { memo, useState } from 'react'
import { NavLink } from "react-router-dom";

import { headerLinks } from '../../common/local-data'
import './style.css';

import { SearchOutlined } from '@ant-design/icons'

const imageLogo = require('../../assets/img/logo.png');

export default memo(function Header() {

    return (

        <div className="home">
            <div className='conner'>
                <div className="logo">
                    <a href="/"><img src={imageLogo} /></a>
                    {/* <a href="/"><img src="images/logo.png" /></a> */}
                </div>
                <ul className="nav">
                    {
                        headerLinks.map((item, index) => {
                            return <div key={item.title}>
                                <li className="hov" ><NavLink to={item.link} style={{ textDecoration: 'none' }}>{item.title}</NavLink></li>
                            </div>
                        })
                    }
                </ul>
            </div>
            
        </div>

    )
});
