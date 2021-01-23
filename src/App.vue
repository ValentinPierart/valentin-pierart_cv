<template>
  <div class="padding-left-50 relative">
    <h1 id="head">
      <div
        class="letter-spacing-0-3"
        style="font-size: 2.95rem; font-weight: normal"
      >
        Valentin Pierart
      </div>
      <div
        class="font-large grey-8 letter-spacing-0-6"
        style="font-size: 1.3rem; font-weight: normal"
      >
        Developeur logiciel
      </div>
    </h1>

    <div class="pull-right" id="lang">
      <a class="margin-right-10" href="/fr" :class="{ select: lang === 'fr' }"
        >Français</a
      >
      <a class="margin-right-10" href="/en" :class="{ select: lang === 'en' }">
        English</a
      >
    </div>


    <div id="contact">
      <a
        target="_blank"
        class="social no-underline hidden-mobile"
        href="mailto:valentin.pierart@zohomail.eu"
      >
        <i class="fa fa-envelope fa-lg"></i>
      </a>

      <a
        target="_blank"
        class="social linkedin"
        href="https://www.linkedin.com/in/valentinpierart"
      >
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
      <a
        target="_blank"
        class="social twitter"
        href="https://twitter.com/PierartValentin"
      >
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a
        target="_blank"
        class="social github"
        href="https://github.com/ValentinPierart"
      >
        <i class="fab fa-github-alt fa-lg"></i>
      </a>
    </div>
  </div>

  <presentation></presentation>
  <competences />
  <experience />
  <!-- <formation /> -->
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Experience from "./components/Experience.vue";
// import Formation from "./components/Formation.vue";
import Competences from "./components/Competences.vue";

export default {
  name: "App",
  components: {
    Presentation,
    Competences,
    Experience,
    // Formation,
  },
};
</script>

,
    Compétences<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  margin: 0;
  height: 100%;
  background: #f9f9f9;
}
.container {
  padding-top: 20px;
}

a.social {
  overflow: hidden;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  cursor: pointer;

  margin-right: 1px;
  border-radius: 50%;
  background-color: #ddd;
  color: #222;
  text-align: center;
  font-size: 0.7rem;
  border: 3px solid white;
  transition: background 0.3s, color 0.3s, border-color 0.3s linear;
}
</style>
