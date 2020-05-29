<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="3" v-for="card of cards" :key="card.id">
                <v-img v-if="card.id !== 32" :src="card.path"></v-img>
                <v-img v-else :src="card.path" aspect-ratio=".659"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MyTable",
    props:['cards']
}
</script>