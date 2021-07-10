<template>
  <app-header />

  <img
    class="photo"
    :src="`${assetsPath}img/photo.jpeg`"
    alt="фото"
  >

  <screen-1 />
  <screen-2 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/app/AppHeader.vue'
import Screen1 from './components/screen/Screen1.vue'
import Screen2 from './components/screen/Screen2.vue'

export default defineComponent({
  components: {
    AppHeader,
    Screen1,
    Screen2
  },

  setup () {
    return {
      assetsPath: `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`
    }
  }
})
</script>

<style lang="scss">
@import './assets/styles';
</style>

<style lang="scss" scoped>
.photo {
  width: 100%;
  max-height: 546px;
  object-fit: cover;
}
</style>
