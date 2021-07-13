<template>
  <div
    class="screen"
    :style="{ background: `url('${assetsPath}img/pattern.svg')`}"
  >
    <div class="col-1">
      <div
        class="img"
        :style="{ 'background-image': `url('${images[currentImg]}')` }"
      />

      <div class="dots">
        <button
          v-for="i in images.length"
          :key="i"
          class="dot"
          :class="{ 'dot-active': currentImg === i - 1 }"
          @click="currentImg = i - 1"
        />
      </div>
    </div>

    <div>
      <p class="heading">
        Настольная игра МАРБЛС
      </p>
      <p class="desc">
        Сделана в России, играют во всем мире
      </p>

      <app-buy />

      <div class="btn-other">
        <button class="btn btn-ozone">
          Купить на OZON
        </button>
        <button class="btn btn-wb">
          Купить на WB
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppBuy from '../app/AppBuy.vue'

export default defineComponent({
  components: { AppBuy },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const images = [
      `${assetsPath}img/photo.jpeg`,
      'https://picsum.photos/600/800',
      'https://picsum.photos/601/800',
      'https://picsum.photos/602/800'
    ]
    const currentImg = ref(0)

    return {
      assetsPath,
      images,
      currentImg
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  padding: 31px 77px 77px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 93px;
  background-size: 1650px !important;
  background-position: -30px -50px !important;
}

.col {
  &-1 {
    .img {
      height: 701px;
      width: 100%;
      background-size: cover;
      border-radius: 17px;

      @include transition;
    }
  }
}

.dot {
  $size: 15px;

  width: $size;
  height: $size;
  border: none;
  border-radius: 100%;
  background: rgba($lightgray, 30%);

  @include transition;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &-active {
    background: $yellow;
  }

  &s {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}

.heading {
  font-size: 52px;
  line-height: 78px;
  color: $yellow;

  @include font-bold;
}

.desc {
  color: $white;
  font-size: 27px;
  line-height: 40px;
  max-width: 380px;
  margin-bottom: 50px;

  @include font-medium;
}

.btn {
  $mw: 380px;

  height: 67px;
  max-width: $mw;
  font-size: 20px;
  line-height: 30px;
  user-select: none;
  border-radius: 11px;

  @include font-bold;

  &-other {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: $mw;

    button {
      border: none;
      max-width: unset;
      font-size: 18px;
      line-height: 21px;
      color: $white;

      @include transition;
    }
  }

  &-ozone {
    $blue-dark: #0047ac;

    background: #0069ff;

    &:hover {
      background: $blue-dark;
    }

    &:active {
      background: rgba($blue-dark, 0.6);
    }
  }

  &-wb {
    $purple-dark: #6f0e6b;

    background: #981393;

    &:hover {
      background: $purple-dark;
    }

    &:active {
      background: rgba($purple-dark, 0.6);
    }
  }
}
</style>
