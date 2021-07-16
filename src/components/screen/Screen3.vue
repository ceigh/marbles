<template>
  <div class="screen">
    <img
      v-for="i in 2"
      :key="i"
      class="shape"
      :class="`shape-${i + 2}`"
      :src="`${assetsPath}img/shape-${i + 2}.svg`"
      :alt="`фигура ${i + 2}`"
    >

    <div class="cols">
      <div class="col col-1">
        <img
          :src="`${assetsPath}img/laurel.png`"
          alt="лавры"
          loading="lazy"
        >

        <h3>Международное признание</h3>

        <div class="reviews-1">
          <div
            v-for="(review, i) in reviews1"
            :key="i"
            class="review-1"
          >
            <img
              :src="review.img"
              alt="аватар"
              loading="lazy"
            >
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>

      <div class="col col-2">
        <img
          class="quote"
          :src="`${assetsPath}img/quote.svg`"
          alt="кавычки"
          loading="lazy"
        >

        <h3>Отзывы игроков</h3>

        <div class="reviews-2">
          <div
            v-for="(review, i) in reviews2"
            :key="i"
            class="review-2"
          >
            <img
              class="review-2-cover"
              :src="review.img"
              alt="фото"
              loading="lazy"
            >

            <div class="review-2-meta">
              <div class="review-2-stars">
                <img
                  v-for="j in review.rate"
                  :key="j"
                  :src="`${assetsPath}img/star.svg`"
                  alt="звезда"
                  loading="lazy"
                >
              </div>

              <p class="p2 review-2-author">
                {{ review.author }}
              </p>
              <p class="p1">
                {{ review.text }}
              </p>
            </div>
          </div>
        </div>

        <img
          class="part"
          :src="`${assetsPath}img/part-3.png`"
          alt="part 3"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Review1 {
  img: string
  text: string
}

interface Review2 {
  img: string
  rate: 1 | 2 | 3 | 4 | 5
  author: string
  text: string
}

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const reviews1: Review1[] = [
      {
        img: `${assetsPath}img/photo.jpeg`,
        text: 'Кажется эта игра встанет рядом с Монополией и Шахматами'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        text: 'Однозначно лучшая игра и геймплей 2020'
      }
    ]

    const reviews2: Review2[] = [
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Лина, г. Кастрома',
        text: `Ребята, игра ФАНТАСТИКА играем с друзьями уютными
вечерами, когда собираемся вместе`
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      }
    ]

    return {
      assetsPath,
      reviews1,
      reviews2
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  margin-bottom: 220px;
}

.shape {
  position: absolute;
  z-index: -1;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;

  &s {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &-1 {
    padding-top: 281px;

    h3 {
      max-width: 510px;
      text-align: center;
      margin-bottom: 90px;
    }
  }

  &-2 {
    padding-top: 92px;

    h3 {
      margin-bottom: 94px;
    }
  }
}

.review {
  &-1 {
    flex: 0 0 214px;

    &:not(:last-child) {
      margin-right: 75px;
    }

    img {
      $size: 80px;

      width: $size;
      height: $size;
      object-fit: cover;
      border-radius: 100%;
      margin-bottom: 20px;
    }
  }

  &-2 {
    $corner: 6px;

    flex: 0 0 260px;
    background: $white;
    box-shadow: 0 0 17px rgba(176, 176, 176, 0.2);
    border-radius: $corner;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &-cover {
      border-top-left-radius: $corner;
      border-top-right-radius: $corner;
      width: 100%;
      height: 123px;
      object-fit: cover;
    }

    &-meta {
      padding: 10px;
    }

    &-stars {
      display: flex;

      img {
        $size: 20px;

        width: $size;
        height: $size;

        &:not(:last-child) {
          margin-right: 2px;
        }
      }
    }

    &-author {
      color: $lightgray;
      margin: 4px 0 2px 0;
    }
  }

  &s {
    &-1,
    &-2 {
      display: flex;
    }

    &-1 {
      justify-content: center;
    }

    &-2 {
      align-items: flex-start;
    }
  }
}

.quote {
  filter: drop-shadow(0 23px 17px rgba($yellow, 0.22));
  margin-bottom: 32px;
}

.part {
  position: absolute;
  right: 0;
  bottom: -90px;
}
</style>
