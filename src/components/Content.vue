<template>
  <div>
    <app-nav></app-nav>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Nav from './Nav.vue';
  import Footer from './Footer.vue';

  export default {
    components: {
      appNav: Nav,
      appFooter: Footer
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
  .fade-leave-active {
    animation: child-fadeout 150ms ease-in;
  }

  .fade-enter-active {
    animation: child-fadein 150ms ease-out;
  }


  /////////////////////////////////////////
  //  ANIMATION
  /////////////////////////////////////////
  @include keyframes(child-fadein) {
    from {
      opacity: 0;
      @include transform( translateY(15px) );
    }

    to {
      opacity: 1;
      @include transform( translateY(0px) );
    }
  }

  @include keyframes(child-fadeout) {
    from {
      opacity: 1;
      @include transform( translateY(0) );
    }

    to {
      opacity: 0;
      @include transform( translateY(15px) );
    }
  }
</style>
