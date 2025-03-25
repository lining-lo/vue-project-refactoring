<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header>
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
<style lang='scss' scoped></style>