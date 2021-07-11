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
        <div
          v-for="i in images.length"
          :key="i"
          class="dot"
          :class="{ 'dot-active': currentImg === i - 1 }"
          @click="currentImg = i - 1"
        />
      </div>
    </div>

    <div class="col-2">
      <p class="heading">
        Настольная игра МАРБЛС
      </p>
      <p class="desc">
        Сделана в России, играют во всем мире
      </p>
      <p class="cost">
        {{ costTotal }} ₽
      </p>
      <p class="delivery">
        <span class="delivery-highlight">Бесплатная доставка</span>
        <br>
        до пункта выдачи СДЭК или Боксберри
      </p>

      <div class="btn btn-quantity">
        <div class="btn-quantity-quantity">
          {{ quantity }} {{ quantityStr }}
        </div>
        <div class="btn-quantity-actions">
          <div @click="changeQuantity(+1)">
            +
          </div>
          <div @click="changeQuantity(-1)">
            -
          </div>
        </div>
      </div>

      <button class="btn btn-buy">
        КУПИТЬ
      </button>

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
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup () {
    const assetsPath = `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`
    const images = [
      `${assetsPath}img/photo.jpeg`,
      'https://picsum.photos/400/300',
      'https://picsum.photos/401/300',
      'https://picsum.photos/402/300',
      'https://picsum.photos/403/300'
    ]
    const currentImg = ref(0)

    const quantity = ref(1)
    const quantityStr = computed(() => {
      const q = quantity.value
      const qStr = String(q)
      const last = Number(qStr[qStr.length - 1])

      let end = ''
      if (last === 1) end = 'а'
      if (last > 1) end = 'ы'
      if (last > 4) end = ''
      if (q > 10 && q < 20) end = ''

      return `игр${end}`
    })

    const costPerItem = 3900
    const costTotal = computed(() => costPerItem * quantity.value)

    function changeQuantity (inc: 1 | -1): void {
      const newQuantity = quantity.value + inc
      quantity.value = newQuantity < 1 ? 1 : newQuantity
    }

    return {
      assetsPath,
      images,
      currentImg,

      quantity,
      quantityStr,
      costTotal,
      changeQuantity
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding: 31px 77px 77px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 93px;
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

  &-2 {
    color: $white;
  }
}

.dot {
  $size: 15px;

  width: $size;
  height: $size;
  border-radius: 100%;
  background: rgba($lightgray, 30%);
  cursor: pointer;

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
  font-size: 27px;
  line-height: 40px;
  max-width: 380px;
  margin-bottom: 50px;

  @include font-medium;
}

.cost {
  font-size: 60px;
  line-height: 90px;

  @include font-bold;
}

.delivery {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 50px;

  &-highlight {
    color: $yellow;

    @include font-bold;
  }
}

.btn {
  $corner: 11px;
  $spacing: 20px;
  $mw: 380px;

  height: 67px;
  max-width: $mw;
  font-size: 20px;
  line-height: 30px;
  user-select: none;
  border-radius: $corner;

  @include font-bold;

  &-quantity {
    $border: 1px solid #777;

    display: flex;
    justify-content: space-between;
    border: $border;
    background: rgba($text-main, 0.04);
    backdrop-filter: blur(20px);
    margin-bottom: $spacing;

    &-quantity {
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
    }

    &-actions {
      border-left: $border;
      width: 61px;

      div {
        text-align: center;
        cursor: pointer;
        height: 50%;

        @include transition;

        &:hover {
          background: $yellow;
        }

        &:active {
          background: $yellow-dark;
        }

        &:first-child {
          border-bottom: $border;
          border-top-right-radius: $corner;
        }

        &:last-child {
          border-bottom-right-radius: $corner;
        }
      }
    }
  }

  &-buy {
    width: 100%;
    margin-bottom: $spacing;

    @include yellow-btn;
  }

  &-other {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing;
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
