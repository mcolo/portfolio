<template>
  <div class="browser">
    <div class="controls"></div>
    <div class="window">
      <img :src="img" class="browser__img display-img" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['img']
  }
</script>
