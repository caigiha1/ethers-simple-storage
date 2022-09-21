const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
  // compile them in our code
  // compile them
  // HTTP://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    'HTTP://172.25.32.1:7545'
  );

  const wallet = new ethers.Wallet(
    'e4f31fbdb51be49bc90ad22ef11f63529077c631692b70ca1b9707d6c7912096',
    provider
  );
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
  const binary = fs.readFileSync(
    './SimpleStorage_sol_SimpleStorage.bin',
    'utf8'
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log('Deploying, please wait...');

  const contract = await contractFactory.deploy(); // Stop here! wait for contract deploy

  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
