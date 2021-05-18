<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <p>{{ padLines(line.id + 1) }}</p>
            </div>
            <div class="col-sm">
                <code
                    :class="{ 'code--red': line.error }"
                    v-html="line.line"
                    v-if="line.line !== ''"
                ></code>
                <br v-else />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["line", "numLines"],
    methods: {
        padLines(value) {
            const valueDigits = value.toString().length;
            const maxDigits = this.numLines.toString().length;
            const padding = maxDigits - valueDigits;
            return value.toString().padStart(padding + valueDigits, "0");
        },
    },
};
</script>

<style src="../assets/css/line.css" scoped>
</style>