import React, { Component } from 'react'
import { Menu } from 'antd'

class MenuWrapper extends Component {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    return (<Menu {...this.props} />)
  }
}

export const { Item, SubMenu, ItemGroup, Divider } = Menu
export default MenuWrapper
