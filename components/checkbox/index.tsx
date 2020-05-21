import * as React from 'react'
import Checkbox, { CheckboxGroupProps } from 'antd/es/checkbox'
export { CheckboxChangeEvent, CheckboxOptionType } from 'antd/es/checkbox'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'
import 'antd/es/checkbox/style'

const CheckboxGroup = Checkbox.Group

export interface CheckboxGroupPropsLB extends CheckboxGroupProps {
  // nothing
}

class CheckboxGroupWrapper extends React.Component<CheckboxGroupPropsLB, any> {
  public shouldComponentUpdate(nextProps: CheckboxGroupPropsLB) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }

  public render() {
    return (<CheckboxGroup {...this.props} />)
  }
}

export default CheckboxGroupWrapper
