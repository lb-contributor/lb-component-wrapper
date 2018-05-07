# LB-COMPONENT-WRAPPER

公共组件的包装层，现在是包装antd

``` shell
yarn add lbc-wrapper # npm install
```

因为```antd```在很多时候并没有写```shouldComponentUpdate```，所以导致性能不高。

通过包装层，添加```shouldComponentUpdate```实现，减少不必要的渲染，提高效率
