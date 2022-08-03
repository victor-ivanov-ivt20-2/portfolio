<script setup lang="ts">

</script>

<template>
  <div class="body">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <h1 class="header__logo"><router-link to="/">МОЙ САЙТ</router-link></h1>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item"><router-link to="/projects" class="menu__link">ПРОЕКТЫ</router-link></li>
              <li class="menu__item"><router-link to="/schedule" class="menu__link">РАСПИСАНИЕ</router-link></li>
              <li class="menu__item"><router-link to="/about-me" class="menu__link">ОБО МНЕ</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  height: 50px;
  .header__logo {
    font-size: 24px;
    height: 30px;
    padding: 10px 0;
    margin: 0;
  }
  .menu__list {
    display: flex;
    gap: 26px;
    height: 20px;
    padding: 15px 0;
  }
  .menu__link {
    font-size: 14px;
    line-height: 17px;
  }
}

</style>
