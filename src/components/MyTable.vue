<template>
    <v-container>
        <p class="headline ml-12" v-if="playerName">Tabla de {{ playerName }}</p>
        <v-card max-width="270">
            <v-row no-gutters>
                <v-col cols="3" v-for="card of cards" :key="card.id">
                    <v-card v-if="card.id !== 32" :disabled="card.pass">
                        <v-img :src="card.path"></v-img>
                    </v-card>
                    <v-card v-else :disabled="card.pass">
                        <v-img :src="card.path" aspect-ratio=".659"></v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "MyTable",
    props:['cards','playerName']
}
</script>