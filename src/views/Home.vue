<template>
    <div>
        <Title />
        <NamesForm />
    </div>
</template>

<script>
import Title from "@/components/Title";
import NamesForm from "@/components/NamesForm";

export default {
    name: 'Home',
    components: { Title, NamesForm }
}
</script>