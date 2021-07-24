<template>
  <div>
    <div class="player-list">
      <div class="price">
        <p>${{price}}</p>
      </div>
      <div v-for="(player, i) in players" :key="i" class="player" @click="buyPlayer(player)">
        <Player :player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Player from './Player.vue';

export default {
  name: 'PlayerList',
  components: {
    Player
  },
  props: {
    players: Array,
    price: String
  },
  methods: {
    ...mapActions(['buyPlayer']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .player-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 700px;
    margin: 0 auto; 
  }
  .player {
    flex: 1;
    font-weight: bold;
    font-size: 1.2em;
    transition: transform .2s; /* Animation */
  }
  .player:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .price {
    color: #999;
    font-size: 2.6em;
    font-weight: bold;
    align-items: center;
    display: flex;
    margin-right: 10px;
  }
</style>
