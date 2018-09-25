import * as React from 'react'
import TextArea, { TextAreaProps } from 'antd/es/input/TextArea'
import 'antd/es/input/style'
import { formBaseCompare } from '../utils/compare'

export interface TextAreaPropsLB extends TextAreaProps {
  // nothing
}
class TextAreaWrapper extends React.Component<TextAreaProps, any> {
  shouldComponentUpdate(nextProps: TextAreaProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (<TextArea {...this.props} />)
  }
}

export default TextAreaWrapper
