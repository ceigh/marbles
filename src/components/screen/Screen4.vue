<template>
  <div
    id="order"
    class="screen"
  >
    <div class="circles">
      <div
        v-for="i in 5"
        :key="i"
        class="circle"
        :class="{ 'circle-highlight': i > 2 }"
      />
    </div>

    <div class="col-1">
      <div class="img-current-container">
        <img
          class="tick"
          :class="{ 'tick-disabled': currentImg === 0 }"
          :src="`${assetsPath}img/tick.svg`"
          alt="<"
          @click="incImg(-1)"
        >
        <div
          class="img-current"
          :style="{ 'background-image': `url('${images[currentImg]}')` }"
        />
        <img
          class="tick"
          :class="{ 'tick-disabled': currentImg === images.length - 1 }"
          :src="`${assetsPath}img/tick.svg`"
          alt=">"
          @click="incImg(1)"
        >
      </div>

      <div class="img-all">
        <img
          v-for="(img, i) in images"
          :key="i"
          v-lazy="img"
          class="img-all-img"
          :class="{ 'img-all-img-current': currentImg === i }"
          alt="фото"
          @click="currentImg = i"
        >
      </div>

      <!--
      <div class="dots">
        <button
          v-for="i in images.length"
          :key="i"
          class="dot"
          :class="{ 'dot-active': currentImg === i - 1 }"
          @click="currentImg = i - 1"
        />
      </div>
      -->
    </div>

    <div class="col-2">
      <p class="heading">
        Настольная игра МАРБЛС
      </p>
      <p class="desc">
        Сделана в России, играют во всем мире
      </p>

      <app-buy />

      <div class="btn-other">
        <app-external-link
          class="btn btn-ozone"
          href="https://ozon.ru"
        >
          Купить на OZON
        </app-external-link>
        <app-external-link
          class="btn btn-wb"
          href="https://wildberries.ru"
        >
          Купить на WB
        </app-external-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppBuy from '../app/AppBuy.vue'
import AppExternalLink from '../app/AppExternalLink.vue'

export default defineComponent({
  components: {
    AppBuy,
    AppExternalLink
  },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const images = [
      `${assetsPath}img/photo.jpeg`,
      'https://picsum.photos/600/800',
      'https://picsum.photos/601/800'
      /*
      'https://picsum.photos/602/800',
      'https://picsum.photos/603/800',
      'https://picsum.photos/604/800',
      'https://picsum.photos/605/800'
      */
    ]
    const currentImg = ref(0)

    function incImg (inc: -1 | 1): void {
      const len = images.length
      let newCurr = currentImg.value + inc
      if (newCurr < 0) newCurr = 0
      else if (newCurr === len) newCurr = len - 1
      currentImg.value = newCurr
    }

    return {
      assetsPath,
      images,
      currentImg,

      incImg
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding: 0 0 86px 231px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 124px;
  background: $text-main;
  overflow-x: hidden;
}

.circle {
  $size: 78px;

  width: $size;
  height: $size;
  background: #3a3a3a;
  border-radius: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &-highlight {
    background: transparent;
    border: 4px solid $yellow;
    filter:
      drop-shadow(0 0 16px $yellow)
      drop-shadow(0 0 8px rgba($yellow, 0.4))
      drop-shadow(0 0 4px rgba($yellow, 0.25));
  }

  &s {
    position: absolute;
    left: math.div($size, -2);
    top: 140px;
  }
}

.col {
  &-1 {
    padding-top: 139px;

    .img {
      $width: 442px;

      &-current {
        height: 494px;
        width: 100%;
        object-fit: cover;
        border-radius: 17px;
        background-size: cover;

        &-container {
          position: relative;
          width: $width;

          .tick {
            $spacing: 40px;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: auto;
            cursor: pointer;

            @include transition;

            &:first-of-type {
              left: math.div($spacing, -1);
            }

            &:last-of-type {
              right: math.div($spacing, -1);
              transform: rotate(180deg);
            }

            &:hover {
              opacity: 0.7;
            }

            &:active {
              opacity: 0.5;
            }

            &-disabled {
              opacity: 0.3 !important;
              cursor: initial;
            }
          }
        }
      }

      &-all {
        margin-top: 10px;
        display: flex;
        width: $width;
        overflow-x: auto;

        &-img {
          flex: 0 0 100px;
          height: 77px;
          object-fit: cover;
          border-radius: 7px;
          pointer-events: auto;
          cursor: pointer;

          @include transition;

          &:not(:last-child) {
            margin-right: 10px;
          }

          &:hover {
            opacity: 0.7;
          }

          &:active {
            opacity: 0.5;
          }

          &-current {
            opacity: 0.5 !important;
            cursor: initial;
          }
        }
      }
    }
  }

  &-2 {
    padding-top: 86px;
  }
}

/*
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
*/

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

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
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
