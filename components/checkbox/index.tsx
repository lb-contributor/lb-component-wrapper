import * as React from 'react'
import Checkbox, { CheckboxProps, CheckboxGroupProps } from 'antd/es/checkbox'
export { CheckboxChangeEvent, CheckboxOptionType } from 'antd/es/checkbox'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'
import 'antd/es/checkbox/style'

const CheckboxGroup = Checkbox.Group

export interface CheckboxOption {
  label: string;
  value: string | boolean | number;
}

export type CheckboxGroupWrapperProps = CheckboxProps & CheckboxGroupProps & { options: CheckboxOption[] }

class CheckboxGroupWrapper extends React.Component<CheckboxGroupWrapperProps, any> {
  shouldComponentUpdate(nextProps: CheckboxGroupWrapperProps) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }
  render() {
    return (<CheckboxGroup {...this.props} />)
  }
}

export default CheckboxGroupWrapper
