import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import './index.css'

const icon = require('../../assets/img/jiantou.png')
const phone = require('../../assets/img/phone.png')

const LeftMenu = (props) => {
const [defaultValue,setDefaultValue] = useState(window.location.pathname.substring(1))
    const items = [
        { label: '集团简介', key: 'groupProfile' }, // 菜单项务必填写 key
        { label: '集团视频', key: 'groupIdeo' },
        { label: '集团价值观', key: 'groupValues' },
        { label: '集团战略', key: 'groupStrategy' },
        { label: '经营理念', key: 'managementIdea' },
        { label: '新闻中心', key: 'newsCenter' },
        { label: '业务领域', key: 'businessArea' },
        { label: '联系我们', key: 'contactUs' },
    ];

    let { onFnc } = props;
    console.log(onFnc, 'onFnc');
    const homePath = window.location.pathname.substring(1) || undefined;
    useEffect(() => {
        // setDefaultValue(window.location.pathname.substring(1))
        // console.log(window.location.pathname.substring(1), window.location.pathname.substring(1) === 'groupProfile', 'getParamsNew(id)');
    }, [])
    const onClickFnc = (item) => {
        console.log('click ', item);
       
        onFnc(item)
    };

    return (
        <div >
            <div className='layout' >
                <div >
                    <Menu className='menu'
                        defaultSelectedKeys={[defaultValue]}
                    >
                        {items.map((item) => {
                            return <Menu.Item className='menuChild' style={{ height: '80px', lineHeight: '80px', position: 'relative', }} onClick={() => onClickFnc(item)} key={item.key}>{item.label} <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}><img src={icon} /></span></Menu.Item>
                        })}
                    </Menu>
                    <div className="zylx">
                        <div className="lxb">
                            <img src={phone} />
                            <h2>联系方式</h2>
                        </div>
                        <div className="cont">
                            <p>
                                电话：010-85871616
                            </p>
                            <p>
                                传真：010-85871617
                            </p>
                            <p>
                                邮箱：cieg@cieg.com.cn
                            </p>
                            <p>
                                网址：www.cieg.com.cn
                            </p>
                            <p>
                                地址：重庆市渝北区联盛大厦
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LeftMenu;
