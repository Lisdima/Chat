<template>
  <v-app-bar app id="header" dark>
    <div class="header__start"></div>
    <div class="header__end mobile-d-none">
      <div class="header__user mobile-d-none">
        <v-menu
          open-on-hover
          bottom
          offset-y
          left
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <a href="#" v-bind="attrs" v-on="on" class="toggler">
              <i class="icon icon-user"></i>
            </a>
          </template>
          <div class="droplist">
            <div class="droplist__title">Логин</div>
            <ul class="list">
              <li><a href="#">История</a></li>
              <li><a href="#">Настройки</a></li>
              <li><a href="#">Выход</a></li>
            </ul>
          </div>
        </v-menu>
      </div>
      <div class="header__notifications mobile-d-none">
        <v-menu
          open-on-hover
          bottom
          offset-y
          left
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <a href="#" v-bind="attrs" v-on="on" class="toggler">
              <i class="icon icon-bell"></i>
            </a>
          </template>
          <div class="droplist extended">
            <div class="droplist__title">
              Новые уведомления
              <a href="#">Посмотреть все</a>
            </div>
            <div class="none">Новых уведомлений нет</div>
          </div>
        </v-menu>
      </div>
      <div class="header__lang mobile-d-none">
        <v-menu
          open-on-hover
          bottom
          offset-y
          left
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="toggler">
              <i class="icon icon-globe"></i>
              <i class="icon-down"></i>
            </div>
          </template>
          <div class="droplist">
            <div class="droplist__title">Язык</div>
            <ul class="list">
              <li><a class="active" href="#">Русский</a></li>
              <li><a href="#">English</a></li>
            </ul>
          </div>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss">
#header {
  background-color: #1d1d27;
  position: relative;
  z-index: 50;
  @media (max-width: 1023px) {
    display: none;
  }
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: none;
    padding: 0 76px !important;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1199px) {
      padding: 0 20px !important;
    }
  }
  .toggler {
    cursor: pointer;
  }

  .header__right {
    display: flex;
    align-items: center;
  }
  .header__start,
  .header__end {
    display: flex;
    align-items: center;
  }

  .header__notifications,
  .header__user,
  .header__lang {
    position: relative;
    margin-right: 25px;
  }

  .header__notifications .toggler,
  .header__user .toggler,
  .header__lang .toggler {
    padding: 15px 0;
    display: flex;
    align-items: center;
  }

  .header__notifications .toggler i.icon,
  .header__user .toggler i.icon,
  .header__lang .toggler i.icon {
    font-size: 1rem;
  }

  .header__notifications .toggler i.icon::before,
  .header__user .toggler i.icon::before,
  .header__lang .toggler i.icon::before {
    background: linear-gradient(90deg, #583f2b 0%, #e4b273 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #583f2b;
  }

  .header__notifications .toggler i.icon-down,
  .header__user .toggler i.icon-down,
  .header__lang .toggler i.icon-down {
    margin-left: 8px;
    font-size: 0.8rem;
    opacity: 0.5;
  }
}
.droplist {
  min-width: 200px;
  font-size: 13.6px !important;
  background: #1d1d27 !important;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 15px;
  .droplist__title {
    text-align: center;
    border-bottom: 1px solid transparent;
    padding-bottom: 15px;
    -o-border-image: linear-gradient(
      90deg,
      #e4b273 0%,
      rgba(228, 178, 115, 0) 100%
    );
    border-image: linear-gradient(
      90deg,
      #e4b273 0%,
      rgba(228, 178, 115, 0) 100%
    );
    border-image-slice: 1;
    margin-bottom: 25px;
  }
  .list {
    padding: 0;
  }
  .list li {
    margin: 12px 0;
    list-style: none;
    .active {
      color: #e4b273;
    }
  }
  .list li a {
    opacity: 0.6;
    color: #fff;
    text-decoration: none;
  }
  .list a:hover {
    color: #e4b273;
  }
}
.extended {
  min-width: 380px;
  .droplist__title {
    display: flex;
    justify-content: space-between;
    a {
      color: #fff;
    }
    a:hover {
      color: #e4b273;
    }
  }
  .none {
    text-align: center;
    padding: 25px 0 40px 0;
    opacity: 0.6;
  }
}
</style>
