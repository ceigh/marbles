<template>
  <div class="screen">
    <div class="benefits">
      <div class="heading">
        <img
          :src="`${assetsPath}img/dots.svg`"
          alt="точки"
        >

        <div>
          <p class="heading-title">
            МАРБЛС
          </p>
          <p class="heading-subtitle">
            это
          </p>
        </div>
      </div>

      <div class="benefits-cards">
        <div
          v-for="(card, i) in benefits"
          :key="i"
          class="benefits-cards-card"
          :style="{ backgroundImage: getBg(card.img) }"
        >
          <p class="benefits-cards-card-num">
            {{ card.num }}
          </p>
          <p>{{ card.item }}</p>
        </div>
      </div>
    </div>

    <div class="cards">
      <img
        v-for="i in 6"
        :key="i"
        :src="`${assetsPath}img/card-${i % 2 ? 'front' : 'back'}.svg`"
        alt="карта"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Benefit {
  img: string
  num: string
  item: string
}

export default defineComponent({
  setup () {
    const assetsPath = `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`

    const benefits: Benefit[] = [
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '108',
        item: 'карт'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '6',
        item: 'деревянных досок'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '30',
        item: 'стеклянных марблов'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '2-6',
        item: 'игроков'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '30-90',
        item: 'минут игрового времени'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: '10*15',
        item: 'игровых комбинаций'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        num: 'от 6',
        item: 'лет'
      }
    ]

    function getBg (img: string): string {
      return `linear-gradient(245.99deg, var(--gradient-start) 44.68%,
        var(--gradient-end) 79.16%), url('${img}')`
    }

    return {
      assetsPath,
      benefits,

      getBg
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  margin-bottom: 96px;
  padding-bottom: 350px;
}

.benefits {
  padding: 100px 0 0 165px;

  &-cards {
    display: flex;
    margin-bottom: 117px;

    &-card {
      --gradient-start: #{rgba($text-main, 0)};
      --gradient-end: #{rgba($text-main, 0.7)};

      width: 190px;
      height: 195px;
      flex-shrink: 0;
      border-radius: 10px;
      color: $white;
      padding: 104px 0 34px 10px;
      background-size: cover;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &-num {
        font-size: 39px;
        line-height: 33px;

        @include font-bold;
      }
    }
  }
}

.heading {
  display: flex;
  align-items: flex-end;
  margin-bottom: 89px;

  &-title {
    font-size: 52px;
    line-height: 64px;

    @include font-bold;
  }

  &-subtitle {
    font-size: 27px;
    line-height: 24px;

    @include font-medium;
  }

  img {
    margin-right: 41px;
  }
}

.cards {
  display: flex;
  position: absolute;
  left: -45px;
  bottom: 0;
}
</style>
