<template>
  <el-menu
    class="categories"
    default-active="全部"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="全部">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="喜剧">
      <i class="el-icon-menu"></i>
      <span slot="title">喜剧</span>
    </el-menu-item>
    <el-menu-item index="动作">
      <i class="el-icon-menu"></i>
      <span slot="title">动作</span>
    </el-menu-item>
    <el-menu-item index="爱情">
      <i class="el-icon-menu"></i>
      <span slot="title">爱情</span>
    </el-menu-item>
    <el-menu-item index="恐怖">
      <i class="el-icon-menu"></i>
      <span slot="title">恐怖</span>
    </el-menu-item>
    <el-menu-item index="悬疑">
      <i class="el-icon-menu"></i>
      <span slot="title">悬疑</span>
    </el-menu-item>
    <el-menu-item index="剧情">
      <i class="el-icon-menu"></i>
      <span slot="title">剧情</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data () {
    return {
      type: ""
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.type = key
      this.$emit('indexSelect')
    }
  }
}
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 200px;
  width: 150px;
}
</style>
