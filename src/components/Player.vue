<template>
  <div>
    <div>
      <img :src="player.pic" class="player-avatar" />
      <p class="player-name">{{ player.name }}</p>
      <p v-if="showPrice" class="player-price">R$ {{player.price}}</p>
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
    },
    showPrice: {
      type: Boolean,
      required: true,
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
    margin-top:-10px;
  }

  @media screen and (max-width: 767px) {
    .player-avatar {
      width: 64px;
      height: 64px;
    }
    .player-name {
      font-size: 0.8rem;
      margin-top: 0;
      margin-bottom: 5px;
    }
    .player-price {
      font-size: 0.8rem;
    }
  }
</style>