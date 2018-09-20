import * as React from 'react'
import Pagination, { PaginationProps } from 'antd/es/pagination'
import 'antd/es/pagination/style'

export { PaginationProps, PaginationConfig } from 'antd/es/pagination'

class PaginationWrapper extends React.Component<PaginationProps, any> {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (<Pagination {...this.props} />)
  }
}

export default PaginationWrapper
