import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    connection: null,
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    setConnection(state, connection) {
      state.connection = connection;
    }
  },
  actions: {
    async createSocket() {
      let connection = new WebSocket("ws://skade.cc:38080")
      // connection.binaryType = 'arraybuffer'
      return connection;
    }
  },
  modules: {},
});
