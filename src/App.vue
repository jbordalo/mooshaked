<template>
    <main>
        <app-header></app-header>
        <div class="content">
            <transition name="slide" mode="out-in">
                <router-view class="component"></router-view>
            </transition>
        </div>
    </main>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components: {
        appHeader: Header,
    },
};
</script>

<style src="./assets/css/app.css">
</style>
