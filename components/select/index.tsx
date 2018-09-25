import * as React from 'react'
import Select, { SelectProps, OptionProps } from 'antd/es/select'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'
import 'antd/es/select/style'

export interface SelectOptionLB extends OptionProps {
  label?: string;
  key: string;
}
export interface SelectPropsLB extends SelectProps {
  options: SelectOptionLB[];
}

export const Option: React.SFC<SelectOptionLB> = (props) => (<Select.Option {...props} />)
class SelectWrapper extends React.Component<SelectPropsLB, any> {
  shouldComponentUpdate(nextProps: SelectPropsLB) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }

  render() {
    const { options = [], ...props } = this.props

    return (
      <Select {...props}>
        {
          options.map(o => (<Option {...o}>{o.label || o.title}</Option>))
        }
      </Select>
    )
  }
}

export default SelectWrapper
