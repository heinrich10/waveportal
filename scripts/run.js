const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  // console.log("Contract deployed by:", owner.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  )
  console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));

  let waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  // sending waves
  let waveTxn = await waveContract.wave("wave 1");
  await waveTxn.wait();
  contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  )
  console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));

  waveTxn = await waveContract.wave("wave 2");
  await waveTxn.wait();
  contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  )
  console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));

  // const [owner, randomPerson] = await hre.ethers.getSigners();
  // waveTxn = await waveContract.connect(randomPerson).wave("Another message");
  // await waveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
