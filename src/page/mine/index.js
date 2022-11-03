import React, { memo, useState } from 'react'
import LeftMenu from '../../components/leftMenu';
import Ditu from '../../components/ditu.js'
import './index.css';
import { Map, InfoWindow } from 'react-amap';
const imgUrl = require('../../assets/img/tabImg.jpg');
const zzh = require('../../assets/video/zzh.mp4');
const Mine = (props) => {
    console.log(props, 'psops');
    const [selectData, setSeState] = useState('groupProfile');
    const center = {
        longitude: 106.566476,
        latitude: 29.684608
    };
    const offset = [-5, -5];
    const position = {
        longitude: 106.566476,
        latitude: 29.684608
    }

    const size = {
        width: 200,
        height: 100
    }
    const visible = true;
    const onFnc = (value) => {
        console.log(value, 'value');
        setSeState(value.key)
    }
    return (
        <div >
            <div style={{ height: '350px' }}>
                <img src={imgUrl} className='imgStyle' />
            </div>
            <div className='layout' >

                <LeftMenu onFnc={(value) => onFnc(value)} />
                {/* 集团简介 */}
                {selectData === 'groupProfile' && <div className="abr">
                    <div className="abrb">
                        <h2>集团简介</h2>
                        <p><img src="images/ab_08.png" />当前位置：网站首页 &gt;&gt; 走进国能 &gt;&gt; 集团简介</p>
                    </div>
                    <div className="abcont">
                        中国国际能源集团控股有限公司（英文缩写CIEG）是特大型产业集团，旗下拥有众多控股公司、合资公司、合作企业。集团业务涉及广泛，涵盖原油、煤碳等传统能源板块，风能发电、光伏电站、甲醇汽油、合同能源管理、绿色机电管家等新能源板块，科技产业园、能源交易中心、IT综合服务业、海上保税船加油、电力云以及跨国并购重组、投资银行、基础设施建设、生态城市、土地整理、智慧城市等业务。<br />
                        <br />
                        <span>  </span>2019年是新中国成立70周年，是决胜全面建成小康社会第一个百年奋斗目标的关键之年。中国国能在以习近平总书记为核心的党中央坚强领导下，坚持以习近平新时代中国特色社会主义思想为指导，圆满完成了全年的目标任务。截止到2019年底，在中国国能67000名员工及490名高管团队的共同努力下，中国国能实现总资产（含合资和控股公司）9630亿元人民币，销售收入（含合资和控股公司）7921亿元人民币，利税（含合资和控股公司）302 亿元人民币。<br />
                        <br />
                        <span>  </span>在传统能源领域，我们稳扎稳打。目前，我们拥有原油开采权益29亿吨，2019年我们的合资公司生产原油共计2500万吨；我们与中石油合资在青海共同开发虎头崖油田，拥有5亿吨开采权益；我们正在与世界级能源企业在开发煤电一体化项目领域全面合作；我们的合作公司煤炭产量达1亿吨，国内拥有储量约500亿吨。<br />
                        <br />
                        <span>  </span>在新能源领域，我们精益求精。2019年中国国能连续六年入选全球新能源企业500强并荣登榜单第32位。“合同能源管理”项目为客户提供了绿色集成一体化解决方案；“电厂余热深度回收利用及粉尘减排”项目帮助煤电厂减少90%粉尘排放；“绿色机电管家技术”有效降低50%建筑综合能耗， “上海中心大厦”、“阿里巴巴总部大楼”、“腾讯大厦”、“北京新浪总部大厦”、“海澜之家电商总部”等均为我们的成功范例；“光伏电站”项目不仅提供高品质低成本光伏产品还为客户实现全程无忧运营及维护，预计未来10年内将在新疆、宁夏、内蒙古、河北、浙江等地规划建设共计25个G瓦的电站，总投资额将达到2000亿元人民币；“甲醇汽油”技术国内领先，中国国能与中国科学院控股有限公司紧密合作，整合全球甲醇产业链；“LNG供气”技术成熟，配合全国“煤改气”进程，仅2019年我们的天然气供应量就占到浙江省全省的20%。<br />
                        <br />
                        <span>  </span>在电力交易领域，我们开拓进取，实现零的突破。电力改革是国家能源供给侧改革的重要组成部分，对实现我国经济的可持续发展起到至关重要的作用。电力交易中心是电力体制改革中关键的探索性结构，是能源供给侧改革过程中电力市场化进程的重要一步。经国家有关部门批准，我们成功取得首张电力交易牌照，为未来能源交易中心的全面发展铺平道路。<br />
                        <br />
                        <span>  </span>科学技术是第一生产力,创新是引领发展的第一动力。我们遵循“五位一体”布局，坚持执行“生产、生态、生活”三生平衡的设计理念，积极响应国家“大众创新，万众创业”的号召，和合作伙伴在全国范围内共同打造科技产业园项目。科技产业园充分结合我们的新能源技术优势，运用前沿科技改变能源供给结构，建设节能低碳的科技创新示范园，有效平衡经济利益与生态保护的关系。2019年中国国能在全国新建的科技产业园总建筑面积达7000万平方米。预计到2025年，中国国能对科技产业园的投资建设面积将累计达到5亿平方米，投资金额将累计达到6000亿元人民币。科技产业园全部建成投产后，园区内企业每年产出的经济总量将达到6万亿元人民币，相当于全球第七大经济体的年经济总量。<br />
                        <br />
                        <span>  </span>2019年，按照习近平总书记在中央经济工作会议上关于“中央企业要在国家生态建设中担当重任”的指示精神，在国务院国资委的支持下，中国国能与大型中央企业中国诚通集团共同投资发起设立中国诚通生态有限公司，并经国务院国有企业改革领导小组批准成为国有企业混合所有制改革第四批试点企业，中国国能持股比32.2%。借助于中国诚通集团在中央企业中最强大的国资运营平台，在生态环境部直属中国环境科学研究院、水利部直属中国水利水电研究院、住建部直属中国城市规划院的合作支持下，中国国能与中国诚通生态强强联合，在水环境综合整治、绿地生态系统、智慧园林、城市基础设施建设、土壤与矿山修复等领域均取得重大发展。仅2019年，中国国能在相关城市的土地整理、旧城改造、全域生态建设等领域签署的投资合同规模已经接近5000亿元。<br />
                        <br />
                        <span>  </span>“股权多元化，股东专业化”是我们的坚持。我们将继续大力发展混合经济体制，完善资本合作机制，优化资源配置，与世界500强领军企业合作，确保股东利益最大化。<br />
                        <br />
                        <span>  </span>我们在中国发展的大势中收获成长，收获成功，同时也常怀感恩之心，践行企业的社会担当。感恩于心，回馈于行。一路走来，我们始终以高度的社会责任感和感恩的心态回馈社会，曾为“国家杰出青年基金”、“上海科技发展基金会”、中国红十字会、地方国有企业改制基金、汶川大地震等公益慈善事业累计捐款超过200亿元人民币，是累计捐款额度最大的中国企业。“达则兼济天下”是每个企业和企业家都应该践行的社会责任。 <br />
                        <br />
                        <span>  </span>“立己达人，兼善天下”是我们的初心。我们相信能源事业不仅仅是为追求经济效益，更是为解决人类生存和发展的可持续问题。我们将坚持凝聚“善”的智慧、“善”的力量，转化能源新格局，为保障世界能源安全提供新方案。<br />
                        <br />
                        <span>  </span>凡是过去，皆为序章。面对充满希望的2020年，我们将牢牢把握时代发展的脉搏，谨记习近平总书记“绿水青山就是金山银山”的科学论断，时刻鞭策自身，不断提高科技创新投入比例,加速低碳研发攻关和成果转化。中国国能全体同仁及合作伙伴都将为推进生态文明建设，引领节约低碳生活方式，构建绿色生活体系而贡献力量与智慧。<br />
                    </div>
                </div>
                }
                {/* 集团视频 */}
                {
                    selectData === 'groupIdeo' && <div className="abr">
                        <div className="abrb">
                            <h2>集团视频</h2>
                            <p><img src="images/ab_08.png" />当前位置：集团视频</p>
                        </div>
                        <div className="abcont">

                            <div style={{ margin: '0 auto', width: '800px' }}>
                                <video controls="controls" autoPlay="autoplay" width="850" align="center" draggable="true">
                                    <source src="movie.ogg" type="video/ogg" />
                                    <source src={zzh} type="video/mp4" />

                                </video>


                            </div>
                        </div>
                    </div>

                }
                {/* 经营理念 */}
                {
                    selectData === 'managementIdea' && <div className="abr">
                        <div className="abrb">
                            <h2>经营理念</h2>
                            <p><img src="images/ab_08.png" />当前位置：经营理念</p>
                        </div>
                        <div className="abcont">
                            合作共赢、创新改进，为用户创造价值，为社会创造价值!
                        </div>
                    </div>

                }
                {/* 联系我们 */}
                {
                    selectData === 'contactUs' && <div className="abr">
                        <div className="abrb">
                            <h2>联系我们</h2>
                            <p><img src="images/ab_08.png" />联系我们</p>
                        </div>

                        <div className="lxbox">
                            <div className="zzh">
                                <h2>重庆中仄灏新能源科技(集团)</h2>
                                <img src="/Editor/attached/image/20201023/2020102310500361361.png" alt="" /><p>
                                    邮编：400000
                                </p>
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
                                    地址：重庆渝北区联盛大厦
                                </p>
                            </div>
                            <div style={{ width: '500px', height: '300px', marginTop: '7%' }}>
                            <Map amapkey='d59a38b04043ade1db921d71540f17e2' zoom={12} plugins={['ToolBar', 'Scale']} center={center}>
                                <InfoWindow
                                    center={center}
                                    position={position}
                                    visible={visible}
                                    size={size}
                                    offset={offset}
                                    autoMove={true}
                                    isCustom={true}
                                    enableHighAccuracy={true} 
                                >重庆渝北区联盛大厦</InfoWindow>
                            </Map>

                        </div>

                        </div>
                       
                        {/* <Map amapkey={'d59a38b04043ade1db921d71540f17e2'}
                                    zoom={15}
                                    size={{width:200,height:100}}
                                    ></Map> */}
                    </div>

                }


            </div>
        </div>
    )
}

export default Mine;