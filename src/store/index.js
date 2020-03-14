import Vuex from "vuex";
import Vue from "vue";
import floors from "./modules/floors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    floors
  }
});
