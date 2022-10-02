import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Wise',
  tokenName: 'Wise',
  tokenSymbol: 'HLF',
  hiddenMetadataUri: 'ipfs://QmTj8AqA7W2XTQPRyT2kyHb4yDmpmtUZhxEAy5uBoF4jnH/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.095,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xdadb594aecdd005822F24eF6a2AD92e6509D4e0B",
  marketplaceIdentifier: 'wise-v5',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
