# Vue3Template

Vue3Template 是一个基于Vue3的模板项目
集成了

- [vue-router](https://router.vuejs.org/zh/)
- [pinia](https://pinia.vuejs.org/zh/)
- [element-plus](https://element-plus.org/zh-CN/#/zh-CN) 及自动导入插件
- [tailwindcss](https://tailwindcss.com/docs/installation/using-vite)

封装了

- [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 拦截器

## 目录结构

```
Vue3Template
│  .env.dev             # 开发环境全局变量
│  .env.production      # 生产环境全局变量
│  .gitignore           # git忽略文件
│  auto-imports.d.ts    # 自动导入的类型声明文件
│  components.d.ts      # 组件类型声明文件
│  index.html           # 入口文件
│  package-lock.json    # 依赖包版本信息
│  package.json         # 项目依赖包
│  README.md            # 项目说明
│  tailwind.config.js   # tailwindcss 配置文件
│  tsconfig.json        # TypeScript 配置文件
│  vite.config.ts       # Vite 配置文件
├─dist                  # 打包输出目录
├─public                # 静态资源
└─src                   # 源代码
    │  App.vue          # 入口文件
    │  main.ts          # 创建 Vue 实例
    │  main.css         # css全局样式入口文件
    ├─assets            # css资源
    ├─components        # 组件
    ├─request           # 请求
    ├─router            # 路由
    ├─stores            # 状态管理
    ├─type              # 类型定义
    └─views             # 页面
```

## 指令

安装依赖：

```bash
npm install
```

运行：

```bash
# 使用开发环境变量(.env.dev)
npm run dev
```

```bash
# 使用生产环境变量(.env.production)
npm run pro
```

构建：

```bash
# 使用生产环境变量(.env.production)
npm run build
```
