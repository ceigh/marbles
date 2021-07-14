<template>
  <div class="buy">
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
        <button @click="changeQuantity(+1)">
          +
        </button>
        <button @click="changeQuantity(-1)">
          -
        </button>
      </div>
    </div>

    <button
      class="btn btn-buy"
      @click="buy"
    >
      КУПИТЬ
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup () {
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
    const costTotal = computed(() =>
      (costPerItem * quantity.value).toLocaleString('ru'))

    function changeQuantity (inc: 1 | -1): void {
      const newQuantity = quantity.value + inc
      quantity.value = newQuantity < 1 ? 1 : newQuantity
    }

    function buy (): void {
      alert(quantity.value)
    }

    return {
      quantity,
      quantityStr,
      costTotal,
      changeQuantity,
      buy
    }
  }
})
</script>

<style lang="scss" scoped>
.buy {
  color: $white;
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

      button {
        display: block;
        text-align: center;
        width: 100%;
        height: 50%;
        border: none;
        background: transparent;
        color: inherit;

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
}
</style>
