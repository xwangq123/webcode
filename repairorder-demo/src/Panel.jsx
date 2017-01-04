import React, {Component} from 'react';
import {Row, Col, Form, Input, Button} from 'antd';

const {Item} = Form;

export default class Panel extends Component {
    render() {
        const formItemLayout = {
            labelCol: {span: 9},
            wrapperCol: {span: 14}
        };
        return (
            <div className="panel">
                <Form horizontal>
                    <Row>
                        <Col span={3}>
                            <Item
                                {...formItemLayout}
                                label="车牌号">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="出厂编号">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="维修单号">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="维修类型">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="品牌">
                                <Input/>
                            </Item>
                        </Col>

                    </Row>
                    <Row>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="VIN码">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="状态">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="分公司">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="服务产品线">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Item  {...formItemLayout}
                                   label="驳回状态">
                                <Input/>
                            </Item>
                        </Col>
                        <Col span={3}>
                            <Button type="primary"
                                    onClick={this.props.query}>
                                查询
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}