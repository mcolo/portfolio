<template>
  <div class="home-page" id="home-page">
    <div class="logo">
      <app-logo></app-logo>
    </div>
<!--     <div class="title">
      MAX MIRACOLO <br> Frontend Developer &amp; UI Designer
    </div> -->
    <p class="name">Max Miracolo</p>
    <p class="title">Frontend Developer <br>&amp; UI Designer</p>
    <router-link to="/work" class="link" style="z-index:3;">Work</router-link>
    <router-link to="/about" class="link" style="z-index:2;">About</router-link>
    <router-link to="/contact" class="link" style="z-index:1;">Contact</router-link>
  </div>
</template>

<script type="text/javascript">
  import Logo from '../components/Logo.vue';

  export default {
    components: {
      appLogo: Logo
    }
  }
</script>

<style lang="scss">
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import '../scss/globals.scss';


  /////////////////////////////////////////
  //  STYLING
  /////////////////////////////////////////
  .home-page {
    align-items: center;
    background-color: $green;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name,
    .title {
      color: #fff;
      font-size: 16px;
      letter-spacing: 1px;
      margin: 0;
      padding: 0;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      @extend .body-font;
    }

    .name {
      margin: -5px 0 0;
    }

    .title {
      margin: 0 0 15px;
    }

    .link {
      color: #fff;
      display:block;
      font-size: 55px;
      letter-spacing: 1px;
      line-height: 1;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-font-smoothing: antialiased;
      @include transition( 130ms cubic-bezier(.4, 1, .8, 1.8) );
      @extend .heading-font;

      &:hover {
        letter-spacing: 6px;
        text-indent: 6px;
      }

      &:active {
        letter-spacing: 10px;
        text-indent: 10px;
      }
    }

    .logo {
      svg {
        display: inline-block;
        fill: #fff;
        height: 120px;
        stroke: $green;
        stroke-width: 1px;
        @include transition(150ms);
        width: 120px;
        vertical-align: middle;
      }
    }
  }

  /////////////////////////////////////////
  //  MEDIA QUERIES
  /////////////////////////////////////////
  @media (min-width: 768px) {
    .home-page {
      height: 100vh;
      width: 100vw;
    }
  }

  @media (max-width: 767px) {
    html,
    body,
    body > div {
      height: 100%;
    }

    .home-page {
      height: 100%;
      width: 100%;
    }
  }
</style>
