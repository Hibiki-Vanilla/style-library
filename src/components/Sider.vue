<template>
  <div id="sider" :class="{'siderOn':siderStatus}">
    <div class="siderCon">
      <router-link class="siderTitle" to="/">样式库.Beta</router-link>
      <div class="menuItem" v-for="(item, index) in menuList" :key="index">
        <router-link
            v-if="item.link"
            :to="item.link"
            class="menuItemTitle"
            :class="[{ menuItemTitleAct: nowCurrentPath === item.link }]"
            @click="onRouterItemClick(item.link)"
          >
          {{ item.name }}
          </router-link>
        <div
          v-else
          class="menuItemTitle"
          :class="[{ menuItemTitleAct: menuKey === index }]"
          @click="onMenuChange(index)"
        >
          {{ item.name }}
        </div>

        <div
          class="menuItemCon"
          :class="[{ menuItemConAct: menuKey === index }]"
          :style="{ '--height': item.children.length }"
        >
          <router-link
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            :to="child.link"
            class="menuChildItem"
            :class="[{ menuChildItemAct: nowCurrentPath === child.link }]"
            @click="onRouterItemClick(click.link)"
          >
            {{ child.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SiderLayout",
  props: ['siderStatus'],
  data() {
    return {
      menuList: [
        {
          name: "说明",
          children: [],
          link: "/illustrate",
        },
        {
          name: "基础概念",
          children: [
            { name: "文字效果", link: "/text" },
            { name: "卡片效果", link: "/card" },
            { name: "移入效果", link: "/hover" },
            { name: "拆解效果", link: "/product" },
            { name: "颜色切换", link: "/color" },
            { name: "视频播放", link: "/video" },
            { name: "提示窗", link: "/window" },
            { name: "Loading动画", link: "/loading" },
            { name: "区域剪辑", link: "/clip" },
            { name: "富文本编辑器", link: "/editor" },
          ],
        },
        {
          name: "常用案例",
          children: [
            { name: "轮播图", link: "/swiper" },
            { name: "按钮", link: "/button" },
            { name: "雪花效果", link: "/snow" },
            { name: "穿梭效果", link: "/perspective" },
            { name: "渐变文字", link: "/appleText" },
            { name: "蒸汽波背景", link: "/steamWave" },
            { name: "区域视频", link: "/regionalVideo" },
            { name: "水面效果", link: "/surface" },
            { name: "烟雾效果", link: "/smoke" },
            { name: "震动效果", link: "/shock" },
            { name: "滚动屏", link: "/scroll" },
            // { name: "Svga动画", link: "/svga" },
            // { name: "放大镜效果", link: "/magnifier" },
            { name: "极光", link: "/aurora" },
            { name: "流体效果", link: "/fluid" },
            { name :"Gsap",link:"/gsap"},
            { name: "视觉差", link: "/parallax" },
            { name: "序列帧视频", link: "/sequence" },
            // { name: "打印测试", link: "/ScrollTrigger" },
            { name: "Three测试", link: "/three" },
            { name: "老虎机抽奖", link: "/roll" },
            { name: "轮盘抽奖", link: "/roulette" },
            { name: "手表",link:'/rolex'}
          ],
        },
        {
          name: "整页案例",
          children: [
            { name: "详情页案例", link: "/demo" },
            { name: "详情页案例-2", link: "/productDemoTwo" },
            { name: "布局案例", link: "/gabrielecig" },
            { name: "介绍页案例", link: "/yummy" },
            // { name: "vivo样例", link: "/vivo" },
          ],
        },
      ],
      menuKey: null,
      nowCurrentPath: "",
    };
  },
  methods: {
    onMenuChange(value) {
      if (this.menuKey !== null && this.menuKey === value) {
        this.menuKey = null;
      } else {
        this.menuKey = value;
      }
    },
    onRouterItemClick(value) {
      console.log(value);
    },
  },
  watch: {
    $route: function (newValue) {
      // 在这里处理路由变化的逻辑
      this.nowCurrentPath = newValue.path;
    },
  },
};
</script>

<style lang="less" scoped>
#sider {
  position: relative;
  z-index: 10;
  flex: 0 0 50px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  border-right: 2px solid #ccc;
}
#sider.siderOn {
  flex: 0 0 200px;
}

.siderCon {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100vh;
}
.siderOn .siderCon{
  width: 200px;
}
.siderTitle {
  color: #000;
  display: block;
  cursor: pointer;
  width: 100%;
  line-height: 60px;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.menuItem {
  display: flex;
  flex-direction: column;
}
.menuItemTitle {
  padding: 0 20px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s;
  color: #000;
  text-decoration: none;
}
.menuItemTitleAct {
  color: #1677ff;
}
.menuItemTitle:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.menuItemCon {
  height: 0;
  overflow: hidden;
  padding: 0;
  background: rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease-in-out;

  .menuChildItem {
    display: block;
    padding: 0 20px;
    color: rgba(0, 0, 0, 0.9);
    height: 40px;
    line-height: 40px;
    list-style-position: inside;
    font-size: 14px;
    list-style-type: disc;
    transition: background 0.3s linear;
    text-decoration: none;
    border-radius: 8px;
  }
  .menuChildItem:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  .menuChildItem.menuChildItemAct {
    background-color: #e6f4ff;
    color: #1677ff;
  }
}

.menuItemConAct {
  height: calc(var(--height) * 40px);
}
</style>
