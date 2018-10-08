import * as React from 'react'
import Input, { InputProps } from 'antd/es/input'
import 'antd/es/input/style'
import { formBaseCompare } from '../utils/compare'

import Search, { SearchPropsLB } from './search'
import Group, { GroupPropsLB } from './group'

export interface InputPropsLB extends InputProps {
  // nothing
}

class InputWrapper extends React.Component<InputPropsLB, any> {
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

export { Search, SearchPropsLB, Group, GroupPropsLB }

export const OriginalInput = Input

export default InputWrapper
