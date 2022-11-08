import React, { useState, memo } from "react";
import { Card, Col, Row } from 'antd';
import './index.css'
const News = (props) => {
    console.log(props, 'values');
    let value = props.value
    return (
        <>
            {
                value.map((item) => {
                    return <Col span={10} style={{ margin: '0 15px', position: 'relative' }} className='cardStyle'>
                        <Card
                            style={{
                                // width: 300,
                                marginTop: 28,
                                paddingLeft: 20,
                                paddingRight: 20,
                                borderRadius: 8,
                                background: 'rgba(0,0,0,.025)'
                            }}
                            hoverable={true}
                            onClick={()=>props.history.push('/newsCenter')}
                        >
                            <div className="leftCard">
                                <span className="timeDate">{item.data}</span>
                                <span className="datetime">{item.time}</span>
                            </div>
                            <div >
                                <h3 style={{ marginLeft: '100px', width: '380px' }}>{item.title}</h3>
                            </div>
                            <div className="more">
                                <a className="aStyle">READ MORE</a>
                            </div>
                        </Card>

                    </Col>
                })
            }
        </>
    )
}
export default News;