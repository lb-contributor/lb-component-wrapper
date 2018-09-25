import * as React from 'react';
import { InputNumberProps } from 'antd/es/input-number';
import 'antd/es/input-number/style';
export interface InputNumberPropsLB extends InputNumberProps {
}
declare class InputWrapper extends React.Component<InputNumberPropsLB, any> {
    shouldComponentUpdate(nextProps: InputNumberPropsLB): boolean;
    render(): JSX.Element;
}
export default InputWrapper;
