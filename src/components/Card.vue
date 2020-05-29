<template>
    <v-card width="300">
        <v-img :src="path"></v-img>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Card",
    props:['path'],
    computed:{
        ...mapState(['cardsToRun'])
    }
}
</script>