import React, {Component} from 'react';
import {Row, Col, Form, Input, Button, Icon} from 'antd';

const {Item} = Form;

export default class Panel extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            expand: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const {expand} = this.state;
        this.setState({expand: !expand});
    }

    render() {
        const expand = this.state.expand;
        const formItemLayout = {
            labelCol: {span: 10},
            wrapperCol: {span: 13}
        };
        return (
            <Form horizontal
                  className="ant-advanced-search-form">
                <Row>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="出厂编号">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="车牌号">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="维修单号">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="VIN码">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="状态">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="分公司">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item  {...formItemLayout}
                               label="服务产品线">
                            <Input/>
                        </Item>
                    </Col>
                    <Col span={6} style={{textAlign: 'center'}}>
                        <Button type="primary" htmlType="submit" onClick={this.props.query}>查询</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}