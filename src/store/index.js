import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsToRun: [
      {id: 1, pass: false, path: require('../assets/img/1.jpeg')},
      {id: 2, pass: false, path: require('../assets/img/2.jpeg')},
      {id: 3, pass: false, path: require('../assets/img/3.jpeg')},
      {id: 4, pass: false, path: require('../assets/img/4.jpeg')},
      {id: 5, pass: false, path: require('../assets/img/5.jpeg')},
      {id: 6, pass: false, path: require('../assets/img/6.jpeg')},
      {id: 7, pass: false, path: require('../assets/img/7.jpeg')},
      {id: 8, pass: false, path: require('../assets/img/8.jpeg')},
      {id: 9, pass: false, path: require('../assets/img/9.jpeg')},
      {id: 10, pass: false, path: require('../assets/img/10.jpeg')},
      {id: 11, pass: false, path: require('../assets/img/11.jpeg')},
      {id: 12, pass: false, path: require('../assets/img/12.jpeg')},
      {id: 13, pass: false, path: require('../assets/img/13.jpeg')},
      {id: 14, pass: false, path: require('../assets/img/14.jpeg')},
      {id: 15, pass: false, path: require('../assets/img/15.jpeg')},
      {id: 16, pass: false, path: require('../assets/img/16.jpeg')},
      {id: 17, pass: false, path: require('../assets/img/17.jpeg')},
      {id: 18, pass: false, path: require('../assets/img/18.jpeg')},
      {id: 19, pass: false, path: require('../assets/img/19.jpeg')},
      {id: 20, pass: false, path: require('../assets/img/20.jpeg')},
      {id: 21, pass: false, path: require('../assets/img/21.jpeg')},
      {id: 22, pass: false, path: require('../assets/img/22.jpeg')},
      {id: 23, pass: false, path: require('../assets/img/23.jpeg')},
      {id: 24, pass: false, path: require('../assets/img/24.jpeg')},
      {id: 25, pass: false, path: require('../assets/img/25.jpeg')},
      {id: 26, pass: false, path: require('../assets/img/26.jpeg')},
      {id: 27, pass: false, path: require('../assets/img/27.jpeg')},
      {id: 28, pass: false, path: require('../assets/img/28.jpeg')},
      {id: 29, pass: false, path: require('../assets/img/29.jpeg')},
      {id: 30, pass: false, path: require('../assets/img/30.jpeg')},
      {id: 31, pass: false, path: require('../assets/img/31.jpeg')},
      {id: 32, pass: false, path: require('../assets/img/32.jpeg')},
      {id: 33, pass: false, path: require('../assets/img/33.jpeg')},
      {id: 34, pass: false, path: require('../assets/img/34.jpeg')},
      {id: 35, pass: false, path: require('../assets/img/35.jpeg')},
      {id: 36, pass: false, path: require('../assets/img/36.jpeg')},
      {id: 37, pass: false, path: require('../assets/img/37.jpeg')},
      {id: 38, pass: false, path: require('../assets/img/38.jpeg')},
      {id: 39, pass: false, path: require('../assets/img/39.jpeg')},
      {id: 40, pass: false, path: require('../assets/img/40.jpeg')},
      {id: 41, pass: false, path: require('../assets/img/41.jpeg')},
      {id: 42, pass: false, path: require('../assets/img/42.jpeg')},
      {id: 43, pass: false, path: require('../assets/img/43.jpeg')},
      {id: 44, pass: false, path: require('../assets/img/44.jpeg')},
      {id: 45, pass: false, path: require('../assets/img/45.jpeg')},
      {id: 46, pass: false, path: require('../assets/img/46.jpeg')},
      {id: 47, pass: false, path: require('../assets/img/47.jpeg')},
      {id: 48, pass: false, path: require('../assets/img/48.jpeg')},
      {id: 49, pass: false, path: require('../assets/img/49.jpeg')},
      {id: 50, pass: false, path: require('../assets/img/50.jpeg')},
      {id: 51, pass: false, path: require('../assets/img/51.jpeg')},
      {id: 52, pass: false, path: require('../assets/img/52.jpeg')},
      {id: 53, pass: false, path: require('../assets/img/53.jpeg')},
      {id: 54, pass: false, path: require('../assets/img/54.jpeg')}
    ],
    cards: [
        {id: 1, pass: false, path: require('../assets/img/1.jpeg')},
        {id: 2, pass: false, path: require('../assets/img/2.jpeg')},
        {id: 12, pass: false, path: require('../assets/img/12.jpeg')},
        {id: 13, pass: false, path: require('../assets/img/13.jpeg')},
        {id: 3, pass: false, path: require('../assets/img/3.jpeg')},
        {id: 4, pass: false, path: require('../assets/img/4.jpeg')},
        {id: 5, pass: false, path: require('../assets/img/5.jpeg')},
        {id: 6, pass: false, path: require('../assets/img/6.jpeg')},
        {id: 7, pass: false, path: require('../assets/img/7.jpeg')},
        {id: 8, pass: false, path: require('../assets/img/8.jpeg')},
        {id: 9, pass: false, path: require('../assets/img/9.jpeg')},
        {id: 10, pass: false, path: require('../assets/img/10.jpeg')},
        {id: 11, pass: false, path: require('../assets/img/11.jpeg')},
        {id: 14, pass: false, path: require('../assets/img/14.jpeg')},
        {id: 15, pass: false, path: require('../assets/img/15.jpeg')},
        {id: 16, pass: false, path: require('../assets/img/16.jpeg')},
        {id: 17, pass: false, path: require('../assets/img/17.jpeg')},
        {id: 18, pass: false, path: require('../assets/img/18.jpeg')},
        {id: 19, pass: false, path: require('../assets/img/19.jpeg')},
        {id: 20, pass: false, path: require('../assets/img/20.jpeg')},
        {id: 21, pass: false, path: require('../assets/img/21.jpeg')},
        {id: 22, pass: false, path: require('../assets/img/22.jpeg')},
        {id: 23, pass: false, path: require('../assets/img/23.jpeg')},
        {id: 24, pass: false, path: require('../assets/img/24.jpeg')},
        {id: 25, pass: false, path: require('../assets/img/25.jpeg')},
        {id: 26, pass: false, path: require('../assets/img/26.jpeg')},
        {id: 27, pass: false, path: require('../assets/img/27.jpeg')},
        {id: 28, pass: false, path: require('../assets/img/28.jpeg')},
        {id: 29, pass: false, path: require('../assets/img/29.jpeg')},
        {id: 30, pass: false, path: require('../assets/img/30.jpeg')},
        {id: 31, pass: false, path: require('../assets/img/31.jpeg')},
        {id: 32, pass: false, path: require('../assets/img/32.jpeg')},
        {id: 33, pass: false, path: require('../assets/img/33.jpeg')},
        {id: 34, pass: false, path: require('../assets/img/34.jpeg')},
        {id: 35, pass: false, path: require('../assets/img/35.jpeg')},
        {id: 36, pass: false, path: require('../assets/img/36.jpeg')},
        {id: 37, pass: false, path: require('../assets/img/37.jpeg')},
        {id: 38, pass: false, path: require('../assets/img/38.jpeg')},
        {id: 39, pass: false, path: require('../assets/img/39.jpeg')},
        {id: 40, pass: false, path: require('../assets/img/40.jpeg')},
        {id: 41, pass: false, path: require('../assets/img/41.jpeg')},
        {id: 42, pass: false, path: require('../assets/img/42.jpeg')},
        {id: 43, pass: false, path: require('../assets/img/43.jpeg')},
        {id: 44, pass: false, path: require('../assets/img/44.jpeg')},
        {id: 45, pass: false, path: require('../assets/img/45.jpeg')},
        {id: 46, pass: false, path: require('../assets/img/46.jpeg')},
        {id: 47, pass: false, path: require('../assets/img/47.jpeg')},
        {id: 48, pass: false, path: require('../assets/img/48.jpeg')},
        {id: 49, pass: false, path: require('../assets/img/49.jpeg')},
        {id: 50, pass: false, path: require('../assets/img/50.jpeg')},
        {id: 51, pass: false, path: require('../assets/img/51.jpeg')},
        {id: 52, pass: false, path: require('../assets/img/52.jpeg')},
        {id: 53, pass: false, path: require('../assets/img/53.jpeg')},
        {id: 54, pass: false, path: require('../assets/img/54.jpeg')}
    ],
    currentCard:"",
    cont:0,
    player1:{
      name: "",
      cards:[],
      cardsPass:[]
    },
    player2:{
      name: "",
      cards:[],
      cardsPass:[]
    },
    victorys:[
      [0,3,12,15]
    ],
    index:0
  },
  mutations: {
    saveName(state, name){
      state.player1.name = name[0];
      state.player2.name = name[1];
    },
    saveCards(state, {card, numberPlayer}){
      if(numberPlayer === 1){
        state.player1.cards.push(card);
      }else if(numberPlayer === 2){
        state.player2.cards.push(card);
      }
      state.cards = state.cards.filter(item => item.id !== card.id);
      state.cont++;
    },
    resetData(state, numberPlayer){
      state.cont = 0;
      if(numberPlayer == 1){
        state.player1.cards = [];
      } else if(numberPlayer == 2){
        state.player2.cards = [];
      }
      state.cards = state.cardsToRun;
    },
    nextPlayer(state){
      state.cont = 0;
      state.cards = state.cardsToRun;
    },
    startGame(state){
      state.currentCard = state.cardsToRun[Math.floor(Math.random() * state.cardsToRun.length)];
      for(let card of state.player1.cards){
        if(state.currentCard.id === card.id){
          card.pass = true;
        }
      }
      for(let card of state.player2.cards){
        if(state.currentCard.id === card.id){
          card.pass = true;
        }
      }
      state.cardsToRun = state.cardsToRun.filter( card => card.id !== state.currentCard.id );
    },
    validVictory(state){
      state.index = state.player1.cards.findIndex(card => card.id === state.currentCard.id);
      if(state.index != -1){
        state.player1.cardsPass.push(state.index)
      }
    }
  }
})
