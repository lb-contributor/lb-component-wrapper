import * as React from 'react'
import Button, { ButtonGroupProps } from 'antd/es/button'

export interface ButtonGroupPropsLB extends ButtonGroupProps {
  // empty
}

const ButtonGroup: React.SFC<ButtonGroupPropsLB> = (props) => <Button.Group {...props} />

export default ButtonGroup
