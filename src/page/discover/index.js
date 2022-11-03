import React, { memo, useState } from 'react';
import { Carousel, Col, Row } from 'antd';
import News from '../News';
import RelatedBusiness from '../RelatedBusiness';

import './index.css'

const image1 = require('../../assets/img/1.jpg');
const image2 = require('../../assets/img/2.jpg');
const image3 = require('../../assets/img/3.jpg');
//默认(划入前图标)
const icon111 = require('../../assets/img/icon1.png');
const icon222 = require('../../assets/img/icon2.png');
const icon333 = require('../../assets/img/icon3.png');
const icon444 = require('../../assets/img/icon4.png');
const icon555 = require('../../assets/img/icon5.png');
//划入后图标
const icon11 = require('../../assets/img/iconHover1.png');
const icon22 = require('../../assets/img/iconHover2.png');
const icon33 = require('../../assets/img/iconHover3.png');
const icon44 = require('../../assets/img/iconHover4.png');
const icon55 = require('../../assets/img/iconHover5.png');
// 了解更多的图标
const long = require('../../assets/img/long.png');
//合作共赢IMG
const Cooperation = require('../../assets/img/tabImg.jpg');

const contentStyle = {
    // height: '160px',
    height: '100%',
    width: '100%',
    lineHeight: '100%',
    textAlign: 'center',
    background: '#364d79',
};
export default memo(function Continer() {
    const [icon1, useIcon1] = useState(icon111);
    const [icon2, useIcon2] = useState(icon222);
    const [icon3, useIcon3] = useState(icon333);
    const [icon5, useIcon5] = useState(icon555);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div>
            {/* banner图 */}
            <div className='homeStyle'>
                <Carousel afterChange={onChange} autoplay={true}>
                    <div>
                        <img src={image1} style={contentStyle} />
                    </div>
                    <div>
                        <img src={image2} style={contentStyle} />
                    </div>
                    <div>
                        <img src={image3} style={contentStyle} />
                    </div>
                </Carousel>

            </div>
            <div className="continer" data-aos="zoom-in">
                {/* 中间部分公司简介 */}
                <Row>
                    {/* left */}
                    <Col span={16} className='leftStyle'>
                        <Row>
                            <Col span={8} >
                                <div style={{ display: 'inline-block', width: '290px' }}>
                                    <h2 className='h2Style'>About CIEG</h2>
                                    <h2 className='h2Style' style={{ color: '#000' }}>走进中仄灏</h2>
                                </div>
                            </Col>
                            <Col span={16} >
                                <div >
                                    <p className='textStyle'    >
                                        中国国际能源集团控股有限公司(英文缩写CIEG )是特大型产业集团,旗下拥有众多控股公司、合资公司、合作企业。集团业务涉及广泛,涵盖原油、煤碳等
                                        传统能源板块,风能发电、光伏电站、甲醇汽油、合铜能源管理、绿色机电管家等新能源板块,科技产业园、能源交易中心、IT综合服务业、海上保税船加油、电
                                        力以及跨国并购重组、投资银行、基础设施建设、生态城市、土地整理、智慧城市等业务。
                                    </p>
                                    <p className='textStyle'>
                                        2019年是新中国成立70周年,是决胜全面建成小康社会第一个百年奋斗目标的关键之年。中国国能在以习近平总书记为核心的党中央
                                        坚强领导下,坚持以习近平新时代中国特色社会主义思想为指导,圆满完成了年的目标任务。截止到2019年底,在中国国能67000名员
                                        工及490名高管团队的共同努力下,中国国能实现总资产(含合资和控股公司) 9630亿元人民币,销售收入(含合资和控股公司) 7921亿元人民币,利税(含合资和控股公司) 302亿元人民币。
                                    </p>

                                </div>
                            </Col>
                        </Row>
                        {/* tab */}
                        <div >
                            <ul className='ulStyle'>
                                <li className='liStyle' onMouseOver={() => useIcon1(icon11)} onMouseOut={() => useIcon1(icon111)}>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src={icon1} />
                                            集团简介
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle' onMouseOver={() => useIcon2(icon22)} onMouseOut={() => useIcon2(icon222)}>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src={icon2} />
                                            集团战略
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle' onMouseOver={() => useIcon3(icon33)} onMouseOut={() => useIcon3(icon333)}>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src={icon3} />
                                            集团价值观
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle' onMouseOver={() => useIcon5(icon55)} onMouseOut={() => useIcon5(icon555)}>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src={icon5} />
                                            经营理念
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col span={8} >
                        <div className='briefIntroduction'>
                            <div>
                                <span className='leaders'>领导简介</span><span className='leadersEnglish'>/ Introduction of Leader</span>
                            </div>
                            <div className='companyProfile'>
                                <img src={image1} style={{ width: '130px', height: '140px', paddingLeft: '20px' }} />
                                <div>
                                    <h2 style={{ fontSize: '26px', color: '#fff', marginLeft: '10px' }}>陈东明</h2>
                                    <p style={{ fontSize: '14px', color: '#fff', marginLeft: '10px' }}>(Chen Wen)</p>
                                    <p style={{ fontSize: '14px', color: '#fff', marginTop: '10px', marginLeft: '10px' }}>重庆中仄灏新能源科技(集团)有限责任公司</p>
                                </div>

                            </div>
                            <div className='leadersDetile'>
                                <p >
                                    中共党员，美国工商管理学院经济学博士；中国人民大学工商管理学硕士；并在长江商学、哈佛商学院、沃顿商学院、北京大学国学班、清华大学网络班进修。
                                </p>
                            </div>
                            <a style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', paddingLeft: '20px', marginTop: '20px' }}>了解更多 <img src={long} /></a>
                        </div>

                    </Col>
                </Row>
            </div>
            {/* banner图 */}
            <div style={{display:'flex',alignItems:'center',justifyContent: 'center',marginBottom:'90px'}}>
            <img src={Cooperation}  />
           </div>
               {/* 合作共赢 */}
               <RelatedBusiness />
            {/* 新闻中心 */}
           <News />
       
        </div>
    )
})