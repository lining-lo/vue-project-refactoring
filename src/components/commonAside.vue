<template>
    <el-aside :width="store.state.isCollapse ? 'auto' : '200px'">
        <el-menu :collapse="store.state.isCollapse" background-color="#545c64" text-color="#fff"
            :collapse-transition="false">
            <h3>{{ store.state.isCollapse ? '后台' : '后台管理' }}</h3>
            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu v-for="item in hasChildren" :key="item.path" :index="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group @click="clickMenu(subItem)" v-for="subItem in item.children" :key="subItem.path">
                    <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script setup>
import { ref, computed } from 'vue'
//引入仓库
import { useStore } from 'vuex';
//引入路由
import { useRouter } from 'vue-router';

//获取仓库
const store = useStore()
//获取路由
const router = useRouter()
//左侧菜单数据
const list = ref([
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'house',
        url: 'Home'
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'video-play',
        url: 'Mall'
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'User'
    },
    {
        path: 'other',
        label: '其他',
        icon: 'location',
        children: [
            {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Page1'
            },
            {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Page2'
            }
        ]
    }
])

//没有子菜单的数据
const noChildren = computed(() => list.value.filter(item => !item.children))
//有子菜单的数据
const hasChildren = computed(() => list.value.filter(item => item.children))

//点击菜单实现跳转路由的方法
const clickMenu = (item)=>{
    console.log(item);
    router.push(item.path)
}


</script>

<style lang='less' scoped>
.el-menu {
    border-right: 0;

    h3 {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 48px;
        text-align: center;
    }

    .icons {
        width: 18px;
        height: 18px;
    }
}
</style>