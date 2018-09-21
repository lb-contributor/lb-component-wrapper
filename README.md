# LB-COMPONENT-WRAPPER

1.0.0 is developed via TypeScript

公共组件的包装层，现在是包装antd

``` shell
yarn add lbc-wrapper # npm install
```

因为```antd```在很多时候并没有写```shouldComponentUpdate```，所以导致性能不高。

通过包装层，添加```shouldComponentUpdate```实现，减少不必要的渲染，提高效率

## Example
每一个antd的组件，都通过```import ANTD_NAME from 'lbc-wrapper/lib/antd_name'```导入。
如果antd的组件包含子组件，如Select的Option，则需要使用```import { Option } from 'lbc-wrapper/lib/select'```来导入
``` js
// used to
import { Button, Select, Table } from 'antd'
const { Option } = Select

// right now
import Button from 'lbc-wrapper/lib/button'
import Select, { Option } from 'lbc-wrapper/lib/select'
import Table from 'lbc-wrapper/lib/table'
```
