import * as React from 'react'
import TextArea, { TextAreaProps } from 'antd/es/input/TextArea'

export interface TextAreaPropsLB extends TextAreaProps {
  // nothing
}

const TextAreaLB: React.SFC<TextAreaPropsLB> = (props) => (<TextArea {...props} />)

export default TextAreaLB
