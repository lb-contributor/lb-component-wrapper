import * as React from 'react'
import Breadcrumb, { BreadcrumbProps } from 'antd/es/breadcrumb'

export interface BreadcrumbPropsLB extends BreadcrumbProps {
  // empty
}

const LBBreadcrumb: React.SFC<BreadcrumbPropsLB> = (props) => (<Breadcrumb {...props} />)

export default LBBreadcrumb
