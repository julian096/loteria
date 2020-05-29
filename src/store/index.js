import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsToRun: [
      {id: 1, path: require('../assets/img/1.jpeg')},
      {id: 2, path: require('../assets/img/2.jpeg')},
      {id: 3, path: require('../assets/img/3.jpeg')},
      {id: 4, path: require('../assets/img/4.jpeg')},
      {id: 5, path: require('../assets/img/5.jpeg')},
      {id: 6, path: require('../assets/img/6.jpeg')},
      {id: 7, path: require('../assets/img/7.jpeg')},
      {id: 8, path: require('../assets/img/8.jpeg')},
      {id: 9, path: require('../assets/img/9.jpeg')},
      {id: 10, path: require('../assets/img/10.jpeg')},
      {id: 11, path: require('../assets/img/11.jpeg')},
      {id: 12, path: require('../assets/img/12.jpeg')},
      {id: 13, path: require('../assets/img/13.jpeg')},
      {id: 14, path: require('../assets/img/14.jpeg')},
      {id: 15, path: require('../assets/img/15.jpeg')},
      {id: 16, path: require('../assets/img/16.jpeg')},
      {id: 17, path: require('../assets/img/17.jpeg')},
      {id: 18, path: require('../assets/img/18.jpeg')},
      {id: 19, path: require('../assets/img/19.jpeg')},
      {id: 20, path: require('../assets/img/20.jpeg')},
      {id: 21, path: require('../assets/img/21.jpeg')},
      {id: 22, path: require('../assets/img/22.jpeg')},
      {id: 23, path: require('../assets/img/23.jpeg')},
      {id: 24, path: require('../assets/img/24.jpeg')},
      {id: 25, path: require('../assets/img/25.jpeg')},
      {id: 26, path: require('../assets/img/26.jpeg')},
      {id: 27, path: require('../assets/img/27.jpeg')},
      {id: 28, path: require('../assets/img/28.jpeg')},
      {id: 29, path: require('../assets/img/29.jpeg')},
      {id: 30, path: require('../assets/img/30.jpeg')},
      {id: 31, path: require('../assets/img/31.jpeg')},
      {id: 32, path: require('../assets/img/32.jpeg')},
      {id: 33, path: require('../assets/img/33.jpeg')},
      {id: 34, path: require('../assets/img/34.jpeg')},
      {id: 35, path: require('../assets/img/35.jpeg')},
      {id: 36, path: require('../assets/img/36.jpeg')},
      {id: 37, path: require('../assets/img/37.jpeg')},
      {id: 38, path: require('../assets/img/38.jpeg')},
      {id: 39, path: require('../assets/img/39.jpeg')},
      {id: 40, path: require('../assets/img/40.jpeg')},
      {id: 41, path: require('../assets/img/41.jpeg')},
      {id: 42, path: require('../assets/img/42.jpeg')},
      {id: 43, path: require('../assets/img/43.jpeg')},
      {id: 44, path: require('../assets/img/44.jpeg')},
      {id: 45, path: require('../assets/img/45.jpeg')},
      {id: 46, path: require('../assets/img/46.jpeg')},
      {id: 47, path: require('../assets/img/47.jpeg')},
      {id: 48, path: require('../assets/img/48.jpeg')},
      {id: 49, path: require('../assets/img/49.jpeg')},
      {id: 50, path: require('../assets/img/50.jpeg')},
      {id: 51, path: require('../assets/img/51.jpeg')},
      {id: 52, path: require('../assets/img/52.jpeg')},
      {id: 53, path: require('../assets/img/53.jpeg')},
      {id: 54, path: require('../assets/img/54.jpeg')}
    ],
    cards: [
        {id: 1, path: require('../assets/img/1.jpeg')},
        {id: 2, path: require('../assets/img/2.jpeg')},
        {id: 3, path: require('../assets/img/3.jpeg')},
        {id: 4, path: require('../assets/img/4.jpeg')},
        {id: 5, path: require('../assets/img/5.jpeg')},
        {id: 6, path: require('../assets/img/6.jpeg')},
        {id: 7, path: require('../assets/img/7.jpeg')},
        {id: 8, path: require('../assets/img/8.jpeg')},
        {id: 9, path: require('../assets/img/9.jpeg')},
        {id: 10, path: require('../assets/img/10.jpeg')},
        {id: 11, path: require('../assets/img/11.jpeg')},
        {id: 12, path: require('../assets/img/12.jpeg')},
        {id: 13, path: require('../assets/img/13.jpeg')},
        {id: 14, path: require('../assets/img/14.jpeg')},
        {id: 15, path: require('../assets/img/15.jpeg')},
        {id: 16, path: require('../assets/img/16.jpeg')},
        {id: 17, path: require('../assets/img/17.jpeg')},
        {id: 18, path: require('../assets/img/18.jpeg')},
        {id: 19, path: require('../assets/img/19.jpeg')},
        {id: 20, path: require('../assets/img/20.jpeg')},
        {id: 21, path: require('../assets/img/21.jpeg')},
        {id: 22, path: require('../assets/img/22.jpeg')},
        {id: 23, path: require('../assets/img/23.jpeg')},
        {id: 24, path: require('../assets/img/24.jpeg')},
        {id: 25, path: require('../assets/img/25.jpeg')},
        {id: 26, path: require('../assets/img/26.jpeg')},
        {id: 27, path: require('../assets/img/27.jpeg')},
        {id: 28, path: require('../assets/img/28.jpeg')},
        {id: 29, path: require('../assets/img/29.jpeg')},
        {id: 30, path: require('../assets/img/30.jpeg')},
        {id: 31, path: require('../assets/img/31.jpeg')},
        {id: 32, path: require('../assets/img/32.jpeg')},
        {id: 33, path: require('../assets/img/33.jpeg')},
        {id: 34, path: require('../assets/img/34.jpeg')},
        {id: 35, path: require('../assets/img/35.jpeg')},
        {id: 36, path: require('../assets/img/36.jpeg')},
        {id: 37, path: require('../assets/img/37.jpeg')},
        {id: 38, path: require('../assets/img/38.jpeg')},
        {id: 39, path: require('../assets/img/39.jpeg')},
        {id: 40, path: require('../assets/img/40.jpeg')},
        {id: 41, path: require('../assets/img/41.jpeg')},
        {id: 42, path: require('../assets/img/42.jpeg')},
        {id: 43, path: require('../assets/img/43.jpeg')},
        {id: 44, path: require('../assets/img/44.jpeg')},
        {id: 45, path: require('../assets/img/45.jpeg')},
        {id: 46, path: require('../assets/img/46.jpeg')},
        {id: 47, path: require('../assets/img/47.jpeg')},
        {id: 48, path: require('../assets/img/48.jpeg')},
        {id: 49, path: require('../assets/img/49.jpeg')},
        {id: 50, path: require('../assets/img/50.jpeg')},
        {id: 51, path: require('../assets/img/51.jpeg')},
        {id: 52, path: require('../assets/img/52.jpeg')},
        {id: 53, path: require('../assets/img/53.jpeg')},
        {id: 54, path: require('../assets/img/54.jpeg')}
    ],
    cont:0,
    player1:{
      name: "",
      cards:[]
    },
    player2:{
      name: "",
      cards:[]
    } 
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
    }
  }
})
