import * as React from 'react'
import Select, { SelectProps } from 'antd/es/select'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'
import 'antd/es/select/style'

export interface SelectOption {
  label?: string;
  title?: string;
  value: any;
  key: string;
}
interface SelectWrapperProps extends SelectProps {
  options: SelectOption[];
}

class SelectWrapper extends React.Component<SelectWrapperProps, any> {
  shouldComponentUpdate(nextProps: SelectWrapperProps) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }

  render() {
    const { options, ...props } = this.props

    return options ? (
      <Select {...props}>
        {
          options.map(o => (<Select.Option {...o}>{o.label || o.title}</Select.Option>))
        }
      </Select>
    ) : (<Select {...this.props} />)
  }
}

export default SelectWrapper
export const { Option } = Select
