<template>
    <div>
        <code :class="{ 'code--red': line.error }" v-html="line.line"></code>
    </div>
</template>

<script>
export default {
    props: ["line"],
};
</script>

<style src="../assets/css/line.css" scoped>
</style>