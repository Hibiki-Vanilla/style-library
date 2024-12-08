<template>
  <!-- ======= Menu Section ======= -->
  <section id="menu" class="menu">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Our Menu</h2>
        <p>Check Our <span>Yummy Menu</span></p>
      </div>

      <ul
        class="nav nav-tabs d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <li
          class="nav-item"
          v-for="(item, index) in navList"
          :key="index"
          @click="active = index"
        >
          <a class="nav-link" :class="[{ 'active show': active === index }]">
            <h4>{{ item.name }}</h4>
          </a>
        </li>
        <!-- End tab nav item -->
      </ul>

      <div class="tab-content" data-aos="fade-up" data-aos-delay="300">
        <div
          class="tab-pane fade"
          :class="[{ 'active show': active === index }]"
          id="menu-starters"
          v-for="(item, index) in navList"
          :key="index"
        >
          <div class="tab-header text-center">
            <p>Menu</p>
            <h3>{{ item.name }}</h3>
          </div>

          <div class="row gy-5">
            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-1.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-1.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Magnam Tiste</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$5.95</p>
            </div>
            <!-- Menu Item -->

            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-2.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-2.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Aut Luia</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$14.95</p>
            </div>
            <!-- Menu Item -->

            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-3.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-3.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Est Eligendi</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$8.95</p>
            </div>
            <!-- Menu Item -->

            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-4.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-4.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Eos Luibusdam</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$12.95</p>
            </div>
            <!-- Menu Item -->

            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-5.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-5.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Eos Luibusdam</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$12.95</p>
            </div>
            <!-- Menu Item -->

            <div class="col-lg-4 menu-item">
              <a href="@/assets/yummy/menu/menu-item-6.png" class="glightbox"
                ><img
                  src="@/assets/yummy/menu/menu-item-6.png"
                  class="menu-img img-fluid"
                  alt=""
              /></a>
              <h4>Laboriosam Direva</h4>
              <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
              <p class="price">$9.95</p>
            </div>
            <!-- Menu Item -->
          </div>
        </div>
        <!-- End Menu Content -->
      </div>
    </div>
  </section>
  <!-- End Menu Section -->
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navList: [
        {
          name: "Starters",
        },
        {
          name: "Breakfast",
        },
        {
          name: "Lunch",
        },
        {
          name: "Dinner",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../var.less";
/*--------------------------------------------------------------
# Menu Section
--------------------------------------------------------------*/
.menu .nav-tabs {
  border: 0;
}

.menu .nav-link {
  margin: 0 10px;
  padding: 10px 5px;
  transition: 0.3s;
  color: @color-secondary;
  border-radius: 0;
  cursor: pointer;
  height: 100%;
  border: 0;
  border-bottom: 2px solid #b6b6bf;
}

@media (max-width: 575px) {
  .menu .nav-link {
    margin: 0 10px;
    padding: 10px 0;
  }
}

.menu .nav-link i {
  padding-right: 15px;
  font-size: 48px;
}

.menu .nav-link h4 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  font-family: @font-secondary;
}

@media (max-width: 575px) {
  .menu .nav-link h4 {
    font-size: 16px;
  }
}

.menu .nav-link:hover {
  color: @color-primary;
}

.menu .nav-link.active {
  color: @color-primary;
  border-color: @color-primary;
}

.menu .tab-content .tab-header {
  padding: 30px 0;
}

.menu .tab-content .tab-header p {
  font-size: 14px;
  text-transform: uppercase;
  color: #676775;
  margin-bottom: 0;
}

.menu .tab-content .tab-header h3 {
  font-size: 36px;
  font-weight: 600;
  color: @color-primary;
}

.menu .tab-content .menu-item {
  -moz-text-align-last: center;
  text-align-last: center;
}

.menu .tab-content .menu-item .menu-img {
  padding: 0 60px;
  margin-bottom: 15px;
}

.menu .tab-content .menu-item h4 {
  font-size: 22px;
  font-weight: 500;
  color: @color-secondary;
  font-family: @font-secondary;
  font-weight: 30px;
  margin-bottom: 5px;
}

.menu .tab-content .menu-item .ingredients {
  font-family: @font-secondary;
  color: #8d8d9b;
  margin-bottom: 5px;
}

.menu .tab-content .menu-item .price {
  font-size: 24px;
  font-weight: 700;
  color: @color-primary;
}
</style>
