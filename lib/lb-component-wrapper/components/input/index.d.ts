import * as React from 'react';
import { InputProps } from 'antd/es/input';
import 'antd/es/input/style';
export { InputProps, GroupProps, SearchProps, TextAreaProps } from 'antd/es/input';
export * from 'antd/es/input/Search';
export * from 'antd/es/input/Group';
declare class InputWrapper extends React.Component<InputProps, any> {
    private r;
    shouldComponentUpdate(nextProps: InputProps): boolean;
    focus(): void;
    render(): JSX.Element;
}
export default InputWrapper;
