<template>
  <div class="vpHead">
    <div class="vpHeadWrap">
      <!-- 顶部头 -->
      <div class="vpHeadTopbar">
        <ul class="vpHeadTopbarNavs">
          <li v-for="(item, index) of navsList" :key="index">
            {{ item.name }}
          </li>
        </ul>
        <div class="vpHeadTopUser">
          <li v-for="(item, index) of userList" :key="index">
            {{ item.name }}
          </li>
        </div>
      </div>
      <!-- 滚动头 -->
      <div class="vpHeadMainbar">
        <div class="vpHeadLogo">
          <a></a>
        </div>
        <div class="vpHeadSite">
          <div class="vpHeadSiteWrap">
            <div class="vpHeadSiteNavs">
              <div class="vpHeadSiteNavsContainer">
                <ul class="vpHeadSiteNavsUl">
                  <li
                    class="vpHeadSeriesLi"
                    v-for="(item, index) of navList"
                    :key="index"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 按钮区 -->
        <div class="vpHeadSearchBtn">
          <div>
            <span class="vpHeadSearchConfirm"></span>
            <span class="vpHeadSearchClose"></span>
            <span class="vpHeadSearchOpen"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navsList: [
        { name: "品牌" },
        { name: "OriginOs" },
        { name: "体验店" },
        { name: "社区" },
      ],
      userList: [{ name: "下载APP" }, { name: "购物车" }, { name: "个人中心" }],
      navList: [
        { name: "X系列" },
        { name: "S系列" },
        { name: "T系列" },
        { name: "Y系列" },
        { name: "iQOO手机" },
        { name: "智能硬件" },
        { name: "商城" },
        { name: "服务" },
      ],
    };
  },
};
</script>

<style scoped>
.vpHead {
  height: 40px;
  position: relative;
  z-index: 999;
  line-height: 1;
}
.vpHeadWrap {
  transition: background-color 0.3s ease-in-out;
}
.vpHeadWrap a {
  text-decoration: none;
  cursor: pointer;
  outline: 0 none;
  -webkit-tap-highlight-color: transparent;
}

/* 顶部bar */
.vpHeadTopbar {
  width: 100%;
  height: 40px;
  z-index: 1002;
  position: relative;
  background: #242933;
  font-size: 0;
}

.vpHeadTopbarNavs {
  display: inline-block;
  padding-left: 80px;
  margin: 0;
  list-style-type: none;
}
.vpHeadTopbarNavs li {
  display: inline-block;
  padding-right: 42px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  outline: 0 none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease-in-out;
  font-size: 12px;
  color: #8a8f99;
  font-weight: 400;
  line-height: 40px;
}
.vpHeadTopbarNavs li:hover {
  color: #fff;
}
.vpHeadTopUser {
  display: inline-block;
  position: absolute;
  right: 0;
  padding-right: 80px;
}

.vpHeadTopUser li {
  display: inline-block;
  margin-right: 41px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  outline: 0 none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease-in-out;
  font-size: 12px;
  color: #8a8f99;
  font-weight: 400;
  line-height: 40px;
}
.vpHeadTopUser li:hover {
  color: #fff;
}

.vpHeadMainbar {
  position: relative;
  width: 100%;
}

.vpHeadLogo {
  height: 0;
  margin: 0 auto;
  z-index: 1000;
  position: relative;
  padding-left: 80px;
}
.vpHeadLogo a {
  position: absolute;
  font-size: 0;
  box-sizing: border-box;
  padding-top: 26px;
}
.vpHeadLogo a:before {
  content: "vivo";
  font-size: 35px;
  transition: all 0.4s ease-in-out;
}

/* site */
.vpHeadSite {
  position: relative;
  width: 100%;
  height: 86px;
  font-size: 14px;
  color: inherit;
  font-weight: 400;
  line-height: 86px;
  z-index: 998;
  background: transparent;
}
.vpHeadSiteWrap {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding: 0 80px;
}
.vpHeadSiteNavs {
  position: relative;
  margin: 0 28px 0 104px;
  height: 100%;
  text-align: center;
}
.vpHeadSiteNavsContainer {
  position: relative;
  width: 100%;
}
.vpHeadSiteNavsUl {
  display: inline-table;
  width: 100%;
}
.vpHeadSeriesLi {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  padding: 0 21px;
  color: #242933;
  text-decoration: none;
  cursor: pointer;
  outline: 0 none;
  font-size: 14px;
  transition: color 0.3s ease-in-out;
}
.vpHeadSeriesLi:hover {
  color: #415fff;
}
.vpHeadSearchBtn {
  position: relative;
  width: 100%;
  padding: 0 80px;
  top: -86px;
  margin: 0 auto;
  z-index: 1001;
  box-sizing: border-box;
}
/* 按钮区 */
.vpHeadSearchBtn > div {
  position: relative;
}

.vpHeadSearchConfirm,
.vpHeadSearchClose,
.vpHeadSearchOpen{
  position: absolute;
  width: 28px;
  height: 28px;
  line-height: 28px;
  top: 29px;
  text-align: center;
  cursor: pointer;
  right: 0;
  opacity: 0;
}
.vpHeadSearchConfirm:before,
.vpHeadSearchClose::before,
.vpHeadSearchOpen::before {
  color: #242933;
}
.vpHeadSearchConfirm:before,
.vpHeadSearchClose:before,
.vpHeadSearchOpen:before {
  content: "搜";
  font-family: Header-icon-pc;
  display: block;
  font-size: 28px;
  transition: color 0.3s ease-in-out;
}
.vpHeadSearchConfirm {
  transition: right 0.5s ease, opacity 0s ease 0.5s, color 5s ease;
}


.vpHeadSearchClose{
  transition: opacity .5s ease;
}
.vpHeadSearchOpen{
      opacity: 1;
    transition: opacity 0s ease .5s;
}
</style>
