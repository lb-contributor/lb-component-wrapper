import * as React from 'react';
import { SelectProps } from 'antd/es/select';
import 'antd/es/select/style';
export interface SelectOption {
    label?: string;
    title?: string;
    value: any;
    key: string;
}
interface SelectWrapperProps extends SelectProps {
    options: SelectOption[];
}
declare class SelectWrapper extends React.Component<SelectWrapperProps, any> {
    shouldComponentUpdate(nextProps: SelectWrapperProps): boolean;
    render(): JSX.Element;
}
export default SelectWrapper;
export declare const Option: React.ClassicComponentClass<import("antd/es/select").OptionProps>;
