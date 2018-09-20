import * as React from 'react'
import DatePicker from 'antd/es/date-picker'
import 'antd/es/date-picker/style'

export const { MonthPicker, RangePicker, WeekPicker } = DatePicker

class DatePickerWrapper extends React.Component {
  // FIXME 补充完整的刷新条件
  shouldComponentUpdate(): boolean {
    return true
  }

  render() {
    return (<DatePicker {...this.props} />)
  }
}

export default DatePickerWrapper
