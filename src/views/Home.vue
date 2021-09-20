<template>
  <div class="home">
    <div class="header">
      <p>Monte seu</p>
      <p>DREAM TEAM</p>
      <p>com R$15</p>    
      <p>Saldo: R${{balance}}</p>
    </div>
    <div :class="[{sticky: isSticky}, teste]" ref="team">
      <div :class="[{showBtn: isBtnHidden}, showTeamClass]">
        <button class="btn btn-show" @click="showTeam">Mostrar</button>
        <div class="saldo">
          <p><span class="balance">R${{balance}}</span></p>
        </div>
      </div>
      <Team  :class="[teamBGClass]" />
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
import {mapState} from 'vuex'

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
      teste: 'teste'
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 20) {
        if(this.isSliding) {
          this.$refs.team.classList.add('slide-down')
        }
      }
      if (this.scrollPosition > 10) {
        this.isSticky = true;
        this.isHidden = true;
        this.isBtnHidden = false;

      } else {
        this.isSticky = false;
        this.isHidden = false;
        this.isBtnHidden = true;
      }
    },
    showTeam() {
      this.isSliding = !this.isSliding;
      this.isHidden = !this.isHidden;
      this.$refs.team.classList.toggle('slide-down');
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
    width: 100%;   
    
  }
  .slide-up {
    transform: translateY(0);
    transition: .4s ease-in-out;      
  }
  .slide-down {
    transform: translateY(100%) !important;
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
  .teste {
    transform: translate(0);
    transition: .4s ease-in-out;      
  }
</style>