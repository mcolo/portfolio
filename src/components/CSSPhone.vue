<template>
  <div class="phone">
    <div class="speaker"></div>
    <div class="screen">
      <img :src="img" class="screen__img display-img" alt="" />
    </div>
    <div class="home-button"></div>
  </div>
</template>

<script>
  export default {
    props: ['img']
  }
</script>