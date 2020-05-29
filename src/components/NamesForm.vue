<template>
    <v-row>
        <v-col md="6" offset-md="3">
            <v-form ref="NamesForm" v-model="isValid">
                <v-card elevation="20" class="mt-12" shaped>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6">
                                <p class="headline">Introduce tu nombre</p>
                                <v-text-field :rules="ruleName" label="Jugador 1" shaped filled v-model="names[0]"/>
                            </v-col>
                            <v-col cols="6">
                                <p class="headline">Introduce tu nombre</p>
                                <v-text-field :rules="ruleName" label="Jugador 2" shaped filled v-model="names[1]"/>
                            </v-col>
                            <v-col cols="12">
                                <v-btn :disabled="!isValid" rounded block color="success" @click="next">Siguiente</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from "vuex";
import router from "../router/index";

export default {
    name: 'NamesForm',
    data:() => ({
        isValid: true,
        names:["",""],
        ruleName: [
			value => !!value || "Campo requerido"
		]
    }),
    methods:{
        ...mapMutations(['saveName']),
        next(){
            this.saveName(this.names);
            router.push({ name: 'TableOne', params: { playerOne: this.names[0] } });
        }
    }
}
</script>