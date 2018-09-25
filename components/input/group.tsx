import * as React from 'react'
import Group, { GroupProps } from 'antd/es/input/Group'

export interface GroupPropsLB extends GroupProps {
  // nothing
}

const InputGroupLB: React.SFC<GroupPropsLB> = (props) => (<Group {...props} />)

export default InputGroupLB
