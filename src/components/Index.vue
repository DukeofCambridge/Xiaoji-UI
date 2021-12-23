<template>
  <div class="about">
    <div class="text">
      <h1>Xiaoji Smart Home</h1>
      <button class="cold-light" @click="jump">Welcome Home!</button>
    </div>
  </div>
</template>

<style scoped>
.about {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(https://res.cloudinary.com/control4/image/upload/f_auto,q_auto,dpr_auto/v1558113016/OS_3_WWW_Home_Header.jpg) no-repeat center center fixed;
}
.text{
  width:100%;
  height: 100%;
}
h1{
  position:relative;
  margin-top: 0;
  margin-left: 10px;
  display: block;
  font-size: 50px;
  color: white;
  /*background-color: #42b983;*/
}
.cold-light {
  line-height: 80px;
  margin-top: 700px;
  margin-left: 750px;
  height: 80px;
  width: 250px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}
.cold-light:hover {
  z-index: 1;
  animation: ColdLight 8s linear infinite;
}

/* second */
  .cold-light:hover {
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

@keyframes ColdLight {
  0%{
    background-position: 0%;
  }
  100%{
    background-position: 400%;
  }
}
</style>

<script>
export default {
  methods: {
    jump() {
      this.$router.push('/home')
    }
  },
  name:'Index'
}
</script>
