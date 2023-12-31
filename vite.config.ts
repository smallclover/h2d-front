import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 需要 npm install @types/node --save-dev或者yarn add @types/node --save-dev
// 然后再tsconfig.json 加入paths配置
// https://juejin.cn/post/7152086494906155022
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // ElementPlus({ useSource: true }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': resolve('src'),
            // compos: resolve('src/components'),
            // apis: resolve('src/apis'),
            // services: resolve('src/services'),
            // views: resolve('src/views'),
            // utils: resolve('src/utils'),
            // routes: resolve('src/routes'),
            // styles: resolve('src/styles'),
        },
    },
    server: {
        // 配置前端服务地址和端口
        //服务器主机名
        host: '127.0.0.1',
        //端口号
        port: 8888,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
        open: false,
        //自定义代理规则
        proxy: {
            '/api': {
                target: 'http://localhost:8989/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
