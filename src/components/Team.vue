<template>
  <div>
    <div v-if="team.length > 0" class="team">
      <div v-for="(player, i) in team" :key="i" @click="sellPlayer(i)" class="player">
        <Player :player="player" :showPrice="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Player from './Player.vue'

export default {
  name:'Team',
  components:{
    Player
  },
  props: {
    teamName: {
      type: String,
    }
  },
  methods: {
    ...mapActions([
      'sellPlayer'
    ])
  },
  computed: {
    ...mapGetters(
      {team: 'getTeam'}
    )
  }
}
</script>

<style scoped>
  .team {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 700px;
    margin: 10px auto; 
  }
  .team .player:hover {
    filter: grayscale(100%);
    text-decoration: line-through;
  }
  .player-price {
    font-size:1.1rem;
  }
</style>