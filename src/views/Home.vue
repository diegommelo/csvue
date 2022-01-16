<template>
  <div class="home">
    <div class="header">
      <p>Monte seu</p>
      <p><strong>💃 LAST DANCE 💃</strong></p>
      <p>com R$15</p>    
      <p class="saldo-header">Saldo: R${{balance}}</p>
    </div>
    <div :class="[{showBtn: isBtnHidden}, {sticky: isSticky}, showTeamClass]">
      <div class="saldo">
        <p>{{picked.length}}/5</p>
        <p><span class="balance">R${{balance}}</span></p>
      </div>
    </div>
    <Team :class="[teamBGClass]" />
    <div class="reset">
      <button id="reset" @click="reset" class="btn">Limpar</button>
    </div>
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
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    PlayerList,
    Team
  },
  data() {
    return {
      scrollPosition: 0,
      isSticky: false,
      isHidden: false,
      isSliding: false,
      isBtnHidden: true,
      teamBGClass: 'team-bg',
      btnClasses: 'btn btn-show',
      showTeamClass: 'show-team',
      slideUp: 'slide-up',
      slideDown: 'slide-down',
      visible: 'visible'
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 20) {
        if(this.isSliding) {
          this.$refs.team.classList.add('not-visible')
        }
      }
      if (this.scrollPosition > 10) {
        this.isSticky = true;
        this.isBtnHidden = false;
      } else {
        this.isSticky = false;
        this.isBtnHidden = true;
      }
    },
    reset() {
      this.$store.dispatch('reset');
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapState({
      players: state => state.players,
      balance: state => state.balance
    }),
    ...mapGetters({
      picked: 'getPickedPlayers'
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
  .sticky {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .team-bg {
    background-color: rgba(35,45,56,.8);
  }
  .slide-up {
    transform: translateY(0);
    transition: .4s ease-in-out;      
  }
  .slide-down {
    transform: translateY(100%);
    transition: .4s ease-in-out;      
  }
  .hidden, .showBtn {
    display: none;
  }
  .show-team {
    margin-top: -80px;
    margin-bottom: 0;
    margin-left: auto;
    background-color: rgba(35,45,56,.8);
    width: 6vw;
    padding: 10px;
    border-radius: 5px;
  }
  .saldo p {
    font-size: 1.2em;
    margin-top: 10px;
  }
  .show-team .balance {
    font-weight: bold;
    font-size: 1.3em;
  }
  .visible {
    transform: translateY(0);
  }
  .not-visible {
    transform: translateY(100%);
  }
  .saldo-header {
    margin-top: 35px;
    font-weight: bold;
  }
  .header {
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .header p {
    font-size: 2em;
  }
  .reset {
    margin: 20px;
  }
  .btn {
    background-color: rgba(35,45,56,.8);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2em;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgba(12, 15, 19, 0.8);
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    .header {
      margin-bottom: 20px;
      margin-top: 0;
    }
    .saldo-header {
      margin-top: 15px;
    }
    .show-team {
      display: none;
    }
    .team-bg {
      padding-top: 2px;
    }
    .header p {
      font-size: 1.1em;
      line-height: 25px;
    }
  }
</style>