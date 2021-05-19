<template>
    <div>
        <textarea id="fileInput" v-model="input"></textarea>
        <input
            class="btn btn-primary"
            type="submit"
            :disabled="!isInputValid"
            @click.prevent="submitFile"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return { input: this.$store.getters.getRawText || "" };
    },

    methods: {
        ...mapActions(["updateFile"]),

        submitFile() {
            this.updateFile(this.input);
            this.$router.push("/result");
        },
    },
    computed: {
        isInputValid() {
            return this.input.trim() !== "";
        },
    },
};
</script>

<style scoped src="../assets/css/submit.css">
</style>