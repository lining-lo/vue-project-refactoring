<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header style="padding: 0;">
                    <CommonHeader />
                </el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import CommonHeader from '../../components/CommonHeader.vue'
import CommonAside from '../../components/CommonAside.vue'
//引入组件
defineComponent({
    components: {
        CommonHeader,
        CommonAside
    }
})

</script>

<style lang='less' scoped>
.common-layout{
    height: 100%;
    & > .el-container{
        height: 100%;
        & > .el-aside{
            height: 100%;
            background: #545c64;
        }
    }
}
</style>