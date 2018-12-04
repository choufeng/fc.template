# 阿里云函数计算模板

阿里云函数计算模板

配合官方工具fun使用

## 要求

fun >= 2.7.0

## 使用方法

```
fun init koalajs/fc.template -n <function name>

```

## 当前交互选项

|---|---|
|Function description | 函数说明|
|Service Name | 服务名称|
|Select Node version | 选择运行环境版本 nodejs6, nodejs8可选|
|Set timeout| 设置函数超时时间，单位：秒，默认30秒|
|Choose memory size| 选择函数使用的内存|
|Choose event type| 选择触发器类型(该选择结果尚未完全实现)|


## 未来

- 实现触发器选择生成对应的配置

