import * as React from 'react'
import Grid, { CardGridProps } from 'antd/es/card/Grid'

export interface CardGridPropsLB extends CardGridProps {
  // empty
}

const LBCardGrid: React.SFC<CardGridProps> = (props) => (<Grid {...props} />)
export default LBCardGrid
