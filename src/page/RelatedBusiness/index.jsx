import React, { memo, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Row } from 'antd';
import Cards from '../../components/card';
import './index.css'


const imageUrl = require('../../assets/img/eco.png')


export default memo(function RelatedBusiness() {
    return (
        <div >
                  {/*  */}
      <section id="scenarios" className="home-sec scenarios show">
        <div className="inner-width">
          <h2 className="home-sec-title">Business Area</h2>
          <p className="home-sec-desc">业务领域</p>
          <div className="scenarios-desc">
            <img src={imageUrl} className="img" alt="全渠道全场景电商解决方案，助力企业打造电商生态" />
            <div className="scenarios-part client">
              <h3 className="part-title">传统能源</h3>
              <p className="part-desc">能源新时代</p>
              <ul className="part-ls">
                <li className="part-item">系统日志</li>
                <li className="part-item">同步软件</li>
                <li className="part-item">单人密价</li>
                <li className="part-item">一键升级</li>

              </ul>
            </div>
            <div className="scenarios-part operate">
              <h3 className="part-title">购物领域</h3>
              <p className="part-desc">完善的购物/家政助力企业,帮助家庭</p>
              <ul className="part-ls">
              <li className="part-item">购物商城</li>
              <li className="part-item">家政服务</li>
                <li className="part-item">接送服务</li>  
                <li className="part-item">便利家庭</li>
              </ul>
            </div>
            <div className="scenarios-part join">
              <h3 className="part-title">新能源</h3>
              <p className="part-desc">光伏新时代,助力能源改革</p>
              <ul className="part-ls">
                <li className="part-item">光伏发电</li>
                <li className="part-item">光伏电梯 </li>
                <li className="part-item">助力新旧小区电梯时代</li>
                <li className="part-item">推动新能源改革</li>

              </ul>
            </div>
            <div className="scenarios-part manage">
              <h3 className="part-title">分子水</h3>
              <p className="part-desc">推动水质改革,喝放心水,放心生活</p>
              <ul className="part-ls">
                <li className="part-item">水质改革</li>
                <li className="part-item">放心美容水</li>
                <li className="part-item">生活的优质水</li>
                <li className="part-item">水中贵族平常价</li>

              </ul>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
})