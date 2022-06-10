<template>
  <div class="about my-4 mx-5">
    <h1>About me...</h1>
    <br/>
    <p id="blurb">
      I am a 22 year old self-taught Software Engineer whose passion is to learn about and experience the world of technology. My favourite area to explore is Software Development, having over 2 years of working experience in this area.<br/>
      I spent time working in construction and retail.
    </p>
    <hr/>
    <h6 class="my-3">
      I have become familiar working with, writing and making use of the following...<br/>
    </h6>
    <div id="button-group">
      <b-button-group id="btn-grp" class="my-1">
        <b-button variant="outline-success" @click="showVue()">Vue JS framework</b-button>
        <b-button variant="outline-dark" @click="showJava()">Java</b-button>
        <b-button variant="outline-info" @click="showPython()">Python</b-button>
        <b-button variant="outline-danger" @click="showHTML()">HTML</b-button>
        <b-button variant="outline-info" @click="showCSS()">CSS</b-button>
        <b-button variant="outline-warning" @click="showJavaScript()">JavaScript</b-button>
      </b-button-group>
      <p id="help">
        *Click any of the above fields to find out more about my experience in that area.
      </p>
      <hr/>
    </div>
    <br/>
    <div id="modal-group">
      <b-modal v-model="showingVue" size="xl" title="My experience with Vue JS framework...">
        <p class="my-2">I have spent the last 2 years using the Vue JS framework extensively. I first stumbled upon Vue JS when I was unsure of the way Angular JS was being implemented by the team at work. It felt like some simple things took more time and code than had been expected when a colleague first advised the team that we should all learn Angular JS. After a period of time, we were ready to begin a project building an administration application for a client, and I took the opportunity to recommend Vue JS to my boss. It had a minimal learning curve, but more importantly was capable of everything any other framework could do for us, but with less code. Less cluter. More mindspace for the things that really matter when building a business solution. He took to Vue JS for all the same reasons I had, and it is now the framework of choice for that business.</p>
      </b-modal>
      <b-modal v-model="showingJava" size="lg" title="My experience with Java...">
        <p class="my-2">Java stuff i done.</p>
      </b-modal>
      <b-modal v-model="showingPython" title="My experience with Python...">
        <p class="my-2">Python stuff i done.</p>
      </b-modal>
      <b-modal v-model="showingHTML" title="My experience with HTML...">
        <p class="my-2">HTML stuff i done.</p>
      </b-modal>
      <b-modal v-model="showingCSS" title="My experience with CSS...">
        <p class="my-2">CSS stuff i done.</p>
      </b-modal>
      <b-modal v-model="showingJavaScript" title="My experience with JavaScript...">
        <p class="my-2">JavaScript stuff i done.</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      showingVue: false,
      showingJava: false,
      showingPython: false,
      showingHTML: false,
      showingCSS: false,
      showingJavaScript: false
    }
  },
  components: {

  },
  methods: {
    showVue() {
      this.showingVue = !this.showingVue;
    },
    showJava() {
      this.showingJava = !this.showingJava;
    },
    showPython() {
      this.showingPython = !this.showingPython;
    },
    showHTML() {
      this.showingHTML = !this.showingHTML;
    },
    showCSS() {
      this.showingCSS = !this.showingCSS;
    },
    showJavaScript() {
      this.showingJavaScript = !this.showingJavaScript;
    },
  }
}
</script>

<style scoped>
  h1 {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: left;
    width: 100%;
    animation: fade_in 2s ease;
    -webkit-animation: fade_in 2s ease;
    -moz-animation: fade_in 2s ease;
    -o-animation: fade_in 2s ease;
    -ms-animation: fade_in 2s ease;
  }

  h6 {
    text-align: left;
    animation: left_to_right_fade_in 2s ease;
    -webkit-animation: left_to_right_fade_in 2s ease;
    -moz-animation: left_to_right_fade_in 2s ease;
    -o-animation: left_to_right_fade_in 2s ease;
    -ms-animation: left_to_right_fade_in 2s ease;
  }

  li {
    margin: 1% 0;
  }

  #button-group {
    animation: left_to_right_fade_in 2s ease;
    -webkit-animation: left_to_right_fade_in 2s ease;
    -moz-animation: left_to_right_fade_in 2s ease;
    -o-animation: left_to_right_fade_in 2s ease;
    -ms-animation: left_to_right_fade_in 2s ease;
  }

  #blurb {
    text-align: left;
    animation: left_to_right_fade_in 2s both;
    -webkit-animation: left_to_right_fade_in 2s both;
    -moz-animation: left_to_right_fade_in 2s both;
    -o-animation: left_to_right_fade_in 2s both;
    -ms-animation: left_to_right_fade_in 2s both;
  }

  #help {
    color: darkblue;
    font-weight: bold;
    font-size: 0.75em;
    margin: 0.25em 0 0 0;
    animation: left_to_right_fade_in 2.75s both 2s;
  }

</style>