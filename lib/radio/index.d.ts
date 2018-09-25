import * as React from 'react';
import Radio, { RadioProps, RadioGroupProps, RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle } from 'antd/es/radio';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import 'antd/es/radio/style';
export interface RadioPropsLB extends RadioProps {
}
export { RadioChangeEvent, RadioChangeEventTarget, RadioGroupButtonStyle };
export declare const RadioGroup: React.SFC<RadioGroupProps>;
export declare const RadioButton: React.SFC<RadioButtonProps>;
export default Radio;
