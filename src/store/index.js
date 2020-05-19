import Vue from 'vue';
import Vuex from 'vuex';

import { LOADING_STORE_KEY } from '../loading/loadingEnum';
import { FORM_STORE_KEY } from '../form/formEnum';

import loadingStore from '../loading/loadingStore';
import formStore from '../form/formStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [LOADING_STORE_KEY]: loadingStore,
    [FORM_STORE_KEY]: formStore
  }
});
