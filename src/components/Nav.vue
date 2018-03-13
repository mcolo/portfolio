<template>
  <nav class="nav">
    <router-link to="/"><app-logo class="nav__logo"></app-logo></router-link>
    <router-link to="/contact" class="nav__link nav__link--contact">contact</router-link>
    <router-link to="/about" class="nav__link nav__link--about">about</router-link>
    <router-link to="/work" class="nav__link nav__link--work">work</router-link>
  </nav>
</template>

<script type="text/javascript">
  import Logo from './Logo.vue';

  export default {
    components: {
      appLogo: Logo
    }
  }
</script>

<style lang="scss" scoped>
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import '../scss/globals.scss';


  /////////////////////////////////////////
  //  STYLING
  /////////////////////////////////////////
  .nav {
    background-color: $green;
  }

  .nav__logo {
    fill: #fff;
    height: 40px;
    width: 40px;
    @include transition( 200ms );

    &:hover {
      @include transform( rotate(360deg) scale(1.2) );
    }
  }

  .nav__link {
    color: #fff;
    display: inline-block;
    float: right;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    @include transition( 100ms cubic-bezier(.4, 1, .8, 1.7) );
    @extend .heading-font;

  }


  /////////////////////////////////////////
  //  MEDIA QUERIES
  /////////////////////////////////////////
  @media (min-width: 768px) {
    .nav {
      height: 60px;

      .nav__logo {
        margin: 10px 0 0 15px;
      }

      .nav__link {
        font-size: 42px;
        line-height: 60px;
        margin: 0 0 0 15px;
        @include transform( translateY(-25px) );

        &.nav__link--contact {
          margin-right: 15px;
        }

        &.nav__link--active {
          @include transform( translateY(0) );
        }

        &:hover {
          @include transform( translateY(0) );
        }
      }

    }
  }

  @media (max-width: 767px) {
    .nav {
      height: 50px;

      .nav__logo {
        margin: 5px 0 0 10px;
      }

      .nav__link {

        &::before {
          background-color: #fff;
          content: "";
          bottom: -15px;
          height: 10px;
          left: calc(50% - 5px);
          position: absolute;
          width: 10px;
          z-index: 1;
          @include transition( 100ms cubic-bezier(.4, 1, .8, 1.7) );
          @include transform( rotate(45deg) );
        }

        &.nav__link--contact {
          margin-right: 10px;
        }

        &.nav__link--active::before {
          bottom: -5px;
        }
      }

    }
  }

  @media (min-width: 350px) and (max-width: 767px) {
    .nav .nav__link {
      font-size: 36px;
      line-height: 50px;
      margin: 0 0 0 10px;
      position: relative;
    }
  }

  @media (max-width: 350px) {
    .nav .nav__link {
      font-size: 24px;
      line-height: 50px;
      margin: 0 0 0 15px;
      position: relative;
    }
  }

</style>
