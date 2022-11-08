import React, { memo, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Row } from 'antd';
import Cards from '../../components/card';
import './index.css'

const items = [
    {
        label: '公司动态',
        key: 'dynamic',
    },
    {
        label: '媒体报道',
        key: 'report',
    },
    {
        label: '国内资讯',
        key: 'domesticInformation',
    },
    {
        label: '国际咨询',
        key: 'internationalConsulting',
    },

];
const dynamic = [
    {
        data: '19',
        time: '2015-12-21',
        title: '国际能源署上调2020年全球天然气需求预测'
    },
    {
        data: '19',
        time: '2015-12-21',
        title: '喜讯！中国国能领航城市建设有限公司荣耀登榜“2020中国企业500强榜单”'
    },
    {
        data: '9',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '122',
        time: '2015-12-21',
        title: '国务院国资委党委书记、主任郝鹏会见吴主席'
    },
    {
        data: '25',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '31',
        time: '2017-12-21',
        title: '康菲石油称全球原油需求正复原 '
    }
];
const report = [
    {
        data: '19',
        time: '2015-12-21',
        title: 'report'
    },
    {
        data: '19',
        time: '2015-12-21',
        title: '喜讯！中国国能领航城市建设有限公司荣耀登榜“2020中国企业500强榜单”'
    },
    {
        data: '9',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '122',
        time: '2015-12-21',
        title: '国务院国资委党委书记、主任郝鹏会见吴主席'
    },
    {
        data: '25',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '31',
        time: '2017-12-21',
        title: '康菲石油称全球原油需求正复原 '
    }
];
const domesticInformation = [
    {
        data: '19',
        time: '2015-12-21',
        title: 'domesticInformation'
    },
    {
        data: '19',
        time: '2015-12-21',
        title: '喜讯！中国国能领航城市建设有限公司荣耀登榜“2020中国企业500强榜单”'
    },
    {
        data: '9',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '122',
        time: '2015-12-21',
        title: '国务院国资委党委书记、主任郝鹏会见吴主席'
    },
    {
        data: '25',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '31',
        time: '2017-12-21',
        title: '康菲石油称全球原油需求正复原 '
    }
];
const internationalConsulting = [
    {
        data: '19',
        time: '2015-12-21',
        title: 'internationalConsulting'
    },
    {
        data: '19',
        time: '2015-12-21',
        title: '喜讯！中国国能领航城市建设有限公司荣耀登榜“2020中国企业500强榜单”'
    },
    {
        data: '9',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '122',
        time: '2015-12-21',
        title: '国务院国资委党委书记、主任郝鹏会见吴主席'
    },
    {
        data: '25',
        time: '2015-12-21',
        title: '中华人民共和国第十三届全国人民代表大会常务委员会副委员长，中国科学院副院长丁仲礼会见吴主'
    },
    {
        data: '31',
        time: '2017-12-21',
        title: '康菲石油称全球原油需求正复原 '
    }
]
const News = (props) => {
    const [current, setCurrent] = useState('mail');
    const [value, setValue] = useState(dynamic);
    const onClick = (e) => {

        //tab切换
        if (e.key === 'dynamic') setValue(dynamic);
        if (e.key === 'report') setValue(report);
        if (e.key === 'domesticInformation') setValue(domesticInformation);
        if (e.key === 'internationalConsulting') setValue(internationalConsulting);
        console.log('click', e.key);

    };
    console.log(props, 'props1');
    const scrollFnc = (e) => {
        console.log(e, 'e');
    }
    return (
        <div className='news' onScroll={(e) => scrollFnc(e)}>
            <div style={{ position: 'relative' }}>
                <div style={{ display: 'inline-block', paddingLeft: '5%' }}>
                    <h2 className='h2Style'>News Center</h2>
                    <h2 className='h2Style' style={{ color: '#000' }}>新闻中心</h2>
                </div>
                <div style={{ position: 'absolute', top: '50%', right: '15%' }}>
                    <Menu onClick={(e) => onClick(e)} selectedKeys={[current]} mode="horizontal" items={items} style={{ background: 'rgba(0,0,0,.005)' }} />
                </div>
            </div>
            <Row>
                <Cards value={value} key={value} {...props} onClick={() => console.log('6666')} />
            </Row>
        </div>
    )
}
export default News