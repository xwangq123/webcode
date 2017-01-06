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
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
            }),
        };

        return (
            <Content style={{padding: '0 24px'}}>
                <Panel query={this.props.query}>
                </Panel>
                <Table rowSelection={rowSelection}
                       dataSource={this.props.dataSource}
                       columns={this.props.columns}>
                </Table>
            </Content>
        );
    }
}
const mapStateToProps = state => {
    const columns = state.getIn(['management', 'columns']);
    const dataSource = state.getIn(['management', 'dataSource']);
    return {
        columns: columns.toJS(),
        dataSource: dataSource.toJS()
    }
};
const mapDispatchToProps = dispath => bindActionCreators(action, dispath);

export  default connect(mapStateToProps, mapDispatchToProps)(RepairOrder);