<template>
  <div class="header">
    <a
      class="header-logo"
      href="/"
    >
      МАРБЛС
    </a>

    <div>
      <a
        class="a"
        href="#"
      >
        Задать вопрос
      </a>

      <button>ЗАКАЗАТЬ</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 165px;
  background:
    linear-gradient(
      180deg,
      rgba($text-main, 0.5) 29.51%,
      rgba($text-main, 0) 100%
    );
  color: #fff;

  &-logo {
    color: inherit;
    font-weight: bold;
    font-size: 31px;
    line-height: 37px;
    text-decoration: none;
  }

  &-black {
    background: $text-main;
  }

  &-white {
    background: #fff;
    color: $text-main;
  }
}

button {
  background: $yellow;
  border: none;
  padding: 10px 11px;
  line-height: 18.96px;
  border-radius: 6px;
  margin-left: 40px;

  @include font-bold;
  @include transition;

  &:hover {
    filter: drop-shadow(0 3px 26px rgba($yellow, 0.33));
  }

  &:active {
    background: $yellow-dark;
  }
}
</style>
