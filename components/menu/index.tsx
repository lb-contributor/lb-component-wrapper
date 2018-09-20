import * as React from 'react'
import Menu, { MenuProps } from 'antd/es/menu'
import 'antd/es/menu/style'

export { MenuProps, SelectParam, ClickParam, MenuMode, MenuTheme, MenuState } from 'antd/es/menu'

class MenuWrapper extends React.Component<MenuProps, any> {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (<Menu {...this.props} />)
  }
}

export const { Item, SubMenu, ItemGroup, Divider } = Menu
export default MenuWrapper
