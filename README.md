# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# tips

npm start 报错


```
ode:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^
Error: error:0308010C:digital envelope routines::unsupported
```
> 原因：这是node.js 的版本问题，因为 node.js V17开始版本中发布的是OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响。故此以前的项目在使用 nodejs V17以上版本后会报错。

### 解决方式一
修改package.json，在相关构建命令之前加入 NODE_OPTIONS=--openssl-legacy-provider

```json
{
  "scripts": {
    "start": "NODE_OPTIONS=--openssl-legacy-provider && umi dev",
    "build": "NODE_OPTIONS=--openssl-legacy-provider && umi build"
  }
}
```

### 解决方式二
node 版本降级到 v16.x
