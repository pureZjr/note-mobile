// import 不要写在外层，不然ts识别不了vue文件

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare module 'vue/types/vue' {
    import { Router } from 'vue-router'
    interface Vue {
        $router: Router
    }
}
