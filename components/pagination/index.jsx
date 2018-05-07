import React, { Component } from 'react'
import { Pagination } from 'antd'

class PaginationWrapper extends Component {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  render() {
    return (<Pagination {...this.props} />)
  }
}

export default PaginationWrapper
