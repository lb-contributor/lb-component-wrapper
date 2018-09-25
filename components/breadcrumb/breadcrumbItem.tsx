import * as React from 'react'
import BreadcrumbItem, { BreadcrumbItemProps } from 'antd/es/breadcrumb/BreadcrumbItem'

export interface BreadcrumbItemPropsLB extends BreadcrumbItemProps {
  // empty
}

const LBBreadcrumbItem: React.SFC<BreadcrumbItemPropsLB> = (props) => (<BreadcrumbItem {...props} />)

export default LBBreadcrumbItem
