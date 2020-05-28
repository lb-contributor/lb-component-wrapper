import * as React from 'react';
import { MenuProps } from 'antd/es/menu';
import 'antd/es/menu/style';
import Item from 'antd/es/menu/MenuItem';
import SubMenu from 'antd/es/menu/SubMenu';
export { MenuProps, SelectParam, ClickParam, MenuMode, MenuState } from 'antd/es/menu';
export interface MenuPropsLB extends MenuProps {
}
declare class MenuWrapper extends React.Component<MenuPropsLB, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
declare const Divider: React.SFC<any>;
export { Item, SubMenu, Divider };
export default MenuWrapper;
