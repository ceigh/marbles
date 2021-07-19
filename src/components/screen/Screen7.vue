<template>
  <div
    class="screen"
    :style="{ background: `url('${assetsPath}img/pattern.svg')`}"
  >
    <div class="screen-content">
      <div class="col-1">
        <div class="circle" />
        <img
          class="box"
          :src="`${assetsPath}img/box.svg`"
          alt="коробка"
          loading="lazy"
        >
        <img
          class="cards"
          :src="`${assetsPath}img/cards.svg`"
          alt="карты"
          loading="lazy"
        >
      </div>

      <div class="col-2">
        <app-buy />
      </div>
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
  background-position: -30px -20px !important;

  &-content {
    @include max-width;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 31px;
    padding-bottom: 160px;
  }
}

.col {
  &-1 {
    position: relative;
    padding: 65px 0 0 188px;

    .circle {
      $size: 509px;

      width: $size;
      height: $size;
      border-radius: 100%;
      border: 6px solid $yellow;
      filter:
        drop-shadow(0 0 104px $yellow)
        drop-shadow(0 0 52px rgba($yellow, 0.4))
        drop-shadow(0 0 26px rgba($yellow, 0.25));
      position: absolute;
      left: 142px;
      top: 65px;
    }

    .box {
      position: relative;
      width: 596px;
    }

    .cards {
      position: absolute;
      left: 211px;
      top: 299px;
    }
  }

  &-2 {
    padding-top: 140px;
  }
}
</style>
