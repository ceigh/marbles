<template>
  <div class="screen">
    <div class="benefits">
      <div class="heading">
        <img
          :src="`${assetsPath}img/dots.svg`"
          alt="точки"
          loading="lazy"
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

      <div
        v-dragscroll.x
        class="benefits-cards"
      >
        <div
          v-for="(card, i) in benefits"
          :key="i"
          class="benefits-cards-card"
        >
          <img
            v-lazy="card.img"
            alt="фото"
          >
          <div class="benefits-cards-card-bg" />
          <p class="benefits-cards-card-num">
            {{ card.num }}
          </p>
          <p>{{ card.item }}</p>
        </div>
      </div>
    </div>

    <div
      ref="cards"
      v-dragscroll.x
      class="cards"
    >
      <img
        v-for="i in 20"
        :key="i"
        :src="`${assetsPath}img/card-${i % 2 ? 'front' : 'back'}.svg`"
        alt="карта"
        loading="lazy"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

interface Benefit {
  img: string
  num: string
  item: string
}

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const benefits: Benefit[] = [
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/spirit-quartz-xxl-consign.mov-low_2048x.gif',
        num: '108',
        item: 'карт'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_7_82a06331-8999-4f67-bcdc-d60074c92eb5_2048x.gif',
        num: '6',
        item: 'деревянных досок'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/black-obsidian-sphere-xxl.mov-low_2048x.gif',
        num: '30',
        item: 'стеклянных марблов'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/small-museum-fluorite-.mov-low_2048x.gif',
        num: '2-6',
        item: 'игроков'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/onyx-sphere-xxl.mov-low_2048x.gif',
        num: '30-90',
        item: 'минут игрового времени'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_9_db151902-968d-4368-9365-d16be794914d_2048x.gif',
        num: '10*15',
        item: 'игровых комбинаций'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet.com-image_16_400x.gif',
        num: 'от 6',
        item: 'лет'
      }
    ]

    const cards = ref<HTMLDivElement>()

    let oldScrollY = 0
    function onScroll (): void {
      const cardsEl = cards.value
      if (!cardsEl) return

      const { scrollY } = window
      const dir = oldScrollY > scrollY ? 1 : -1
      cardsEl.scrollLeft -= dir * 5
      oldScrollY = scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)

      const cardsEl = cards.value
      if (!cardsEl) return
      setTimeout(() => {
        cardsEl.scrollLeft = cardsEl.scrollWidth / 3
      }, 500)
    })

    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return {
      assetsPath,
      benefits,
      cards
    }
  }
})
</script>

<style lang="scss" scoped>
$padding-left: 165px;

.screen {
  position: relative;
  margin-bottom: 96px;
  padding-bottom: 350px;
}

.benefits {
  padding-top: 100px;

  &-cards {
    display: flex;
    margin-bottom: 117px;
    overflow-x: hidden;
    user-select: none;
    padding: 0 $padding-left / 3 0 $padding-left;

    &-card {
      position: relative;
      width: 190px;
      height: 195px;
      flex-shrink: 0;
      border-radius: 10px;
      color: $white;
      padding: 104px 0 34px 10px;

      &:not(:last-child) {
        margin-right: 20px;
      }

      p {
        position: relative;
      }

      img,
      &-bg {
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: cover;
      }

      &-bg {
        background:
          linear-gradient(
            245.99deg,
            rgba($text-main, 0) 44.68%,
            rgba($text-main, 0.7) 79.16%
          );
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
  padding-left: $padding-left;

  &-title {
    font-size: 52px;
    line-height: 64px;
    user-select: none;

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
  padding: 50px;
  display: flex;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
