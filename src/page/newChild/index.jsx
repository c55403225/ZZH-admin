import React, { memo, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Row } from 'antd';
import Cards from '../../components/card';
import './index.css'



const NewsChild = (props) => {
 
  

    return (
        <div className='news' >
         <div className="newChild">
                <h2>河南省省长尹弘会见吴主席</h2>
                <p>来 源 :  &nbsp;&nbsp;&nbsp;&nbsp; 浏览量 : 2293</p>
                <p>
                2020年9月28日，河南省省长尹弘在郑州会见中国国际能源集团党委书记、董事局主席，中国国能领航城市建设投资有限公司董事局主席，世界中国工商总会主席吴国迪。

吴主席表示，中原大地是中华民族数千年璀璨文化的摇篮，在中国共产党的领导下，发生了翻天覆地的变化，成功实现了由传统农业大省向全国重要的经济大省、新兴工业大省的转变。当前河南迎来了黄河流域生态保护和高质量发展、促进中部地区崛起两大国家战略，以及大运河文化保护传承利用、郑州国家中心城市建设、中原城市群都市圈建设、乡村振兴等多个国家规划叠加的难得历史机遇。

中国国际能源集团控股有限公司是特大型产业集团，总资产（含合资和控股公司）9630亿元人民币。在能源、电力交易、基础设施建设、生态治理、科技产业园、土地整理、智慧城市、电力云等领域均有布局。2019年中国国能连续六年入选全球新能源企业500强并荣登榜单第32位。中国国能下属中国国能领航城市建设投资有限公司刚刚荣登“2020中国企业500强”榜单第326位。

2019年，按照习近平总书记在中央经济工作会议上关于“中央企业要在国家生态建设中担当重任”的指示精神，在国务院国资委的支持下，中国国能与大型中央企业中国诚通集团共同投资发起设立中国诚通生态有限公司，并经国务院国有企业改革领导小组批准成为国有企业混合所有制改革第四批试点企业。借助于中国诚通集团在中央企业中最强大的资本运营平台，在生态环境部直属中国环境科学研究院、水利部直属中国水利水电研究院、住建部直属中国城市规划院的合作支持下，中国国能与中国诚通生态强强联合，在水环境综合整治、绿地生态系统、智慧园林、城市基础设施建设、土壤与矿山修复等领域均取得重大发展。

我们将城市建设、产业投资、资本运营相融合，采用的是中国国能和中国诚通首创的EPC+F建设模式。我们与郑州市委市政府领导进行多次会晤，表达了在郑州投资开发的意愿，并承诺在郑州投资额达到200亿元人民币。

尹弘省长表示，当前河南正在按照习近平总书记提出的构建双循环新发展格局的重大要求，谋划和确立“十四五”时期河南发展的战略取向。谋划河南未来发展，不仅要明确战略，还要讲究策略，河南将把优化营商环境放在第一位，持续深化“放管服”改革，压缩投资审批时间，加强事中事后监管，打造法治化环境，加强知识产权保护。同时，还将进一步强化服务意识，为企业在豫投资兴业提供全过程的跟踪服务，当好“店小二”；强化人力资源保障，为企业提供研发等科技人才、高素质职业技能人才和劳动力支撑。

希望中国国能以发展的眼光和洞察力，深刻分析把握河南未来发展机遇和优势，立足自身条件，加大对河南的投资布局力度，拓展深化合作领域，在共享发展红利中助推河南加快转型发展，实现经济由大变强的转变。
                </p>
            </div>
        </div>
    )
}
export default NewsChild