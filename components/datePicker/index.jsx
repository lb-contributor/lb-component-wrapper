import React, { Component } from 'react'
import { DatePicker } from 'antd'

export const { MonthPicker, RangePicker, WeekPicker } = DatePicker

class DatePickerWrapper extends Component {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    return (<DatePicker {...this.props} />)
  }
}

export default DatePickerWrapper
