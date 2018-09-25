import * as React from 'react'
import Meta, { CardMetaProps } from 'antd/es/card/Meta'

export interface CardMetaPropsLB extends CardMetaProps {
  // nothing
}

const LBCardMeta: React.SFC<CardMetaPropsLB> = (props) => (<Meta {...props} />)

export default LBCardMeta
