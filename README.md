# USDT to Polygon Amoy Testnet

This project is a simple USDT Amoy Testnet USDT for testnet integration samples.

# Usage Info
1. `SmartContract Address` in Amoy Testnet: `0x4C1A8ba03E7a57dEfDc70538a186dA30e2B22E3F`
2. `Owner/Launcher`: 0x13316D5889434d89ef4d8A8193a28f59400EC74a
3. `Amoy PolygonScan` launched contracts: https://amoy.polygonscan.com/address/0x13316D5889434d89ef4d8A8193a28f59400EC74a
4. Amoy Polygon Faucet Providers:
   1. https://tokentool.bitbond.com/
   2. https://www.alchemy.com/faucets/polygon-amoy
   3. 

# Development Helpers

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# Deployment Steps
1. Compile it: `npx hardhat compile`
2. Deploy to amoy: `npx hardhat run scripts/deploy.js --network amoy`

