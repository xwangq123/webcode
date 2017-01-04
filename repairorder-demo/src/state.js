const management = {
//查询table初始化
    columns: [{
        title: '维修单编号',
        dataIndex: 'Code'
    }, {
        title: '状态',
        dataIndex: 'State'
    }, {
        title: '维修类型',
        dataIndex: 'RepairType'
    }, {
        title: '车牌号',
        dataIndex: 'VehiclePlate'
    }, {
        title: 'VIN码',
        dataIndex: 'VIN'
    }, {
        title: '客户名称',
        dataIndex: 'Name'
    }, {
        title: '分公司',
        dataIndex: 'BranchName'
    }, {
        title: '工时费',
        dataIndex: 'LaborCost'
    }, {
        title: '材料费',
        dataIndex: 'MaterialCost'
    }, {
        title: '其他费用',
        dataIndex: 'OtherCost'
    }, {
        title: '费用合计',
        dataIndex: 'TotalAmount'
    }],
    //查询数据
    dataSource: [],
    filter: {}

}
const dataEditView = {}


export default {
    management,
    dataEditView
}