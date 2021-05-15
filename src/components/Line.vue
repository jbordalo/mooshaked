<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <p>{{ line.id + 1 }}</p>
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
    props: ["line"],
};
</script>

<style src="../assets/css/line.css" scoped>
</style>