<template>
  <div class="row">
    <div class="rowTitle">{{ list.title }}</div>
    <div class="row">
      <router-link
        v-for="(item, index) of list.value"
        :key="index"
        :to="item.link"
      >
        <div class="item">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.rowTitle {
  width: 100%;
  font-weight: bold;
  font-size: 24px;
}
a:hover {
  color: none;
  text-decoration: unset;
}
.item {
  padding: 20px;
  width: 150px;
  border-radius: 10px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  margin: 20px 20px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f,
    0 5px 12px 4px #00000017;
}
.item:hover {
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;
  transform: scale(0.95);
}
</style>
