<template>
  <div>
    
    <div class="player-list">
      <div class="price">
        <p>R${{price}}</p>
      </div>
      <div v-for="(player, i) in players" :key="i" class="player" @click="buyPlayer(player)">
        <Player :player="player" :class="{selected: isSelected(player)}" :showPrice="false" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Player from './Player.vue';

export default {
  name: 'PlayerList',
  components: {
    Player
  },
  props: {
    players: {
      type: Array,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['buyPlayer']),
    isSelected(player) {
      return this.team.find(p => p.name === player.name)
    }
  },
  computed: {
    ...mapState({
      pick: state => state.pick,
      team: state => state.team
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .selected p{
    background-color:rgb(73, 92, 110, 0.5);
    border: 1px solid #495867;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    display:inline-block;
    padding:0 8px;        
  }
  .player-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 700px;
    margin: 0 auto; 
  }
  .price {
    color: #999;
    font-size: 2.6em;
    font-weight: bold;
    align-items: center;
    display: flex;
    margin-right: 10px;
  }

  @media screen and (max-width: 767px) {
    .price {
      font-size: 1em;
      margin-right: 0;
    }
  }
</style>
