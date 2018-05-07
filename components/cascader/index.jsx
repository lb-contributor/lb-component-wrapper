import React, { Component } from 'react'
import { Cascader } from 'antd'

class CascaderWrapper extends Component {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    return (<Cascader {...this.props} />)
  }
}

export default CascaderWrapper
