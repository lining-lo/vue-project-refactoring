<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header><CommonHeader/></el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import CommonHeader from '../../components/CommonHeader.vue'
//引入组件
defineComponent({
    components:{
        CommonHeader,
    }
})

</script>
<style lang='scss' scoped></style>