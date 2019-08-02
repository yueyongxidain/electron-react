import React from 'react';
import electron from 'electron'
import { Input, Form, Row, Col } from 'antd'
import Editor from './editor';
import './index.less'
import path from 'path'
import url from 'url'

const { ipcRenderer } = electron


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiTime: new Date().getTime() + ''
        }
    }
    //添加点击事件
    add = () => {
        ipcRenderer.send('create-window', process.env.NODE_ENV == 'development' ? 'http://localhost:3000/#/add' : url.format({
            pathname: path.join(__dirname, './build/index.html/#/add'),
            protocol: 'file:',
            slashes: true
        }))
    }
    onChange = (changedValue) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { apiTime } = this.state
        return (
            <Form onSubmit={this.handleSubmit} className='add-form'>
                <div className='add-editor'>
                    <Form.Item>
                        {getFieldDecorator('data', {
                            rules: [{ required: true, message: '请输入接口api标识' }],
                        })(
                            <Editor />
                        )}
                    </Form.Item>
                </div>
                <div className='add-info'>
                    <h2>基本信息</h2>
                    <Form.Item label="api 接口标识">
                        {getFieldDecorator('api', {
                            rules: [{ required: true, message: '请输入接口api标识' }],
                        })(
                            <Input addonBefore={apiTime + ' /'} />
                        )}
                    </Form.Item>
                </div>
            </Form>
        )
    }

}

export default Form.create()(Index);
