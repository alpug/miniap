<template>
    <nav color="red" class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/"><img class="navbar-logo" alt="MiniAP Logo" src="@/assets/images/logo-transparent.png"></router-link>
        <button class="navbar-toggler" type="button" bs-data-toggle="collapse" bs-data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link @click="document.body.style.backgroundColor = 'green'" class="navbar-item nav-link" id="home" to="/" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-item nav-link" id="about" to="/about" exact>About me</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-item nav-link" id="interests" to="/interests" exact>My Interests</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-item nav-link disabled" to="#" exact>(My Hero) Academia</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-item nav-link" id="contact" to="/contact" exact>Contact Us</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

.navbar-logo {
    max-width: 8rem;
    max-height: 8rem;
}

</style>