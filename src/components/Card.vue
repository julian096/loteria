<template>
    <v-img :src="currentCard.path"></v-img>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Card",
    props:['path'],
    data: () => ({
        reversePath: require('../assets/img/16.jpeg')
    }),
    computed:{
        ...mapState(['currentCard'])
    }
}
</script>