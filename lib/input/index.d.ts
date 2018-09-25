import * as React from 'react';
import { InputProps } from 'antd/es/input';
import 'antd/es/input/style';
import Search, { SearchPropsLB } from './search';
import Group, { GroupPropsLB } from './group';
export interface InputPropsLB extends InputProps {
}
declare class InputWrapper extends React.Component<InputPropsLB, any> {
    private r;
    shouldComponentUpdate(nextProps: InputProps): boolean;
    focus(): void;
    render(): JSX.Element;
}
export { Search, SearchPropsLB, Group, GroupPropsLB };
export default InputWrapper;
