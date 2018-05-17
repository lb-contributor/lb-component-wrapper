import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class ButtonWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.disabled !== nextProps.disabled ||
      this.props.loading !== nextProps.loading ||
      this.props.onClick !== nextProps.onClick
  }

  render() {
    return <Button {...this.props} />
  }
}

ButtonWrapper.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ButtonWrapper
export const ButtonGroup = Button.Group
