import  React, {Component} from 'react';
import {Layout, Table} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Panel from './Panel';
import  action from './action';
const {Content} = Layout;


class RepairOrder extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Content style={{padding: '0 24px'}}>
                <Panel query={this.props.query}></Panel>
                <Table dataSource={this.props.dataSource}
                       columns={this.props.columns}>
                </Table>
            </Content>
        );
    }
}
const mapStateToProps = state => {
    const columns = state.getIn(['repairOrder', 'manage', 'columns']);
    const dataSource = state.getIn(['repairOrder', 'manage', 'dataSource']);
    return {
        columns: columns.toJS(),
        dataSource: dataSource.toJS()
    }
};
const mapDispatchToProps = dispath => bindActionCreators(action, dispath);

export  default connect(mapStateToProps, mapDispatchToProps)(RepairOrder);