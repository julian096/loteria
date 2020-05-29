<template>
    <v-dialog v-model="dialog" width="500" persistent>
        <v-card>
            <v-card-title>Confirmar tabla para  {{ playerName }}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-btn block color="error" @click="cancel">Cancelar</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn block color="success" @click="confirm">Confirmar</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import EventBus from '../bus';
import router from "../router/index";
import { mapState, mapMutations } from "vuex";

export default {
    name: "ConfirmTable",
    props:['dialog', 'playerName', 'numberPlayer'],
    data: () => ({
    }),
    computed:{
        ...mapState(['player1', 'player2'])
    },
    methods:{
        ...mapMutations(['nextPlayer']),
        cancel(){
            if(this.numberPlayer == 1){
                EventBus.$emit("cancelTablePlayerOne");
            } else if(this.numberPlayer == 2){
                EventBus.$emit("cancelTablePlayerTwo")
            }
        },
        confirm(){
            if(this.numberPlayer === 1){
                this.nextPlayer();
                router.push({ name: 'TableTwo', params: { playerTwo: this.player2.name } })
            }else if(this.numberPlayer === 2){
                router.push({ name: 'Game' })
            }
        }
    }
}
</script>