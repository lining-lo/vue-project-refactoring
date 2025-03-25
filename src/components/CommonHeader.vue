<template>
  <el-header>
    <div class="l-content">
      <!-- 图标的展示 -->
      <el-button size="small">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
    </div>
    <div class="r-content">
      <!-- 下拉框 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>

<style lang='less' scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
}
</style>
