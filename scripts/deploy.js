const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const contractPath = path.resolve(__dirname, '../compiled/Car.json');
const { interface, bytecode } = require(contractPath);

const provider = new HDWalletProvider(
	'stadium engine differ describe drill impulse armor pretty manage rather upset dinosaur',
	'https://rinkeby.infura.io/LrI2j8QgSZXKxtgiOuzf '
);

const web3 = new Web3(provider);

(async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('部署合约的账户：', accounts[0]);
	console.time('contract-deploy');
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['AUDI'] })
		.send({ from: accounts[0], gas: '1000000' });
	console.timeEnd('contract-deploy');

	// console.log('合约部署成功：', result);
	console.log('合约部署成功：', result.options.address);
})();