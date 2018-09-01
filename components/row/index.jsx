import React from 'react'
import { Row } from 'antd'

export const SimpleRow = Row

export default ({ ...props }) => (<Row type="flex" align="top" {...props} />)
