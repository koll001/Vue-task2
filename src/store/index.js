import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Storeを生成
const store = new Vuex.Store({
  state: {
    sex: '',
    year: 2000,
    month: 1,
    day: 1,
    ask1: '',
    ask2: '',
    ask3: '',
    inputContents: '',
  },
  getters: {
    getSex: function(state) {
      return state.sex;
    },
    getYear: function(state) {
      return state.year;
    },
    getMonth: function(state) {
      return state.month;
    },
    getDay: function(state) {
      return state.day;
    },
    getAsk1: function(state) {
      return state.ask1;
    },
    getAsk2: function(state) {
      return state.ask2;
    },
    getAsk3: function(state) {
      return state.ask3;
    },
    getInputContents: function(state) {
      return state.inputContents;
    },
  },
  mutations: {
    mutationsUpdateSex: function(state, value) {
      state.sex = value;
    },
    mutationsUpdateYear: function(state, value) {
      state.year = value;
    },
    mutationsUpdateMonth: function(state, value) {
      state.month = value;
    },
    mutationsUpdateDay: function(state, value) {
      state.day = value;
    },
    mutationsUpdateAsk1: function(state, value) {
      state.ask1 = value;
    },
    mutationsUpdateAsk2: function(state, value) {
      state.ask2 = value;
    },
    mutationsUpdateAsk3: function(state, value) {
      state.ask3 = value;
    },
    mutationsUpdateInputContents: function(state, value) {
      state.inputContents = value;
    },
  },
  actions: {
    actionUpdateSex: function(context, value) {
      context.commit('mutationsUpdateSex', value);
    },
    actionUpdateYear: function(context, value) {
      context.commit('mutationsUpdateYear', value);
    },
    actionUpdateMonth: function(context, value) {
      context.commit('mutationsUpdateMonth', value);
    },
    actionUpdateDay: function(context, value) {
      context.commit('mutationsUpdateDay', value);
    },
    actionUpdateAsk1: function(context, value) {
      context.commit('mutationsUpdateAsk1', value);
    },
    actionUpdateAsk2: function(context, value) {
      context.commit('mutationsUpdateAsk2', value);
    },
    actionUpdateAsk3: function(context, value) {
      context.commit('mutationsUpdateAsk3', value);
    },
    actionUpdateInputContents: function(context, value) {
      context.commit('mutationsUpdateInputContents', value);
    },
  },
});
export default store;
