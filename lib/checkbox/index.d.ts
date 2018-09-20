import * as React from 'react';
import { CheckboxProps, CheckboxGroupProps } from 'antd/es/checkbox';
export { CheckboxChangeEvent, CheckboxOptionType } from 'antd/es/checkbox';
import 'antd/es/checkbox/style';
export interface CheckboxOption {
    label: string;
    value: string | boolean | number;
}
export declare type CheckboxGroupWrapperProps = CheckboxProps & CheckboxGroupProps & {
    options: CheckboxOption[];
};
declare class CheckboxGroupWrapper extends React.Component<CheckboxGroupWrapperProps, any> {
    shouldComponentUpdate(nextProps: CheckboxGroupWrapperProps): boolean;
    render(): JSX.Element;
}
export default CheckboxGroupWrapper;
