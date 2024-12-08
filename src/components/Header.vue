<template>
  <!-- ======= Header ======= -->
  <header id="header" class="sticky-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html"></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html" class="active">HOME</a></li>
          <li><a href="product.html">PRODUCT</a></li>
          <li><a href="about.html">ABOUT US</a></li>
          <li><a href="contact.html">CONTACT US</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
</template>

<script>
export default {
  name: 'HeaderBox',

}
</script>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background: white;
  transition: all 0.5s;
  z-index: 900;
  padding: 20px 0;
  flex-direction: column;
}

#header .sticky-top {
  position: sticky;
}

#header.header-scrolled .top-tip {
  height: 0;
}

#header.header-scrolled {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  top: 0px;
}

#header.header-inner-pages {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
}

#header .logo a {
  color: #556270;
  display: block;
  height: 33px;
  width: 100px;
  background-image: url(https://files.myuwell.com/blob/gabrielecig/logo.svg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#header .logo iframe {
  max-height: 40px;
}

</style>
