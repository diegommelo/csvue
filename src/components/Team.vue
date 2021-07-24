<template>
  <div>
    <h1>team</h1>
    <div class="team">
      <div v-for="(player, i) in team" :key="i">
        <Player :player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState({
      team: state => state.team
    })
  }
}
</script>

<style scoped>
  .team {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 700px;
    margin: 0 auto; 
  }
</style>