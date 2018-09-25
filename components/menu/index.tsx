import * as React from 'react'
import Menu, { MenuProps } from 'antd/es/menu'
import 'antd/es/menu/style'
import Item from 'antd/es/menu/MenuItem'
import SubMenu from 'antd/es/menu/SubMenu'

export { MenuProps, SelectParam, ClickParam, MenuMode, MenuTheme, MenuState } from 'antd/es/menu'

export interface MenuPropsLB extends MenuProps {
  // nothing
}

class MenuWrapper extends React.Component<MenuPropsLB, any> {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (<Menu {...this.props} />)
  }
}

const Divider: React.SFC<any> = (props) => (<Menu.Divider {...props} />)

export { Item, SubMenu, Divider }

export default MenuWrapper
