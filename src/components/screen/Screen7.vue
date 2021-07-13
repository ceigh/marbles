<template>
  <div
    class="screen"
    :style="{ background: `url('${assetsPath}img/pattern.svg')`}"
  >
    <div class="col-1" />

    <div class="col-2">
      <app-buy />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBuy from '../app/AppBuy.vue'

export default defineComponent({
  components: { AppBuy },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    return {
      assetsPath
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0 93px 42px;
}

.col {
  &-1 {
    // padding-top: 189px;
  }

  &-2 {
    padding-top: 140px;
  }
}
</style>
