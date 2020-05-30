<template>
    <v-img :src="reversePath" v-if="cardsToRun.length !== 0"></v-img>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "CardReverse",
    data: () => ({
        reversePath: require('../assets/img/reverso.jpg')
    }),
    computed:{
        ...mapState(['cardsToRun'])
    }
}
</script>