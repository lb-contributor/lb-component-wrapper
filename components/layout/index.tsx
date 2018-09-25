import * as React from 'react'
import Layout, { LayoutProps } from 'antd/es/layout'
import Sider, { SiderPropsLB, CollapseType, SiderTheme } from './sider'
import 'antd/es/layout/style'

export interface LayoutPropsLB extends LayoutProps {
  // nothing
}

const Header: React.SFC<LayoutPropsLB> = (props) => (<Layout.Header {...props} />)
const Footer: React.SFC<LayoutPropsLB> = (props) => (<Layout.Footer {...props} />)
const Content: React.SFC<LayoutPropsLB> = (props) => (<Layout.Content {...props} />)

export { Header, Footer, Content, Sider, SiderPropsLB, CollapseType, SiderTheme }

export default Layout
