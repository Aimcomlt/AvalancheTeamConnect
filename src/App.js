const Web3 = require('web3');
//Inssert project here 
const NODE_URL = "https://speedy-nodes-nyc.moralis.io/20abf57c6d83958c9af98f64/avalanche/testnet";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3 = new Web3(provider);
console.log(web3)

function App() {
  return (
    <div>
      <h1>
      Dapp University Team-up starter kit...
      Avalanche 
      </h1>
    </div>
  );
}

export default App;
