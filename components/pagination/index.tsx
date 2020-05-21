import * as React from 'react'
import Pagination, { PaginationProps } from 'antd/es/pagination'
import 'antd/es/pagination/style'

export interface PaginationPropsLB extends PaginationProps {

}

export { PaginationConfig } from 'antd/es/pagination'

class PaginationWrapper extends React.Component<PaginationPropsLB, any> {
  // FIXME 补充完整的刷新条件
  public shouldComponentUpdate() {
    return true
  }

  public render() {
    return (<Pagination {...this.props} />)
  }
}

export default PaginationWrapper
