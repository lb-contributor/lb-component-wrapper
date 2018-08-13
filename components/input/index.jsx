import React, { Component } from 'react'
import { Input } from 'antd'
import { formBaseCompare } from '../utils/compare'

export const { Search, Group } = Input
export const OriginalInput = Input
class InputWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  focus = () => {
    this.r.focus()
  }

  render() {
    return (<Input {...this.props} ref={r => this.r = r} />)
  }
}

export default InputWrapper
