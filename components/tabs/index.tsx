import * as React from 'react'
import Tabs, { TabsType, TabsProps, TabsPosition, TabPaneProps } from 'antd/es/tabs'
import 'antd/es/tabs/style'

export interface TabsPropsLB extends TabsProps {
  // nothing
}

export interface TabPanePropsLB extends TabPaneProps {
  // nothing
}

export { TabsType, TabsPosition }

export const TabPane: React.SFC<TabPanePropsLB> = (props) => (<Tabs.TabPane {...props} />)
export default Tabs
