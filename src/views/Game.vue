<template>
    <div>
        <Title />
        <v-row>
            <v-col cols="4">
                <p class="headline text-center">Tabla de {{ player1.name }}</p>
                <MyTable :cards="player1.cards"/>
            </v-col>
            <v-col cols="4">
                <p class="headline text-center"> Tabla de {{ player2.name }}</p>
                <MyTable :cards="player2.cards"/>
            </v-col>
            <v-col cols="4">
                <Card />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title";
import MyTable from "@/components/MyTable";
import Card from "@/components/Card";

export default {
    name: "Game",
    components: { Title, MyTable, Card },
    computed:{
        ...mapState(['player1','player2'])
    }
}
</script>