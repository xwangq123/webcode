import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from 'antd';
import Panel from './Panel';
const {Content} = Layout;

ReactDOM.render(
    <Layout>
        <Content style={{padding: '0 24px'}}>
            <Panel></Panel>
        </Content>
    </Layout>,
    document.getElementById('app')
);
