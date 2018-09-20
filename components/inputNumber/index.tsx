import * as React from 'react'
import InputNumber, { InputNumberProps } from 'antd/es/input-number'
import 'antd/es/input-number/style'
import { formBaseCompare } from '../utils/compare'

export { InputNumberProps } from 'antd/es/input-number'


class InputWrapper extends React.Component<InputNumberProps, any> {
  // FIXME 添加完整的刷新条件
  shouldComponentUpdate(nextProps: InputNumberProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (<InputNumber {...this.props} />)
  }
}

export default InputWrapper
