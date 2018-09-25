import * as React from 'react'
import Steps, { StepsProps } from 'antd/es/steps'
import 'antd/es/steps/style'

export interface StepPropsLB extends StepsProps {
  // nothing
}

export const Step: React.SFC<any> = (props) => (<Steps.Step {...props} />)
export default Steps
