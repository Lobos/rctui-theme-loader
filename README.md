rctui组件变量替换工具，编译时替换默认变量

```
$ npm install rctui-theme-loader --save-dev
```

webpack.config 配置


```
{
  test: /\.scss$/,
  use: [
    { loader: 'style-loader' },

    { loader: 'css-loader' },

    { loader: 'sass-loader' },

    {
      loader: 'rctui-theme-loader',
      options: {
        // 少量的变量可以通过string传入
        variables: '$brand-primary: blue;',
        // 大量变量可以传入文件
        files: ['src/_variables.scss']
      }
    }
  ]
}
```

变量名称参考[项目下的bootstrap变量文件](https://github.com/Lobos/react-ui/blob/master/src/styles/themes/_bootstrap.scssa)

