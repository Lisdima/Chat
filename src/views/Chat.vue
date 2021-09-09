<template>
  <div id="custom-page">
    <div class="container medium">
      <!-- chat-box -->
      <div class="chat-box">
        <!-- chat-box__header -->
        <div class="chat-box__header">
          <a @click="goHome" class="back"><i class="icon icon-left"></i></a>
          <h1 class="main-title">
            Добро пожаловать в онлаин-чат службы поддержки
          </h1>
          <div style="width: 12px;" class=""></div>
        </div>
        <div class="chat-box__messages">
          <div class="chat-box__separator">
            {{ this.today }}
          </div>
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="[
              message.name === 'Гость'
                ? 'chat-box__message own'
                : 'chat-box__message',
            ]"
          >
            <div v-if="message.name !== 'Гость'" class="name">
              Служба поддержки
            </div>
            <div class="message">
              {{ message.message }}
              <div class="time">{{ message.time }}</div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <form onsubmit="return false;" class="chat-box__form main-form">
          <textarea
            class="input-style"
            v-model="newMessage"
            rows="7"
          ></textarea>
          <div class="row">
            <label class="main-form__item file-field"> </label>
            <div class="main-form__submit">
              <button
                @click="sendMessage()"
                type="submit"
                class="radius-button standart rounded"
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- custom-page !-->
  </div>
</template>

<script>
import { bus } from "@/main";

export default {
  data() {
    return {
      connection: null,
      newMessage: "",
      user: "Гость",
      messages: this.$store.state.messages,
      today: "",
      status: '',
      path: "",
    };
  },
  async created() {
    let months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let currentDay = new Date().getDate();
    let month = new Date().getMonth();
    this.today = `${currentDay} ${months[month]}`;
    // при входе на странице всегда используется последнее состояние в хранилище
    this.connection = this.$store.state.connection;
    this.status = this.connection.readyState;
  },
  // mounted() {},
  methods: {
    sendMessage(body) {
      // функция отправки сообщения на сервер
      body = {
        name: this.user,
        message: this.newMessage,
      };
      console.log(body);
      if (body.message.length > 0) {
        // на сервер улетает сообщение с имененем и текстом
        this.connection.send(JSON.stringify(body));
        let minutes = new Date().getMinutes();
        let hours = new Date().getHours();
        let now = `${hours}:${minutes}`;
        // добавляем в массив только что отправленные данные на сервер + время, этот массив используется для верстки + данные храним глобально, чтобы при перемещению по компонетам, хранилась история и при повторном переключении на чат отобразилась вся история
        this.messages.push((body = { ...body, time: now }));
        this.newMessage = "";
        this.scrollToEnd();
        console.log(this.$store.state.messages);
      }
    },
    goHome() {
      this.$router.push("/");
    },
    scrollToEnd() {
      const lastMsg = this.$el.querySelector(".chat-box__messages");
      lastMsg.scrollTop = lastMsg.scrollHeight;
    },
  },
  computed: {},
  watch: {
    status() {
        console.log('работает watch');
        // как только меняется состояние сокета, скорее всего он был закрыт или была ошибка, локально обновляем сокет и состояние
        bus.$on("connect", (data) => {
          return (this.connection = data), (this.status = data.readyState);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#custom-page {
  position: relative;
  padding: 100px 0;
  color: #fff;
  @media (max-width: 1023px) {
    padding: 135px 0 70px 0;
  }
  @media (max-width: 599px) {
    padding-top: 105px;
    padding-bottom: 70px;
  }
  .container {
    width: auto;
    max-width: 1000px;
    position: relative;
    z-index: 1;
    padding: 0 20px;
    margin: 0 auto;
    @media (max-width: 1199px) {
      max-width: 984px;
    }
    @media (max-width: 1023px) {
      max-width: 728px;
    }
    .chat-box {
      position: relative;
    }
    .chat-box__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
      .back {
        color: #fff;
        font-size: 30px;
        line-height: 1.15em;
        opacity: 0.5;
      }
      .back:hover {
        opacity: 1;
      }
      h1 {
        font-size: 28px;
        font-weight: 400;
        text-align: center;
      }
    }
    .chat-box__messages::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
    .chat-box__messages {
      min-height: 500px;
      margin-bottom: 40px;
      overflow-y: scroll;
      height: 600px;
      @media (max-width) {
        margin-bottom: 10px;
        font-size: 13.6px;
      }
      .chat-box__message {
        width: 88%;
        margin-bottom: 50px;
        margin-top: -16px;
        display: inline-block;
        @media (max-width: 599px) {
          margin-bottom: 30px;
        }
      }
      .message {
        background: #fff;
        color: #000;
        padding: 24px;
        border-radius: 10px;
        word-break: break-all;
      }
      .time {
        float: right;
        margin-right: -5px;
        margin-left: 15px;
        opacity: 0.5;
      }
      .chat-box__message.own {
        margin-top: 0;
        float: right;
        .message {
          color: #fff;
          background: #242279;
          background: linear-gradient(90deg, #242279 0%, #1dacec 100%);
        }
      }
      .chat-box__message .name {
        font-size: 0.95rem;
        opacity: 0.5;
        white-space: nowrap;
        margin-bottom: 8px;
        @media (max-width: 599px) {
          font-size: 13.6px;
        }
      }
    }
    .chat-box__separator {
      text-align: center;
      opacity: 0.5;
      margin: 25px 0;
    }
    .chat-box__separator + .chat-box__message {
      margin-top: 0;
    }
    .main-form {
      position: relative;
      margin: 0 auto;
      max-width: 100% !important;
      .input-style {
        margin: 0px 0px 25px;
        height: 169px;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #9b9b9b;
        background: #fff;
        @media (max-width: 599px) {
          height: 100px;
        }
      }
      .input-style:focus {
        border: 2px solid #1ab4ed;
        outline: 3px solid #1ab4ed;
        box-shadow: none;
      }
      .row {
        display: flex;
        justify-content: space-between;
        margin: 0;
        @media (max-width: 599px) {
          flex-direction: column;
          align-items: center;
        }
        .file-field {
          font-size: 14.4px;
          margin-bottom: 15px;
          display: block;
        }
        .main-form__submit {
          text-align: center;
          margin-top: 0;
          @media (max-width: 599px) {
            margin-top: 40px;
          }
        }
      }
    }
  }
}
.clear {
  display: block;
  clear: both;
}
</style>
