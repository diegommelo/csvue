<template>
  <div>
    <div>
      <img :src="player.pic" class="player-avatar" />
      <p class="player-name">{{ player.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    player: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .player-name {
    margin:5px 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .player-avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    object-position: 0 -500%; 
  }
</style>