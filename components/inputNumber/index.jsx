import React, { Component } from 'react'
import { InputNumber } from 'antd'
import { formBaseCompare } from '../utils/compare'


class InputWrapper extends Component {
  // FIXME 添加完整的刷新条件
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (<InputNumber {...this.props} />)
  }
}

export default InputWrapper
