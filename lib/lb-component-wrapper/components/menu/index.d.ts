import * as React from 'react';
import { MenuProps } from 'antd/es/menu';
import 'antd/es/menu/style';
export { MenuProps, SelectParam, ClickParam, MenuMode, MenuTheme, MenuState } from 'antd/es/menu';
declare class MenuWrapper extends React.Component<MenuProps, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export * from 'antd/es/menu';
export default MenuWrapper;
