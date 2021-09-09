<template>
  <v-app id="app">
    <MainLayout >
      <router-view  />
    </MainLayout>
  </v-app>
</template>

<script>
import MainLayout from "@/components/layouts/mainLayout";
import { mapActions } from "vuex";
import { bus } from "@/main";

export default {
  name: "App",

  data: () => ({
    connection: "",
    status: 1,
    messages: [],
    getMsg: "",
    getName: "",
  }),
  components: { MainLayout },
  async created() {
    console.log("загрузилось");

    // Запуск сокета и все последующие действия
    await this.connect();
  },
  methods: {
    ...mapActions(["createSocket"]),
    abc(a) {
      console.log(a);
    },
    async connect() {
      // функция которая запускает сокет и обрабатывает все его действия (ниже дейсвтия)
      this.connection = await this.createSocket();
      console.log(this.connection);
      this.$store.state.connection = this.connection
      this.messages = this.$store.state.messages;
      this.connection.onopen = await function (e) {
        console.log("WebSocket is ready");
        // глобальная шина, нужна для корректной работы отправки сообщений на сервер (особенно при перезапуске)
        bus.$emit("connect", e.currentTarget);
      };
      this.newMessage();
      this.errorConnection;
      this.closeConnection;
    },
    newMessage() {
      // получение сообщения с сервера
      let messages = this.messages;
      this.connection.onmessage = function (event) {
        console.log("new message received");
        let minutes = new Date().getMinutes();
        let hours = new Date().getHours();
        let now = `${hours}:${minutes}`;
        let data = JSON.parse(event.data);
        messages.push({
          name: data.name,
          message: data.message,
          time: now,
        });
        console.log("Ниже должен быть массив");
        console.log([messages]);
      };
    },
    async errorConnection() {
      // обработка ошибок с вебсокетом
      let reconnect = await this.connect;
      this.newMessage();
      this.connection.onerror = async function () {
        console.error("Ошибка WebSocket");
        await this.connection.close(); // закрываем подключение к серверу
        reconnect();
      };
    },
    async closeConnection() {
      // действия после закрытия сокета
      let reconnect = await this.connect;
      this.connection.onclose = async function (e) {
        if (e.wasClean) {
          console.log("Соединение завершено");
          reconnect();
        }
      };
    },
  },
  watch: {
    messages() {
      // при каждом новом полученном сообщении пушим его в хранилище, чтобы при свернутом чате сообщение где-то хранились глобально, затем открываем чат и отображены все сообщения
      this.$store.state.messages = this.messages;
      console.log("Новое сообщение");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "ish-open", sans-serif;
  font-size: 16px;
  background-color: #0d1019;
  color: #fff;
  letter-spacing: 0.02em;
  box-sizing: content-box;
}
</style>
