<template>
    <div>
        <Title />
        <v-row>
            <v-col cols="6">
                <p class="headline text-center">Selecciona tus cartas {{ player2.name }}</p>
                <CardsList />
            </v-col>
            <v-col cols="3" offset-sm="1">
                <p class="headline text-center">Vista previa</p>
                <MyTable :cards="player2.cards"/>
            </v-col>
        </v-row>
        <ConfirmTable :dialog="confirm" :playerName="player2.name" :numberPlayer="2"/>
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
        ...mapState(['player2','cont'])
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
        EventBus.$on("cancelTablePlayerTwo",() => {
            this.resetData(2);
            this.confirm = false;
        })
    }
}
</script>