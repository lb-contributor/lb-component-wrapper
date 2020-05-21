import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from 'antd/es/button'
import {AnchorButtonProps, NativeButtonProps} from 'antd/es/button/button'

export type ButtonPropsLB = Partial<AnchorButtonProps & NativeButtonProps>

class LBButton extends React.Component<ButtonPropsLB, any> {
  public static propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
  }

  public shouldComponentUpdate(nextProps: ButtonPropsLB): boolean {
    return this.props.disabled !== nextProps.disabled ||
      this.props.loading !== nextProps.loading ||
      this.props.onClick !== nextProps.onClick
  }

  public render() {
    return <Button {...this.props} />
  }
}

export default LBButton
