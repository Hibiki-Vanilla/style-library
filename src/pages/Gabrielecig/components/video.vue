<template>
  <div class="banner">
    <div class="fp-page__wrap">
      <div class="home-index-logo">
        <img src="@/assets/svg/logo.svg" alt="UWELL logo" class="logo" />
      </div>
      <div class="home-index-slg">
        <div class="title">KEEP IT REAL</div>
        <div class="content">Deliver Power And Belief</div>
      </div>
      <div class="home-index-action">
        <div class="home-index-btn" @click="maskStatusChange">
          <b></b>
        </div>
      </div>
      <div class="scroll-btn scroll-tip" @click="onSwiperScroll">
        <div class="scroll-btn__mouse"></div>
        <div class="scroll-btn__arrow">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSImI3g3QkFEOyYjeDU5MzQ7XyYjeDYyRjc7JiN4OEQxRDtfMV8iDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOCAxMSINCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOCAxMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IiYjeDdCQUQ7JiN4NTkzNDtfJiN4NjJGNzsmI3g4RDFEOyI+DQoJPGc+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjUsNy45OTggNSwwIDMuMDAxLDAgMy4wMDEsOCAwLDQuOTk5IDAsNi45OTkgDQoJCQkzLjAwMSwxMCA0LjAzMywxMSA1LDkuOTk4IDgsNi45OTkgOCw0Ljk5OSAJCSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"
            alt="gabriel"
          />
        </div>
      </div>
    </div>
    <div class="home-index-bg">
      <video
        src="https://files.myuwell.com/blob/gabriel/home-promotionalvideo/GABRIEL%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91%EF%BC%88%E4%BA%8C%E6%AC%A1%E5%89%AA%E8%BE%91%EF%BC%89_new_file(3)_x264-20220914134806.mp4"
        poster="https://files.myuwell.com/blob/gabriel/home-promotionalpic/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91GABRIEL%E5%B0%81%E9%9D%A2-20220914134814.png"
        autoplay="autoplay"
        autobuffer
        x5-video-player-type="h5"
        x-webkit-airplay
        playsinline
        webkit-playsinline
        loop="loop"
        muted="muted"
      ></video>
    </div>
    <div class="home-index-bg__mask"></div>
    <!-- mask -->
  </div>
</template>

<script>
export default {
  name: "BannerDiv",
  props: {
    maskStatusChange: {
      type: Function,
      default: () => {},
    },
    onSwiperScroll: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  .fp-page__wrap {
    z-index: 9;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    .home-index-logo {
      transition: opacity 1000ms;
      transition-delay: 200ms;
      position: absolute;
      top: 22px;
      left: 70px;
      z-index: 9;
      height: 46px;
      img {
        height: 46px;
        width: auto;
      }
    }
    .swiper-slide-active .home-index-logo {
      opacity: 1;
    }
    .swiper-slide-prev .home-index-logo {
      opacity: 0;
    }
    .home-index-slg {
      z-index: 9;
      margin-bottom: 44px;
      .title {
        font-size: 5.2vw;
        font-family: "PoppinsLatin ExtraBold";
        font-weight: 800;
        line-height: 1;
        color: #fff;
        width: 100%;
        text-align: center;
      }
      .content {
        width: 100%;
        padding-top: 26px;
        font-size: 2.34vw;
        font-family: "PoppinsLatin Regular";
        font-weight: 400;
        color: #fff;
        width: 100%;

        text-align: center;
      }
    }
    .home-index-action {
      position: relative;
      z-index: 9;
      width: 110px;
      height: 56px;
      .home-index-btn {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 106px;
        height: 56px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAA4CAYAAAAVZ21rAAAAAXNSR0IArs4c6QAAAm5JREFUeF7tl7/LEnEcxz1OCBp8nBwSLlwa7gQXeQjBCIyGihAHoWhxKmxqzAgOIfqBs4s03j+QQzjKhYODj9KiQyA43CDcFAiBXTj0EFE95zvuPb1d/by/L3i9pjOiKIpS+lEN7Pf7XRiGt3O53Ke4YOMQyjCM+3EHuvt/A/1+/7TVaj05xMrn82dxXlSoOJYSuPE872aj0Xi03W4rlmV9uQihUBcZSvD/4XB4p1ar3Vuv16e2bQf/QilUgiHiPO37/oNSqVTebDbXHccJ/7ZRqDg2E76Zz+ePLcu6EgTBDcdxvv4Jp1AJR4jzvGmaxnK5fJbJZMzxeHyr2Wx++32nUHFMEm6y2ay5WCyep9PpcDAY3HVd9/uvWIUiRIiLsCzr0nQ6dXe73edCofAwlUqdf+MqVFyLpLtisXjZ9/3XQRB8tG376U+sQpECHIOpVCono9Ho3Wq1el8ul18etgp1jEHibb1ez3me92Y2m/Wq1epbhSLKPxbVbrev9no9dzKZvFCoY+2R7zudzrVut/tKocjiEVwURR8UCjFH3igUWTiKUyjUHHmnUGThKE6hUHPknUKRhaM4hULNkXcKRRaO4hQKNUfeKRRZOIpTKNQceadQZOEoTqFQc+SdQpGFoziFQs2RdwpFFo7iFAo1R94pFFk4ilMo1Bx5p1Bk4ShOoVBz5J1CkYWjOIVCzZF3CkUWjuIUCjVH3ikUWTiKUyjUHHmnUGThKE6hUHPknUKRhaM4hULNkXcKRRaO4hQKNUfeKRRZOIpTKNQceadQZOEoTqFQc+SdQpGFoziFQs2RdwpFFo7izkOhD2jHM/ADHdbwJ8875eoAAAAASUVORK5CYII=)
          no-repeat 0 0/100% 100%;
        cursor: pointer;
        transition: all 500ms;
        &:hover {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAA4CAYAAAAVZ21rAAAAAXNSR0IArs4c6QAAAodJREFUeF7tl09Ik3Ecxt/xRjGxQo0iwyKIKV6EGjIjp7YwyRiIJy3wqCEMhCLGCH5EZandu3jwoIdu6sE//aW8F0SB4J9Dh8HCiTI3MZzhIYmo/O2J9zk9u+77/D7w+ZxeX3RkfsfRj2pgJ7+d+55db57uDc3Zgn27oSa6KqO2A939v4GaLlNbUd/es5lNN7+MNXyweVGhbCx5cHPh1mDjyeDVm9mNbxdfxyKL+yEUaj9DHv4f6nt2ray67vp6Kln7PtGS/BdKoTwMYfP0pcRYx5HTVcHtZCo0Y1rSf9solI1Nj28a7493+4+Vl+dSmfBb05T5E06hPI5g9bzr+iL9U30H/MXu15XZK1+M2fp9p1BWJr0/Olh02G14MBn3uW56dvVVq2NM/leqQnnfwJrgLz11KGyem/zW5qcXtyOdjuPsfeMqlLVGzmFxRaAoHB/tz62lpt7EW3t/UhWK478gSsm580fr7gwPZJJLw+9M+73dsUIVpJB3fCIYOR7sfvp4bfnz0NyjG08Uiue+YNLZy51nqjvumvTCx4RCFayPOwhEewKVbbGHCsX1DtGiI/MTCgWp444UiusbpikUrI47VCiub5imULA67lChuL5hmkLB6rhDheL6hmkKBavjDhWK6xumKRSsjjtUKK5vmKZQsDruUKG4vmGaQsHquEOF4vqGaQoFq+MOFYrrG6YpFKyOO1Qorm+YplCwOu5Qobi+YZpCweq4Q4Xi+oZpCgWr4w4ViusbpikUrI47VCiub5imULA67lChuL5hmkLB6rhDheL6hmkKBavjDhWK6xumKRSsjjtUKK5vmKZQsDruUKG4vmGaQsHquEOF4vqGaXuh4Bc0pBn4AfBTumBicdXLAAAAAElFTkSuQmCC);
          b {
            border-left-color: #4ea1d9;
          }
        }
        b {
          width: 0;
          height: 0;
          margin-left: 14px;
          border: 10px solid rgba(0, 0, 0, 0);
          border-left: 16px solid #fff;
          transition: all 500ms;
          position: relative;
          z-index: 1;
        }
      }
    }
    .scroll-tip {
      position: absolute;
      bottom: 124px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .scroll-btn {
      z-index: 9999;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      width: 100px;
      cursor: pointer;
      .scroll-btn__mouse {
        width: 26px;
        height: 40px;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSImI3g1NzA2OyYjeDg5RDI7XzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE3IDI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNyAyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IiYjeDU3MDY7JiN4ODlEMjsiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGOyIgZD0iTTguNSwwQzMuODA2LDAsMCwzLjgyOCwwLDguNTQ5djkuODk5DQoJCQljMCw0LjcyMiwzLjgwNiw4LjU0OSw4LjUsOC41NDljNC42OTUsMCw4LjUtMy44MjgsOC41LTguNTQ5VjguNTQ5QzE3LDMuODI4LDEzLjE5NSwwLDguNSwweiBNMTUsMTguNjA3DQoJCQljMCwzLjYxMS0yLjkxLDYuNTM4LTYuNSw2LjUzOGMtMy41OSwwLTYuNS0yLjkyNy02LjUtNi41MzhWOC41NDljMC0zLjYxMSwyLjkxLTYuNTM4LDYuNS02LjUzOGMzLjU5LDAsNi41LDIuOTI3LDYuNSw2LjUzOA0KCQkJVjE4LjYwN3ogTTguNSw1LjAyOUM3LjY3Miw1LjAyOSw3LDUuNzA1LDcsNi41Mzh2NS4wMjljMCwwLjgzMywwLjY3MiwxLjUwOSwxLjUsMS41MDlTMTAsMTIuNCwxMCwxMS41NjdWNi41MzgNCgkJCUMxMCw1LjcwNSw5LjMyOCw1LjAyOSw4LjUsNS4wMjl6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=)
          no-repeat top center/20px auto;
      }
      .scroll-btn__arrow {
        position: relative;
        width: 8px;
        height: 30px;
        margin-top: 10px;
        overflow: hidden;
        img {
          width: 8px;
          transform: translateY(-50%);
          animation: scrollmove 1.4s ease-in-out 0.4s infinite;
        }
      }
    }
  }

  .home-index-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    video {
      position: absolute;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
    }
  }
  .home-index-bg__mask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @keyframes scrollmove {
    0% {
      -webkit-transform: translateY(-150%);
      transform: translateY(-150%);
    }
    80% {
      -webkit-transform: translateY(300%);
      transform: translateY(300%);
    }

    100% {
      -webkit-transform: translateY(300%);
      transform: translateY(300%);
    }
  }
}
</style>
