import * as React from 'react'
import Input from 'antd/es/input'
import 'antd/es/input/style'
import { formBaseCompare } from '../utils/compare'

const { TextArea } = Input

class TextAreaWrapper extends React.Component<any, any> {
  shouldComponentUpdate(nextProps: any) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (<TextArea {...this.props} />)
  }
}

export default TextAreaWrapper
