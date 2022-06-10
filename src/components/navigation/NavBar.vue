<template>
    <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/"><img class="navbar-logo" alt="MiniAP Logo" src="@/assets/images/logo-transparent.png"></router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#"><router-link to="/" exact>Home</router-link></b-nav-item>
                    <b-nav-item href="#"><router-link to="/about" exact>About me</router-link></b-nav-item>
                    <b-nav-item disabled href="#"><router-link to="#" exact>Academia</router-link></b-nav-item>
                    <b-nav-item href="#"><router-link to="/contact" exact>Contact Us</router-link></b-nav-item>
                </b-navbar-nav>
        </b-collapse>
    </b-navbar>
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