import * as React from 'react';
import { CardProps } from 'antd/es/card';
import CardGrid, { CardGridPropsLB } from './grid';
import CardMeta, { CardMetaPropsLB } from './meta';
import 'antd/es/card/style';
export interface LBCardProps extends CardProps {
}
declare const LBCard: React.SFC<LBCardProps>;
export { CardGrid, CardGridPropsLB, CardMeta, CardMetaPropsLB };
export default LBCard;
