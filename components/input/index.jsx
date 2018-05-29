import React, { Component } from 'react'
import { Input } from 'antd'
import { formBaseCompare } from '../utils/compare'

export const { Search, Group } = Input
class InputWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    if (this.props.read) {
      return (<span>{this.props.value}</span>)
    }

    return (<Input {...this.props} />)
  }
}

export default InputWrapper
