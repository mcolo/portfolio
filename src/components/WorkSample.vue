<template>
  <div class="sample">
    <div class="sample__content">
      <h2 class="content__title">{{ content.title }}</h2>

      <div class="sample__img--sm" v-if="!largeScreen">
        <!-- <css-phone :imgs="content.imgData.phone"></css-phone> -->
        <img :src="content.imgData.browser" style="width: 100%;"/>
      </div>

      <p v-for="s in content.summary" class="content__summary">{{ s }}</p>
      <a class="content__link" :href="content.link.url" target="_blank">{{ content.link.title }}</a>
    </div>
    <div class="sample__img" v-if="largeScreen">
      <div class="showcase">
        <css-browser :img="content.imgData.browser"></css-browser>
        <css-phone :img="content.imgData.phone" v-if="content.imgData.phone"></css-phone>
      </div>
      <!-- <site-showcase :imgData="content.imgData"></site-showcase> -->
    </div>
  </div>
</template>

<script type="text/javascript">
  import cssPhone from './CSSPhone.vue'
  import cssBrowser from './CSSBrowser.vue'

  export default {
    props: ['content'],
    components: {
      cssPhone,
      cssBrowser
    },
    data() {
      return {
        largeScreen: this.isLargeScreen(),
      }
    },
    methods: {
      isLargeScreen() {
        return window.innerWidth > 768;
      },

    },
    created() {
      window.addEventListener('resize', () => {
        this.largeScreen = this.isLargeScreen();
      });
    }
  }
</script>

<style lang="scss">
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import '../scss/globals.scss';
  @import '../scss/showcase.scss';


  /////////////////////////////////////////
  //  STYLING
  /////////////////////////////////////////
  .sample {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .sample__content{
      box-sizing: border-box;
      flex: 1;
    }

    .sample__img {
      box-sizing: border-box;
      flex: 1;
    }
  }

  .sample__img--sm {
    overflow: hidden;
    position: relative;

    .phone {
      --phone-height: 500px;
      height: 500px;
      margin: 0 auto;
      position: relative;
      width: 240px;
    }
  }

  .content__title {
    margin: 0;
    @extend .heading-copy;
  }

  .content__summary {
   @extend .body-copy;
  }

  .content__link {
    @extend .boxed-link;
  }


  /////////////////////////////////////////
  //  MEDIA QUERIES
  /////////////////////////////////////////
  @media (min-width: 768px) {
    .sample {
      min-height: calc(100vh - 60px);

      .sample__img--sm {
        margin: 20px 0 30px;
        padding: 30px 0 0;
      }
    }
  }

  @media (max-width: 767px) {
    .sample {
      height: auto;

      .sample__img--sm {
        margin: 0;
        padding: 15px 0 0;
      }
    }
  }

  @media (min-width: 500px) {
    .sample {
      padding: 40px 0;

      .sample__content {
        min-width: 500px;
        padding: 30px 70px;
      }

    }
  }

  @media (max-width: 499px) {
    .sample {
      padding: 40px;

      .sample__content {
        padding: 0;
        width: 100%;
      }

    }
  }
</style>
