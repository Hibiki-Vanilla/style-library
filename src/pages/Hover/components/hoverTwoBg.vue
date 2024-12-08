<template>
  <section class="hoverTwoBg">
    <div class="g-container">
      <div class="g-conImg"></div>
    </div>
    <!-- <div class="g-containerTwo">
      <div class="g-conImgTwo"></div>
      <svg
        class="svgMaskThumb"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="svgMaskThumb">
            <circle
              cx="60%"
              cy="30%"
              r="65%"
              data-svg-origin="251.197509765625 171.8512420654297"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px"
            ></circle>
            <circle
              cx="40%"
              cy="20%"
              r="65%"
              data-svg-origin="167.46499633789062 114.5675048828125"
              transform="matrix(1,0,0,0,1,0.0)"
              style="transform-origin: 0px 0px"
            ></circle>
            <circle
              cx="50%"
              cy="75%"
              r="65%"
              data-svg-origin="209.3312530517578 429.62811279296875"
              transform="matrix(1,0,0,0,1,0.0)"
              style="transform-origin: 0px 0px"
            ></circle>
          </clipPath>
        </defs>
      </svg>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "HoverTwoBg",
};
</script>

<style lang="less" scoped>
.hoverTwoBg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
}

.g-container {
  width: 827px;
  height: 980px;
  background-image: url(@/assets/hover/mures01.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.g-conImg {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/hover/mures02.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: circle(0px at 50% 50%);
  transition: clip-path 0.5s linear;
}

.g-container:hover .g-conImg {
  height: 100%;
  width: 100%;
  clip-path: circle(110% at 50% 50%);
}



.g-containerTwo {
  width: 827px;
  height: 980px;
  background-image: url(@/assets/hover/mures01.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.g-conImgTwo {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/hover/mures02.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: url(#svgMaskThumb);
}
.svgMaskThumb{
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.g-containerTwo:hover .g-conImgTwo {


}
</style>
