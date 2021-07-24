<template>
  <div class="home">
    <h1>{{balance}}</h1>
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
