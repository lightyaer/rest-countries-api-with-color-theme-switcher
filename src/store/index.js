import Vue from 'vue';
import Vuex from 'vuex';
import { LOADING_STORE_KEY } from '../loading/loadingEnum';
import loadingStore from '../loading/loadingStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [LOADING_STORE_KEY]: loadingStore
  }
});
