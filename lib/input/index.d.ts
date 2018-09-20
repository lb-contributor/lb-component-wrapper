import * as React from 'react';
import Input, { InputProps } from 'antd/es/input';
import 'antd/es/input/style';
export { InputProps, GroupProps, SearchProps, TextAreaProps } from 'antd/es/input';
export declare const Search: typeof import("antd/es/input/Search").default, Group: React.StatelessComponent<GroupProps>;
export declare const OriginalInput: typeof Input;
declare class InputWrapper extends React.Component<InputProps, any> {
    private r;
    shouldComponentUpdate(nextProps: InputProps): boolean;
    focus(): void;
    render(): JSX.Element;
}
export default InputWrapper;
