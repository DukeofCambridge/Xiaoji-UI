<template>
  <div class = "message">
<!--    <img src="../assets/img/JiadingCampus.png"  alt="404 NOT FOUND" />-->
    <div class="text">404 NOT FOUND</div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.message {
  background: url("../assets/img/JiadingCampus.png") no-repeat center center fixed;
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.text{
  margin:0 auto;
  font-size: 100px;
  color: #36a3f7;
}
</style>
