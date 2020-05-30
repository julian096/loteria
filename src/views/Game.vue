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
                        <v-btn block color="success" @click="start">Comenzar</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Title from "@/components/Title";
import MyTable from "@/components/MyTable";
import Card from "@/components/Card";
import CardReverse from "@/components/CardReverse"

export default {
    name: "Game",
    components: { Title, MyTable, Card, CardReverse },
    computed:{
        ...mapState(['player1','player2','cardsToRun'])
    },
    methods:{
        ...mapMutations(['startGame','validVictory']),
        start(){
            this.startGame();
            setInterval(() => {
                if(this.cardsToRun.length > 0){
                    this.startGame();
                }
            }, 1500);
        }
    },
    mounted(){
        
    }
}
</script>