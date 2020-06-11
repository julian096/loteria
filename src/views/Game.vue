<template>
    <v-container fluid>
        <Title />
        <v-row>
            <v-col cols="4">
                <MyTable :playerName="player1.name" :cards="player1.cards"/>
            </v-col>
            <v-col cols="4">
                <MyTable :playerName="player2.name" :cards="player2.cards"/>
            </v-col>
            <v-col cols="4">
                <v-row justify="space-around">
                    <v-col cols="4">
                        <CardReverse />
                    </v-col>
                    <v-col cols="4">
                        <Card />
                    </v-col>
                    <v-col cols="12">
                        <v-btn :disabled="cardsToRun.length > 0 && cardsToRun.length < 54" block color="success" @click="start">Comenzar</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <Winner :snack="showVictory" :winner="winner"/>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Title from "@/components/Title";
import MyTable from "@/components/MyTable";
import Card from "@/components/Card";
import CardReverse from "@/components/CardReverse";
import Winner from "@/components/Winner";

export default {
    name: "Game",
    components: { Title, MyTable, Card, CardReverse, Winner },
    data:() => ({
        showVictory: false,
        winner:""
    }),
    computed:{
        ...mapState(['player1','player2','cardsToRun'])
    },
    watch:{
        'player1.victory': function(){
            this.showVictory = true;
            this.winner = this.player1.name;
        },
        'player2.victory': function(){
            this.showVictory = true;
            this.winner = this.player2.name;
        }
    },
    methods:{
        ...mapMutations(['startGame','validVictory']),
        start(){
            this.startGame();
            setInterval(() => {
                if(this.cardsToRun.length > 0){
                    this.startGame();
                    this.validVictory();
                }
            }, 2000);
        }
    }
}
</script>