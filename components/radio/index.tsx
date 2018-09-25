import * as React from 'react'
import Radio, { RadioProps, RadioGroupProps, RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle } from 'antd/es/radio'
import Button, { RadioButtonProps } from 'antd/es/radio/radioButton'
import 'antd/es/radio/style'

export interface RadioPropsLB extends RadioProps {

}

export { RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle }
export const RadioGroup: React.SFC<RadioGroupProps> = (props) => (<Radio.Group {...props} />)
export const RadioButton: React.SFC<RadioButtonProps> = (props) => (<Button {...props} />)
export default Radio
