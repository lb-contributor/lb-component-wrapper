import * as React from 'react'
import Input, { InputProps } from 'antd/es/input'
import 'antd/es/input/style'
import { formBaseCompare } from '../utils/compare'

export { InputProps, GroupProps, SearchProps, TextAreaProps } from 'antd/es/input'

export const { Search, Group } = Input
export const OriginalInput = Input
class InputWrapper extends React.Component<InputProps, any> {
  private r: Input | null

  shouldComponentUpdate(nextProps: InputProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  focus() {
    this.r && this.r.focus()
  }

  render() {
    return (<Input {...this.props} ref={r => this.r = r} />)
  }
}

export default InputWrapper
