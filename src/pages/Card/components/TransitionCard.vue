<template>
  <section class="transitionCard">
    <div class="container">
      <p>以相同速度开始至结束</p>
      <div class="item transitionOne"></div>
      <p>慢速开始，然后变快，然后慢速结束</p>
      <div class="item transitionTwo"></div>
      <p>以慢速开始</p>
      <div class="item transitionThree"></div>
      <p>以慢速结束</p>
      <div class="item transitionFour"></div>
      <p>以慢速开始和结束</p>
      <div class="item transitionFive"></div>
      <p>无过渡</p>
      <div class="item"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.transitionCard {
  height: 100vh;
  width: 100%;
}
.item {
  height: 100px;
  width: 100px;
  background-color: gray;
  box-shadow: 0 8px 20px rgb(21 18 53 / 12%);
  margin-bottom: 10px;
}
.item:hover {
  width: 300px;
}
.transitionOne {
  transition: all 2s linear;
}
.transitionTwo {
  transition: all 2s ease;
}
.transitionThree {
  transition: all 2s ease-in;
}
.transitionFour {
  transition: all 2s ease-out;
}
.transitionFive {
  transition: all 2s ease-in-out;
}
</style>
