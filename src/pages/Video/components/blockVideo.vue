<template>
  <section class="blockVideo">
    <div class="container">
      <div class="row rowItem">
        <!-- block -->
        <div class="col-lg-6 d-flex justify-content-center">
          <video class="blockItem" playsinline controls="controls">
            <source
              src=" https://files.myuwell.com/blob/gabrielecig/video/3.2M.mp4"
              type="video/mp4"
            />
            你的浏览器不支持Video标签
          </video>
        </div>

        <div class="col-lg-6">
          <h3>区域内点击播放视频,带有控制栏</h3>
          <p>1. 视频大小需要根据情况尽量选择较小的格式,建议在5mb以内</p>
          <p>2. 可设置加载后自动播放,部分浏览器默认禁止自动播,需注意。</p>
        </div>
      </div>

      <!-- End block -->

      <!--  -->
      <div class="row rowItem">
        <div class="col-lg-6">
            <h3>视频作为背景自动播放</h3>
            <p>1. 需要一张封面图作为视频无法播放情况的展示</p>
            <p>2. 移动端上对较为落后的浏览器兼容不好,建议在移动端模式下隐藏此功能</p>
            <p>3. 可在视频上添加文字或其他内容</p>
        </div>
        <div class="col-lg-6 backgroundCol">
            <div class="absText">文字展示</div>
          <video
            muted=""
            x5-video-player-type="h5"
            x-webkit-airplay="true"
            webkit-playsinline
            playsinline
            x5-playsinline
            preload="auto"
            autoplay="autoplay"
            class="blockItem"
            loop
            poster="https://files.myuwell.com/blob/gabrielecig/index/video.webp"
            name="media"
          >
            <source
              src=" https://files.myuwell.com/blob/gabrielecig/video/3.2M.mp4"
              type="video/mp4"
            />
            你的浏览器不支持Video标签
          </video>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.rowItem{
    padding: 30px 0;
}
.blockVideo {
  width: 100%;
  padding: 60px 0;
  min-height: 100vh;
}
.blockItem {
  height: 100%;
  width: 100%;
}
.backgroundCol{
    position: relative;
}
.absText{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    font-size: 36px;
    font-weight: bolder;
    color: red;
}
</style>