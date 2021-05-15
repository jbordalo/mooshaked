<template>
    <div>
        <div class="submitWrapper">
            <textarea id="fileInput" v-model="input"> </textarea>
            <input type="submit" @click.prevent="submitFile" />
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return { input: "" };
    },

    methods: {
        ...mapActions(["updateFile"]),

        submitFile() {
            // console.log(this.input);
            this.updateFile(this.input);
        },
    },
};
</script>

<style scoped src="../assets/css/submit.css">
</style>