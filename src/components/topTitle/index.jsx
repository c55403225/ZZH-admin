import React, { useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import './index.css'

const icon =require('../../assets/img/jiantou.png')
const LeftMenu = () => {
    const items = [
        { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
        { label: '菜单项二', key: 'item-2' },
        {
            label: '子菜单',
            key: 'submenu',

        },
    ];
    useEffect(() => {

    }, [])
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div >
            <div className='layout' >
            <div >
                <Menu className='menu' style={{   background:'#ddd'}}>
                  {items.map((item)=>{
                    return  <Menu.Item className='menuChild' style={{height: '80px',lineHeight: '80px',position:'relative'}}>{item.label} <span style={{position:'absolute',right:'20px',top:'50%',transform:'translateY(-50%)'}}><img src={icon} /></span></Menu.Item>
                  })}
                </Menu>
            </div>
            
            </div>
        </div>
    )
}
export default LeftMenu;
