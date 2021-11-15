<template>
  <div>
    <h1>Step 2: Add Supernova-2 to Keplr</h1>

    <ol class="guide">
      <li>Open and unlock Keplr.</li>

      <li>
        Click the add button below. If nothing happens it means that you already
        have a supernova-2 chain installed. Either use it, or follow the
        instructions in Step 1 to remove it.
      </li>

      <button class="button" @click="addNetwork()">Add Supernova-2</button>

      <li>Keplr will open an approval window. Read it, then click Approve</li>

      <img alt="Vue logo" src="../assets/keplrapprove.png" />

      <li>
        If no error appears then Supernova-2 was successfully added to Keplr.
      </li>
    </ol>

    <h1>Step 4: Switch from Mainnet to Supernova-2 in Keplr</h1>

    <ol class="guide">
      <li>
        Open and unlock Keplr, then click the name of the currently selected
        chain at the top
      </li>
      <img alt="Vue logo" src="../assets/chainname.png" />
      <li>
        Scroll to the bottom then click Labs Supernova-2 under Beta Support
      </li>
      <img alt="Vue logo" src="../assets/enigmasupernova2.png" />
      <li>
        Congrats! Keplr is now using the Secret Network Supernova-2 testnet
        chain via Enigma
      </li>
    </ol>

    <br />
  </div>
</template>

<script>
export default {
  name: "FigmentForm",
  props: {},
  data: function () {},
  computed: {},
  methods: {
    addNetwork() {
      window.keplr.experimentalSuggestChain({
        chainId: "supernova-2",
        chainName: "Labs Supernova-2",
        rpc: "http://node2.supernova.enigma.co:26657",
        rest: "http://node2.supernova.enigma.co:1317",
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
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>