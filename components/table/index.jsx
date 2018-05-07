import React, { Component } from 'react'
import { Table } from 'antd'

class TableWrapper extends Component {
  // FIXME 添加完整的table组件刷新条件
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    return (<Table {...this.props} />)
  }
}

export default TableWrapper
