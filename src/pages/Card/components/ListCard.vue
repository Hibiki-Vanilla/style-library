<template>
  <section class="listCard">
    <div class="listWrapper">
      <div class="listContent">
        <div class="transitionWrapper">
          <!-- item -->
          <div
            @mouseover="cardLeave(index)"
            :class="{ 'cardItemHover': index === cardIndex }"
            class="cardItem"
            v-for="index of 4"
            :key="index"
          >
            <div class="part">
              <div class="avatar"></div>
              <div class="name">Name</div>
              <div class="category">Type</div>
              <div class="rank">NO.37</div>
            </div>

            <div class="part-show">
              <div class="star">
                <div class="star-label">DataNumber</div>
                <div class="star-count">89.9</div>
              </div>
              <div class="star star-two">
                <div class="star-label">FanNumber</div>
                <div class="star-count">20W</div>
              </div>
              <div class="star star-three">
                <div class="star-label">PlayTime</div>
                <div class="star-count">157W</div>
              </div>
            </div>
          </div>
          <!-- End Item -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cardIndex: 1,
    };
  },
  methods: {
    cardLeave(index) {
      this.cardIndex = index;
    },
  },
};
</script>

<style scoped>
.listCard {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.listWrapper {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 1164px;
  height: 406px;
  padding-left: 20px;
  background: #fff;
}
.listContent {
  position: relative;
  display: flex;
  flex-direction: row;
}
.transitionWrapper {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
}
.cardItem{
  margin-right: 24px;
  display: flex;
  box-shadow: 0 8px 20px rgb(21 18 53 / 12%);
  border-radius: 4px;
  overflow: hidden;
  height: 352px;
  width: 216px;
  flex-shrink: 0;
  transition: all 0.3s;
  position: relative;
  background: #fff;
}
.cardItem.cardItemHover{
  width: 408px;
}
.part {
  width: 216px;
  height: 352px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.avatar {
  background-image: url(https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_92fd80810451dd5e981d1b844551d36b.jpeg?from=4010531038);
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #999;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.avatar:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 128px;
  height: 146px;
  top: -23px;
  left: -6px;
}
.name {
  font-weight: 600;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  margin-top: 24px;
  width: 150px;
}
.category {
  color: #10b3c9;
  background: rgba(31, 240, 227, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 12px;
  line-height: 12px;
  margin-top: 24px;
  max-width: 126px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rank {
  font-weight: 600;
  margin-top: 24px;
  padding-top: 24px;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  color: #fe346e;
  width: 100%;
  border-top: 1px solid #e2e2e2;
}

.part-show {
  margin-left: 24px;
  width: 192px;
  height: 352px;
  padding: 55px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
}
.star {
  transition: all 0.3s 0.1s;
  width: 100%;
  color: #333;
  margin-left: -24px;
  opacity: 0;
}
.cardItemHover .star {
  margin-left: 0;
  opacity: 1;
  /* transform: none;
    transition: none; */
}
.star-two {
  transition: all 0.3s 0.2s;
}
.star-three {
  transition: all 0.3s 0.3s;
}
.star-lable {
  color: #666;
  font-size: 18px;
  line-height: 24px;
}
.star-count {
  font-family: SFMono;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-top: 8px;
}
</style>
