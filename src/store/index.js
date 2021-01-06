import Vue from 'vue'
import Vuex from 'vuex'
import question from '../assets/question.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: question
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
