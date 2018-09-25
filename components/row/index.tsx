import * as React from 'react'
import Row, { RowProps } from 'antd/es/row'
import 'antd/es/row/style'

export interface RowPropsLB extends RowProps {
  // nothing
}

export const SimpleRow = Row

const RowLB: React.SFC<RowPropsLB> = ({ ...props }) => (<Row type="flex" align="top" {...props} />)

export default RowLB
