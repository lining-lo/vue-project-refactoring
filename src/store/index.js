import { createStore } from "vuex"

export default createStore({
    state: {
        //控制菜单的折叠与展开
        isCollapse: false
    },
    mutations: {
        //更新菜单状态的方法
        updateCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
})
 