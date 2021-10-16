<template>
  <div>
    <h1>Step 2: Get an API Key from Figment</h1>

    <ol class="guide">
      <li>
        If you don't have one sign up for a free
        <a href="https://datahub.figment.io/sign_up" target="_blank">DataHub</a>
        account.
      </li>
      <li>
        Login to DataHub and go to the
        <a href="https://datahub.figment.io/services/secret" target="_blank"
          >Secret Network</a
        >
        page
      </li>
      <li>Find your API key. it should be 32 characters long and click Copy</li>
      <img alt="Vue logo" src="../assets/apikeys.png" />
    </ol>

    <h1>Step 3: Add Holodeck-2 to Keplr</h1>

    <ol class="guide">
      <li>Paste your API key into this box...</li>

      <input v-model="apiKey" placeholder="DataHub API Key" size="32" />

      <li>
        Click the add button below. It will only enable when you have entered an
        API key
      </li>

      <button @click="addNetwork()" :disabled="isDisabled">
        Add Holodeck-2
      </button>

      <li>Keplr should open an approval window. Read it, then click Approve</li>

      <img alt="Vue logo" src="../assets/keplrapprove.png" />

      <li>
        If no error appears then Holodeck-2 was successfully added to Keplr.
      </li>
    </ol>

    <h1>Step 4: Switch from Mainnet to Holodeck-2 in Keplr</h1>

    <ol class="guide">
      <li>
        Open and unlock Keplr, then click the name of the currently selected
        chain at the top
      </li>
      <img alt="Vue logo" src="../assets/chainname.png" />
      <li>
        Scroll to the bottom then click Figment Holodeck-2 under Beta Support
      </li>
      <img alt="Vue logo" src="../assets/figmentholodeck.png" />
      <li>
        Congrats! Keplr is now using the Secret Network Holodeck-2 testnet chain
        via Figment
      </li>
    </ol>

    <br />
  </div>
</template>

<script>
export default {
  name: "FigmentForm",
  props: {},
  data: function () {
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
        rpc: `https://secret-holodeck-2--rpc--full.datahub.figment.io/apikey/${this.apiKey}`,
        rest: `https://secret-holodeck-2--lcd--full.datahub.figment.io/apikey/${this.apiKey}`,
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
</style>