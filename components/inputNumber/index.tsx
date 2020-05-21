import * as React from 'react'
import InputNumber, { InputNumberProps } from 'antd/es/input-number'
import 'antd/es/input-number/style'
import { formBaseCompare } from '../utils/compare'

export interface InputNumberPropsLB extends InputNumberProps {
  // nothing
}

class InputWrapper extends React.Component<InputNumberPropsLB, any> {
  // FIXME 添加完整的刷新条件
  public shouldComponentUpdate(nextProps: InputNumberPropsLB) {
    return !formBaseCompare(this.props, nextProps)
  }

  public render() {
    return (<InputNumber {...this.props} />)
  }
}

export default InputWrapper
