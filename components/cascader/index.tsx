import * as React from 'react'
import Cascader, { CascaderProps, CascaderOptionType } from 'antd/es/cascader'
import 'antd/es/cascader/style'

export interface CascaderPropsLB extends CascaderProps {
  // nothing
}

export { CascaderOptionType }

class LBCascader extends React.Component<CascaderPropsLB, any> {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(): boolean {
    return true
  }

  render() {
    return (<Cascader {...this.props} />)
  }
}

export default LBCascader
