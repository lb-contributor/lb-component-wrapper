import * as React from 'react'
import Row from 'antd/es/row'
import 'antd/es/row/style'

export const SimpleRow = Row

export default ({ ...props }) => (<Row type="flex" align="top" {...props} />)
// export default class RowWrapper extends React.Component<any, any> {
//   render() {
//     return (<Row type="flex" align="top" {...this.props} />)
//   }
// }
