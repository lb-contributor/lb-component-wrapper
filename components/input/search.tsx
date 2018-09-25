import * as React from 'react'
import Search, { SearchProps } from 'antd/es/input/Search'

export interface SearchPropsLB extends SearchProps {
  // nothing
}

const InputSearchLB: React.SFC<SearchPropsLB> = (props) => (<Search {...props} />)

export default InputSearchLB
