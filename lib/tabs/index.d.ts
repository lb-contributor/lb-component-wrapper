import * as React from 'react';
import Tabs, { TabsType, TabsProps, TabsPosition, TabPaneProps } from 'antd/es/tabs';
import 'antd/es/tabs/style';
export interface TabsPropsLB extends TabsProps {
}
export interface TabPanePropsLB extends TabPaneProps {
}
export { TabsType, TabsPosition };
export declare const TabPane: React.SFC<TabPanePropsLB>;
export default Tabs;
