import Vue from 'vue'
import Vuex from 'vuex'
import { players } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: players,
    team:[
      {name: 'Player #1', pic:'avatar.png', price: 0, picked: false},
      {name: 'Player #2', pic:'avatar.png', price: 0, picked: false},
      {name: 'Player #3', pic:'avatar.png', price: 0, picked: false},
      {name: 'Player #4', pic:'avatar.png', price: 0, picked: false},
      {name: 'Player #5', pic:'avatar.png', price: 0, picked: false},
    ],
    balance: 15,
  },
  mutations: {
    buyPlayer(state, player) {
      let pickIndex = state.team.findIndex(p => p.name === player.name)
      let pickedPlayers = state.team.filter(p => p.picked === true)
        if (state.balance > 0 && player.price <= state.balance && pickIndex === -1 && pickedPlayers.length < 5) {
          let pickIndex = state.team.findIndex(p => p.picked === false)
          state.team[pickIndex].picked = true
          state.team[pickIndex].name = player.name
          state.team[pickIndex].price = player.price
          state.team[pickIndex].pic = player.pic
          state.balance -= player.price
      } else if (pickIndex !== -1) {
          this.dispatch('sellPlayer', pickIndex)        
      }
    },
    sellPlayer(state, pick) {
      if (state.team[pick].price > 0 && state.balance>=0){
        state.balance += state.team[pick].price
        state.team[pick].name = 'Player #'+(pick+1)
        state.team[pick].pic = 'avatar.png'
        state.team[pick].price = 0
        state.team[pick].picked = false
      }
    },
    reset(state) {
      state.balance = 15
      state.team = [
        {name: 'Player #1', pic:'avatar.png', price: 0, picked: false},
        {name: 'Player #2', pic:'avatar.png', price: 0, picked: false},
        {name: 'Player #3', pic:'avatar.png', price: 0, picked: false},
        {name: 'Player #4', pic:'avatar.png', price: 0, picked: false},
        {name: 'Player #5', pic:'avatar.png', price: 0, picked: false},                                     
      ]
    }
  },
  actions: {
    buyPlayer({ commit }, player) {
      commit('buyPlayer', player)
    },
    sellPlayer({ commit }, player) {
      commit('sellPlayer', player)
    },
    reset({ commit }) {
      commit('reset')
    }
  },
  getters: {
    getTeam(state) {
      return state.team
    },
    getPickedPlayers(state) {
      return state.team.filter(p => p.picked)
    },
    isTeamFull(state) {
      return state.team.filter(p => p.picked).length === 5
    }
  }
})
