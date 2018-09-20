import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button, { ButtonProps } from 'antd/es/button'
import 'antd/es/button/style'

export { ButtonProps, ButtonShape, ButtonSize, ButtonType, ButtonGroupProps } from 'antd/es/button'
export type ButtonWrapperProps = ButtonProps & { disabled?: boolean }

class ButtonWrapper extends React.Component<ButtonWrapperProps, any> {
  static propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
  }

  shouldComponentUpdate(nextProps: ButtonWrapperProps): boolean {
    return this.props.disabled !== nextProps.disabled ||
      this.props.loading !== nextProps.loading ||
      this.props.onClick !== nextProps.onClick
  }

  render() {
    return <Button {...this.props} />
  }
}

export default ButtonWrapper
export const ButtonGroup = Button.Group
