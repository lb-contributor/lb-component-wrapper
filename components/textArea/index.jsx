import React, { Component } from 'react'
import { Input } from 'antd'
import { formBaseCompare } from '../utils/compare'

const { TextArea } = Input

class TextAreaWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    if (this.props.read) {
      return (<span>{this.props.value}</span>)
    }

    return (<TextArea {...this.props} />)
  }
}

export default TextAreaWrapper
