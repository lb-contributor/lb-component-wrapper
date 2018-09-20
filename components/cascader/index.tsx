import * as React from 'react'
import Cascader, { CascaderProps } from 'antd/es/cascader'
import 'antd/es/cascader/style'

class CascaderWrapper extends React.Component<CascaderProps, any> {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(): boolean {
    return true
  }

  render() {
    return (<Cascader {...this.props} />)
  }
}

export default CascaderWrapper
