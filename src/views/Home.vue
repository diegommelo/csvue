<template>
  <div class="home">
    <p>Monte seu</p>
    <p>DREAM TEAM</p>
    <p>com R$15</p>    
    <p>Saldo: R${{balance}}</p>
    <Team />
    <PlayerList :players="players.five" price="5" />
    <PlayerList :players="players.four" price="4" class="stripe" />
    <PlayerList :players="players.three" price="3" />
    <PlayerList :players="players.two" price="2" class="stripe" />
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

<style scoped>
  p {
    margin:0;
    padding: 0;
  }
  .stripe {
    background-color: rgba(35,45,56,.8);
  }  
</style>