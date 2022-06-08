<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to MiniAP!</h1>
      <p class="jumbo-p"><i>An online curriculum vitae by Alex Parker</i></p>
      <hr class="my-4">
      <p class="jumbo-p">I am a software developer who wanted a place to store my personal information. <u>This is that place</u>.</p>
      <b-button variant="info" id="welcome-tooltip">What does that mean?</b-button>
      <b-tooltip id="welcome-tooltip-content" position="right" target="welcome-tooltip" :triggers="hover" :delay="{show: 100, hide: 900}">
        A curriculum vitae, often referred to by its abbreviated form 'CV', contains all of the information about an individual and their credentials.<br/> This can refer to both employment history and work experience, alongside any academic achievements garnered in their life.
      </b-tooltip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  mounted() {
    
  }
}
</script>

<style scoped>
   
  h1 {
    width: 100%;
    animation: right_to_left 2.5s ease;
    text-align: center;
  }

  .jumbo-p {
    animation: fade_in 2s both 2.5s;
  }

</style>
