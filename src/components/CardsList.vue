<template>
    <v-container>
        <v-row>
            <v-col cols="2" v-for="card of cards" :key="card.id">
                <v-img class="card" v-if="card.id !== 32" :src="card.path" @click="sendCard(card)"></v-img>
                <v-img class="card" v-else :src="card.path" aspect-ratio=".659" @click="sendCard(card)"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "CardsList",
    data:() => ({
    }),
    computed:{
        ...mapState(['cards','player1','player2'])
    },
    methods:{
        ...mapMutations(['saveCards']),
        sendCard(card){
            if(this.$route.params.playerOne === this.player1.name){
                this.saveCards({card, numberPlayer: 1})
            } else if(this.$route.params.playerTwo === this.player2.name){
                this.saveCards({card, numberPlayer: 2})
            }
        }
    }
}
</script>

<style scoped>
    .card:hover{
        cursor: pointer;
    }
</style>