import Vue from 'vue'
import Vuex from 'vuex'
import { players } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: players,
    // team:[
    //   {name: 'Player #1', pic:'avatar.jpeg'},
    //   {name: 'Player #2', pic:'avatar.jpeg'},
    //   {name: 'Player #3', pic:'avatar.jpeg'},
    //   {name: 'Player #4', pic:'avatar.jpeg'},
    //   {name: 'Player #5', pic:'avatar.jpeg'},                                        
    // ],
    team:[],
    balance: 15,
  },
  mutations: {
    buyPlayer(state, player) {
      state.balance -= player.price
      state.team.push(player)
    },
  },
  actions: {
    buyPlayer({ commit }, player) {
      commit('buyPlayer', player)
    }
  },
  modules: {
    
  }
})
