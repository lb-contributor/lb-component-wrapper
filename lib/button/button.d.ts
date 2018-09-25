import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonProps } from 'antd/es/button';
export declare type ButtonPropsLB = ButtonProps & {
    disabled?: boolean;
};
declare class LBButton extends React.Component<ButtonPropsLB, any> {
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    shouldComponentUpdate(nextProps: ButtonPropsLB): boolean;
    render(): JSX.Element;
}
export default LBButton;
