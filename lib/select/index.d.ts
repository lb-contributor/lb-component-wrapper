import * as React from 'react';
import { SelectProps, OptionProps } from 'antd/es/select';
import 'antd/es/select/style';
export interface SelectOptionLB extends OptionProps {
    label?: string;
    key: string;
}
export interface SelectPropsLB extends SelectProps {
    options: SelectOptionLB[];
}
export declare const Optoin: React.SFC<SelectOptionLB>;
declare class SelectWrapper extends React.Component<SelectPropsLB, any> {
    shouldComponentUpdate(nextProps: SelectPropsLB): boolean;
    render(): JSX.Element;
}
export default SelectWrapper;
