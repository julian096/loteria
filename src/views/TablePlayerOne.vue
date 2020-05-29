<template>
    <div>
        <Title />
        <v-row>
            <v-col cols="6">
                <p class="headline text-center">Selecciona tus cartas {{ player1.name }}</p>
                <CardsList />
            </v-col>
            <v-col cols="6">
                <p class="headline text-center">Vista previa</p>
                <MyTable :cards="player1.cards"/>
            </v-col>
        </v-row>
        <ConfirmTable :dialog="confirm" :playerName="player1.name" :numberPlayer="1"/>
    </div>
</template>

<script>
import EventBus from "../bus";
import Title from "@/components/Title";
import CardsList from "@/components/CardsList";
import MyTable from "@/components/MyTable";
import ConfirmTable from "@/components/ConfirmTable";
import { mapState, mapMutations } from "vuex";

export default {
    name: "Tables",
    components: { Title, CardsList, MyTable, ConfirmTable },
    data: () => ({
        confirm: false
    }),
    computed:{
        ...mapState(['player1','cont'])
    },
    watch:{
        cont: function(val){
            if(val === 16){
                this.confirm = true;
            }
        }
    },
    methods:{
        ...mapMutations(['resetData'])
    },
    mounted(){
        EventBus.$on("cancelTablePlayerOne",() => {
            this.resetData(1);
            this.confirm = false;
        })
    }
}
</script>