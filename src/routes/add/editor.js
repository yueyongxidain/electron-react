import React from 'react';
import AceEditor from 'react-ace';
import './index.less'
import 'brace/mode/javascript';
import 'brace/theme/xcode';


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aceValue: ''
        }
    }
    editorChange = (changedValue) => {
        console.log('value', changedValue)
        this.setState({
            aceValue: changedValue
        })
        const { onChange } = this.props;
        if (onChange) {
            onChange(changedValue);
        }
    }
    render() {
        console.log(this.props)
        return (
            <AceEditor
                ref="editor"
                mode="javascript"
                theme="xcode"
                onChange={this.editorChange}
                value={this.state.aceValue}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion //允许自动补全选项
                enableLiveAutocompletion
                enableSnippets
                style={{ width: '100%',height:'100vh', fontSize: '18px', margin: '0' ,boxSizing:'border-box'}}
            // onLoad={this.complete}
            />
        )
    }

}

export default Index;
