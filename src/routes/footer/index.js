import React from 'react';
import electron from 'electron'
import { Icon } from 'antd'
import './index.less'
import path from 'path'
import url from 'url'


const { ipcRenderer } = electron


class Index extends React.Component {

    //添加点击事件
    add = () => {
        ipcRenderer.send('create-window', {loadURL:process.env.NODE_ENV == 'development' ? 'http://localhost:3000/#/add' : url.format({
            pathname: path.join(__dirname, './build/index.html/#/add'),
            protocol: 'file:',
            slashes: true
        })})
    }
    render() {
        return (
            <div className='footer' >
                <div>服务器端口设置</div>
                <div>MOCK.js</div>
                <Icon type="plus-circle" theme="filled" className='add' onClick={this.add} />
            </div>
        )
    }

}

export default Index;
