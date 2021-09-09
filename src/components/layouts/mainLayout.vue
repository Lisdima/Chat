<template>
  <v-layout id="components-main-layout-app">
    <Header />
    <v-main style="padding: 0px">
    <router-view />
    </v-main>
    <Footer />
  </v-layout>
</template>
<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "main-layout",
  data() {
    return {
      intervalNomenclature: null,
      intervalNomenclatureGroup: null,
    };
  },
  async created() {},
  components: {
    Header,
    Footer,
  },
  methods: {
  },
};
</script>
<style>
#components-main-layout-app {
  display: block;
  min-height: auto;
}
</style>
