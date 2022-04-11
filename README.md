# Wave Portal Project

### Test locally

1. do `npm install` to install the dependencies
2. run `npx hardhat run scripts/run.js`
3. local simulations on Solidity is found on the `scripts/run.js`

### Deploy to testnet

1. do `npm install`
2. get an API key from Alchemy
3. make sure you have an ETH wallet, this example uses `rinkeby testnet`
4. create a `.env` file and populate it with `URL` and `PRIVATE_KEY`
5. execute `npx hardhat run scripts/deploy.js --network rinkeby`
6. the smart contract address should be `WavePortal address`
7. you can check Etherscan for the other details
