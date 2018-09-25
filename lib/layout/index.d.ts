import * as React from 'react';
import Layout, { LayoutProps } from 'antd/es/layout';
import Sider, { SiderPropsLB, CollapseType, SiderTheme } from './sider';
import 'antd/es/layout/style';
export interface LayoutPropsLB extends LayoutProps {
}
declare const Header: React.SFC<LayoutPropsLB>;
declare const Footer: React.SFC<LayoutPropsLB>;
declare const Content: React.SFC<LayoutPropsLB>;
export { Header, Footer, Content, Sider, SiderPropsLB, CollapseType, SiderTheme };
export default Layout;
