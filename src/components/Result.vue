<template>
    <div>
        <AppLine :key="line.id" v-for="line in file" :line="line"></AppLine>
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

<style scoped>
</style>