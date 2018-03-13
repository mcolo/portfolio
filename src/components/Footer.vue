<template>
  <footer class="footer">
    <app-logo class="footer__logo"></app-logo>
    <div class="footer__links">
      <div class="link-group">
        <div><router-link class="footer__link internal" to="/work">Work</router-link></div>
        <div><router-link class="footer__link internal" to="/about">About</router-link></div>
        <div><router-link class="footer__link internal" to="/contact">Contact</router-link></div>
      </div>
      <div class="link-group">
        <div><a class="footer__link" href="https://www.linkedin.com/in/maxmiracolo" target="_blank">LinkedIn</a></div>
        <div><a class="footer__link" href="mailto:max.miracolo@gmail.com" target="_blank">Email</a></div>
        <div><a class="footer__link" href="http://maxmiracolo.com/MaxMiracolo-Resume.pdf" target="_blank">Resume</a></div>
      </div>
      <div class="link-group">
        <div><a class="footer__link" href="https://codepen.io/mcolo" target="_blank">CodePen</a></div>
        <div><a class="footer__link" href="https://github.com/mcolo" target="_blank">GitHub</a></div>
      </div>
    </div>
  </footer>
</template>

<script>
  import appLogo from './Logo.vue';
  export default {
    components: {
      appLogo
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
  .footer {
    background-color: transparentize($purple, .9);
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .footer__logo {
    fill: transparentize($purple, .9);
    height: 300%;
    position: absolute;
    right: 0;
    top: -100%;
  }

  .footer__link {
    color: $blue;
    display: inline-block;
    letter-spacing: 1px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 1;
    @extend .heading-font;

    &.internal {
      color: $green;
      &::before {
        background-color: $green;
      }
    }

    &:hover{
      color: #fff;
      &::before {
        top: -3px;
      }
    }

    &::before {
      background-color: $blue;
      bottom: -3px;
      content: '';
      left: -3px;
      right: -3px;
      top: calc(100% + 3px);
      position: absolute;
      z-index: -1;
      @include transition( 120ms cubic-bezier(.4, 1, .8, 1.2) );
    }
  }


  /////////////////////////////////////////
  //  MEDIA QUERIES
  /////////////////////////////////////////
  @media (min-width: 768px) {
    .footer {
      padding: 40px;
      
      .link-group {
        display: inline-block;
        margin: 0 70px 0 0;
        vertical-align: top;

        .footer__link {
          margin: 5px 0;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .footer {
      padding: 40px;

      .link-group {
        display: block;
        text-align: center;

        .footer__link {
          font-size: 20px;
          line-height: 1.1;
          margin: 10px 0;
        }
      }
    }
  }
</style>