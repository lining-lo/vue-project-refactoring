<template>
  <div class="home">
    <el-row>
      <!-- 左侧的内容 -->
      <el-col :span="8" style="margin-top: 20px;">
        <!-- 登录信息 -->
        <el-card shadow="hover">
          <div class="user">
            <img src="../../assets/images/user.png" alt="">
            <div class="user-info">
              <p>Admin</p>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-7-1</span></p>
            <p>上次登录地点：<span>北京</span></p>
          </div>
        </el-card>
        <!-- 表格 -->
        <el-card shadow="hover" style="margin-top: 20px;height: 450px;">
          <el-table :data="tableData">
            <el-table-column v-for="(value, key) in tableLabel" :prop="key" :label="value" />
          </el-table>
        </el-card>
      </el-col>
      <!-- 右侧的内容 -->
      <el-col :span="16" style="margin-top: 20px;">

      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

//表格数据
let tableData = ref([])
const tableLabel = {
  name: '课程',
  todayBuy: '今日购买',
  monthBuy: '本月购买',
  totalBuy: '总购买'
}

//获取表格数据的方法
const getTableList = async () => {
  await axios.get('/home/getHomeData').then((res) => {
    if (res.data.code === 200) {
      tableData.value = res.data.data.tableData
    }
  })
}

//挂载时的生命周期钩子
onMounted(() => {
  //调用获取表格数据的方法
  getTableList()
})


</script>
<style lang='less' scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #333;
    margin-bottom: 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }

  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>