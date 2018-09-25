import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button, { ButtonProps } from 'antd/es/button'

export type ButtonPropsLB = ButtonProps & {
  disabled?: boolean
}

class LBButton extends React.Component<ButtonPropsLB, any> {
  static propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
  }

  shouldComponentUpdate(nextProps: ButtonPropsLB): boolean {
    return this.props.disabled !== nextProps.disabled ||
      this.props.loading !== nextProps.loading ||
      this.props.onClick !== nextProps.onClick
  }

  render() {
    return <Button {...this.props} />
  }
}

export default LBButton
