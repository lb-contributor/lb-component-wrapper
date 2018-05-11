import React, { Component } from 'react'
import { Select } from 'antd'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'


class SelectWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }

  render() {
    const { options, read, ...props } = this.props
    if (read) {
      if (options) {
        for (let i = 0; i < options.length; i += 1) {
          if (options[i].value === this.props.value) {
            return (<span>{options[i].label}</span>)
          }
        }
      }

      return this.props.value
    }

    return options ? (
      <Select {...props}>
        {
          options.map(o => (<Select.Option {...o}>{o.title}</Select.Option>))
        }
      </Select>
    ) : (<Select {...this.props} />)
  }
}

export default SelectWrapper
export const { Option } = Select
