import * as React from 'react';
import { InputNumberProps } from 'antd/es/input-number';
import 'antd/es/input-number/style';
export { InputNumberProps } from 'antd/es/input-number';
declare class InputWrapper extends React.Component<InputNumberProps, any> {
    shouldComponentUpdate(nextProps: InputNumberProps): boolean;
    render(): JSX.Element;
}
export default InputWrapper;
