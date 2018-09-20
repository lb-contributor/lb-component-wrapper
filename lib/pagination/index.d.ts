import * as React from 'react';
import { PaginationProps } from 'antd/es/pagination';
import 'antd/es/pagination/style';
export { PaginationProps, PaginationConfig } from 'antd/es/pagination';
declare class PaginationWrapper extends React.Component<PaginationProps, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export default PaginationWrapper;
