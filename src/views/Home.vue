<template>
  <v-app>
    <v-main id="main-page">
      <div class="main-page__header">
        <h1 @click="goToChat" class="main-title">Перейти в онлайн-чат</h1>
        <a @click="goToChat" class="up"><i class="icon icon-right"></i></a>
        <div style="width: 500px;" ></div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToChat() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss" scoped>
#main-page {
  position: relative;
  padding: 100px 0 !important;
  .main-page__header {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .up {
      color: #fff;
      font-size: 30px;
      line-height: 1.15em;
      opacity: 0.5;
      transition: opacity 0.9s;
    }
    .up:hover {
      opacity: 1;
    }
    h1 {
      font-size: 28px;
      font-weight: 400;
      cursor: pointer;
      transition: text-decoration-color 0.9s;
      text-decoration-color: transparent
    }
    h1:hover {
      text-decoration: underline;
      text-decoration-color: #fff
    }
  }
  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    font-family: "ruble";
    font-style: normal;
    font-weight: normal;
    speak: never;
    display: inline-block;
    text-decoration: inherit;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
.icon-right:before {
  content: "\f105";
}
</style>
