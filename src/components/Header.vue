<template>
    <nav>
        <div>
            <router-link class="nav-link" to="/" activeClass="active" exact>
                Mooshaked
            </router-link>
        </div>
        <div>
            <router-link class="nav-link" to="/submit" activeClass="active">
                Submit
            </router-link>
        </div>
        <div>
            <router-link class="nav-link" to="/result" activeClass="active">
                Result
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped src="../assets/css/header.css">
</style>