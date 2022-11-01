import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

import { headerLinks } from '../../common/local-data'
import './style.css';
import { Carousel, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const imageLogo = require('../../assets/img/logo.png');
const image1 = require('../../assets/img/1.jpg');
const image2 = require('../../assets/img/2.jpg');
const image3 = require('../../assets/img/3.jpg');

const contentStyle = {
    // height: '160px',
    height: '100%',
    width: '100%',
    lineHeight: '100%',
    textAlign: 'center',
    background: '#364d79',
};
const liArr = [
    {
        name: '首页',
        index: 0
    },
    {
        name: '集团简介',
        index: 1
    },
    {
        name: '经营理念',
        index: 2
    },
    {
        name: '业务领域',
        index: 3
    },
    {
        name: '联系我们',
        index: 4
    }
]
export default memo(function Header() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (

        <div className="home">
            <div className='conner'>
                <div className="logo">
                    <a href="/"><img src={imageLogo} /></a>
                    {/* <a href="/"><img src="images/logo.png" /></a> */}
                </div>
                <ul className="nav">
                    {
                        liArr.map((item, index) => {
                            return <li className="hov" ><a href="Contact.asp" style={{ textDecoration: 'none' }}>{item.name}</a></li>
                        })
                    }
                </ul>
            </div>
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
                    <div style={{display:'inline-block',width:'290px'}}>
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
                                <li className='liStyle'>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src=''/>
                                        集团简介
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src='' />
                                            集团战略
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src='' />
                                            集团价值观
                                        </span>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' className='aStyle'>
                                        <span className='spanStyle'>
                                            <img src='' />
                                            经营理念
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </Col>
                    {/* tab */}
                    {/* <div >
                            <ul className='ulStyle'>
                                <li className='liStyle'>
                                    <a href='' className='aStyle'>
                                        <p style={{display:'inline-block'}}>
                                            <img src='' />
                                            集团简介
                                        </p>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' >
                                        <p>
                                            <img src='' />
                                            集团战略
                                        </p>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' >
                                        <p>
                                            <img src='' />
                                            集团价值观
                                        </p>
                                    </a>
                                </li>
                                <li className='liStyle'>
                                    <a href='' >
                                        <p>
                                            <img src='' />
                                            经营理念
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    {/* right */}
                    <Col span={8} className='rightStyle'>
                        右边部分
                    </Col>
                </Row>

            </div>
        </div>

    )
});
