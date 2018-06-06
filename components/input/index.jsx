import React, { Component } from 'react'
import { Input } from 'antd'
import { formBaseCompare } from '../utils/compare'

export const { Search, Group } = Input
export const OriginalInput = Input
class InputWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (<Input {...this.props} />)
  }
}

export default InputWrapper
