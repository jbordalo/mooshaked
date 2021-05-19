<template>
    <div>
        <p>Errors: {{ $store.getters.getErrors }}</p>

        <hr />

        <AppLine
            :key="line.id"
            v-for="line in file"
            :line="line"
            :numLines="file.length"
        ></AppLine>
    </div>
</template>

<script>
import Line from "./Line.vue";

export default {
    computed: {
        file() {
            return this.$store.getters.getFile;
        },
    },
    components: {
        AppLine: Line,
    },
};
</script>

<style scoped src="../assets/css/result.css">
</style>