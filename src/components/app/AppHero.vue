<template>
  <img
    class="photo"
    :src="`${assetsPath}img/photo.jpeg`"
    alt="фото"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    return {
      assetsPath
    }
  }
})
</script>

<style lang="scss" scoped>
.photo {
  width: 100%;
  max-height: 546px;
  object-fit: cover;
}
</style>
