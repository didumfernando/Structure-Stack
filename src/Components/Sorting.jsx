import React from "react";
import { useNavigate } from "react-router-dom";
import {Row, Col, Card} from 'antd';

const { Meta } = Card;

const Sorting = () => {
    const navigate = useNavigate()

    const onBubble = () => {
        navigate('/bubblesort', {replace: true})
    }
    return(
        <div>  
            <h1 className="sort">Sorting</h1>
            <p>Sorting is any process of arranging items in some sequence and/or in different sets</p>
            <p>Sorting allows process like searching, find the median and more to be much easier and much more efficient.</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center"className="row-centered">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                    >
                        <Meta title="Insertion sort" description="" />
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                        onClick={onBubble}
                    >
                        <Meta title="Bubble sort" />
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                    >
                        <Meta title="Merge sort" description="" />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                    >
                        <Meta title="Quick sort" description="" />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                    >
                        <Meta title="Radix sort" description="" />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '20px' }}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover = {<img  src ="https://www.crio.do/blog/content/images/2022/02/Sorting-Algorithms.png" />}
                    >
                        <Meta title="Selection sort" description="" />
                    </Card>
                </Col>
            </Row>
        </div> 
    )
}

export default Sorting;