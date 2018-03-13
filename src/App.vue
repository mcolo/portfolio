<template>
    <div>
      <transition :name="routeTransition" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        routeTransition: '',
      }
    },
    watch: {
      '$route'(to, from) {
        const fromChild = this.isChild(from.name);
        const toChild = this.isChild(to.name);
        const fromHome = from.name == 'home';
        const toHome = !fromHome;

        switch(true) {
          case fromChild && toHome:
            this.routeTransition = 'child-home';
            break;
          case fromHome && toChild:
            this.routeTransition = 'home-child';
            break;
          default:
            this.routeTransition = 'faded';
            break;
        }
      }
    },
    methods: {
      isChild(page) {
        return page == 'work' 
          || page == 'about' 
          || page == 'contact'
          || page == 'thanks';
      }
    }
  }
</script>

<style lang="scss">
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz|Hind');
  @import './scss/normalize.scss';
  @import './scss/globals.scss';


  /////////////////////////////////////////
  //  STYLING
  /////////////////////////////////////////
  .faded-leave-active {
    animation: home-fadeout 150ms ease-in;
  }

  .faded-enter-active {
    animation: home-fadein 150ms ease-out;
  }

  .child-home-leave-active {
    animation: home-fadeout 150ms ease-in;
  }

  .child-home-enter-active {
    animation: maximize 200ms ease-out;
  }

  .home-child-leave-active {
    animation: minimize 200ms ease-in;
  }

  .home-child-enter-active {
     animation: home-fadein 200ms ease-out;
  }


  /////////////////////////////////////////
  //  ANIMATIONS
  /////////////////////////////////////////
  @include keyframes(maximize) {
    from {
      @include transform( translateY(-100%) );
    }
    to {
      @include transform( translateY(0) );
    }
  }

  @include keyframes(minimize) {
    from {
      @include transform( translateY(0) );
    }
    to {
      @include transform(translateY(-100%) );
    }
  }

  @include keyframes(home-fadein) {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @include keyframes(home-fadeout) {
    from { opacity: 1; }
    to { opacity: 0; }
  }
</style>
