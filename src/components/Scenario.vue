<template>
  <div class="scenario">
  <ul class="slides">

    <input type="radio" id="control1" name="control" checked />
    <input type="radio" id="control2" name="control" />
    <input type="radio" id="control-3" name="control" />

    <li class="slide">场景</li>
    <li class="slide">场景</li>
    <li class="slide">场景</li>

    <div class="controls-visible">
      <!--suppress XmlInvalidId -->
      <label for="control1"></label>
      <!--suppress XmlInvalidId -->
      <label for="control2"></label>
      <!--suppress XmlInvalidId -->
      <label for="control-3"></label>
    </div>
  </ul>
  </div>
</template>

<style scoped>
@import "../assets/css/slide.css";
</style>

<script>
export default {
  name: "Scenarios"
}
</script>

