import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AnchorButtonProps, NativeButtonProps } from 'antd/es/button/button';
export declare type ButtonPropsLB = Partial<AnchorButtonProps & NativeButtonProps>;
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
