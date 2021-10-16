<template>
  <div class="content">
    <h1>Step 1: Check if Holodeck-2 has already been added</h1>
    <p>
      If you already have Holodeck-2 or Testnet configured in Keplr you will
      need to remove it first, or this tool will do nothing.
    </p>

    <ol class="guide">
      <li>
        Open and unlock Keplr, then click the name of the currently selected
        chain at the top
      </li>
      <img alt="Vue logo" src="./assets/chainname.png" />
      <li>
        Scroll to the bottom, and check Holodeck-2 or Testnet are not listed
        under Beta Support
      </li>
      <img alt="Vue logo" src="./assets/betasupport.png" />
      <li>If they are, click the X next to the chain name to remove it</li>
    </ol>

    <FigmentForm />
  </div>
</template>

<script>
import FigmentForm from "./components/FigmentForm.vue";

export default {
  name: "App",
  components: {
    FigmentForm,
  },
  data() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app .content {
  width: 800px;
  margin: 0 auto;
}

ol.guide li {
  padding: 1em 0;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
