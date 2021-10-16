<template>
  <div>
    <h1>Add Figment Holodeck-2 to Keplr</h1>
    <p>
      Sign up for a free
      <a href="https://datahub.figment.io/sign_up" target="_blank">DataHub</a>
      account, then paste your API key below and hit the Add button
    </p>
    <input v-model="apiKey" placeholder="DataHub API Key" size="32" />
    <br />
    <button @click="addNetwork()" :disabled="isDisabled">Add Holodeck-2</button>
  </div>
</template>

<script>
export default {
  name: "FigmentForm",
  props: {},
  data() {
    return {
      apiKey: "",
    };
  },
  computed: {
    isDisabled() {
      return this.apiKey.length != 32;
    },
  },
  methods: {
    addNetwork() {
      window.keplr.experimentalSuggestChain({
        chainId: "holodeck-2",
        chainName: "Figment Holodeck-2",
        rpc: `https://secret-holodeck-2--rpc--full.datahub.figment.io/apikey/${this.apikey}`,
        rest: `https://secret-holodeck-2--lcd--full.datahub.figment.io/apikey/${this.apikey}`,
        bip44: {
          coinType: 529,
        },
        coinType: 529,
        stakeCurrency: {
          coinDenom: "SCRT",
          coinMinimalDenom: "uscrt",
          coinDecimals: 6,
        },
        bech32Config: {
          bech32PrefixAccAddr: "secret",
          bech32PrefixAccPub: "secretpub",
          bech32PrefixValAddr: "secretvaloper",
          bech32PrefixValPub: "secretvaloperpub",
          bech32PrefixConsAddr: "secretvalcons",
          bech32PrefixConsPub: "secretvalconspub",
        },
        currencies: [
          {
            coinDenom: "SCRT",
            coinMinimalDenom: "uscrt",
            coinDecimals: 6,
          },
        ],
        feeCurrencies: [
          {
            coinDenom: "SCRT",
            coinMinimalDenom: "uscrt",
            coinDecimals: 6,
          },
        ],
        gasPriceStep: {
          low: 0.1,
          average: 0.25,
          high: 0.4,
        },
        features: ["secretwasm"],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>