<template>
    <v-snackbar v-model="snack" :timeout="4000" top color="green" class="subtitle-1">El ganador es {{ winner }}</v-snackbar>
</template>

<script>
export default {
    name: "Winner",
    props:['snack','winner']
}
</script>
