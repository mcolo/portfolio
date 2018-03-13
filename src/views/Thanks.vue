<template>
  <div class="thanks-page">
    <div class="thanks">
      <h2 class="thanks__title">thanks!</h2>
      <p class="thanks__message">I'll get back to you shortly.</p>
    </div>
    <div>
      <router-link to="/work" class="thanks__link">work</router-link>
      <router-link to="/about" class="thanks__link">about</router-link>
      <router-link to="/contact" class="thanks__link">contact</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import '../scss/globals.scss';

  .thanks-page {
    align-items: center;
    background-color: $green;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;
  }

  .thanks {
    background-color: #26a38f;
    margin: 0 0 50px;
    padding: 30px;
    position: relative;
    @include border-radius(6px);

    &::before {
      background-color: #26a38f;
      background: linear-gradient(to bottom right, $green, $green 50%, #26a38f 50%, #26a38f 100%);
      bottom: -20px;
      content: "";
      height: 40px;
      left: -20px;
      position: absolute;
      width: 40px;
      @include transform( rotate(-45deg) );
    }
  }

  .thanks__title,
  .thanks__message,
  .thanks__link {
    color: #fff;
  }

  .thanks__title {
    margin: 0;
    padding: 0;
    @extend .heading-font;
    @extend .heading-copy;
  }

  .thanks__message {
    margin-bottom: 0;
    @extend .body-font;
    @extend .body-copy;
  }

  .thanks__link {
    color: #fff;
    display: inline-block;
    font-size: 24px;
    margin: 0 10px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 1;
    @extend .heading-font;

    &:hover{
      color: $green;
      &::before {
        top: -3px;
      }
    }

    &::before {
      background-color: #fff;
      bottom: -3px;
      content: '';
      left: -5px;
      right: -5px;
      top: calc(100% + 1px);
      position: absolute;
      z-index: -1;
      @include transition( 120ms cubic-bezier(.4, 1, .8, 1.2) );
    }
  }
</style>
