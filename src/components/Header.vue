<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <img
                style="margin-top: 10px"
                src="../assets/img/mooshaked.png"
                alt="#"
                height="300"
                width="100%"
            />
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Mooshaked</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/submit" activeClass="active" tag="li"
                        ><a>Submit</a></router-link
                    >
                    <router-link to="/result" activeClass="active" tag="li"
                        ><a>Result</a></router-link
                    >
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>