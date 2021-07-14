<template>
  <div class="screen">
    <h3>У вас есть вопросы по игре или правилам?</h3>
    <h4>
      Задавайте их нам!
    </h4>

    <div class="bottom">
      <div class="links" />
      <p>г. Москва, ул. Мясницкая 13с18, здание с вывеской ФРИИ, Марблс</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen {
  padding: 100px 0 94px 165px;

  h3 {
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 40px;
  }
}

.bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 159px;

  p {
    max-width: 380px;
  }
}
</style>
