<template>
  <div class="home">
    <h2>Monte seu</h2>
    <h1>DREAM TEAM</h1>
    <h2>com R$15</h2>    
    <h3>Saldo: R${{balance}}</h3>
    <Team />
    <PlayerList :players="players.five" price="5" />
    <PlayerList :players="players.four" price="4" />
    <PlayerList :players="players.three" price="3" />
    <PlayerList :players="players.two" price="2" />
    <PlayerList :players="players.one" price="1" />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerList from '@/components/PlayerList.vue'
import Team from '@/components/Team.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    PlayerList,
    Team
  },
  computed: {
    ...mapState({
      players: state => state.players,
      balance: state => state.balance
    })
  }
}
</script>

<style>
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
</style>