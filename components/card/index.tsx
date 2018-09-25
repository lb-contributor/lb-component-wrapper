import Card, { CardProps } from 'antd/es/card'
import CardGrid, { CardGridPropsLB } from './grid'
import CardMeta, { CardMetaPropsLB } from './meta'
import 'antd/es/card/style'

export interface LBCardProps extends CardProps {
  // empty
}


export { CardGrid, CardGridPropsLB, CardMeta, CardMetaPropsLB }
export default Card
