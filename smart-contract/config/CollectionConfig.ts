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
  contractName: 'Chromium',
  tokenName: 'Chromium',
  tokenSymbol: 'CHR',
  hiddenMetadataUri: 'ipfs://QmTj8AqA7W2XTQPRyT2kyHb4yDmpmtUZhxEAy5uBoF4jnH/hidden.json',
  maxSupply: 2500,
  whitelistSale: {
    price: 0.004,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.004,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.004,
    maxMintAmountPerTx: 100,
  },
  contractAddress: "0xAb7c69d9770fdB34F851bc1eeFc819953D1Da246",
  marketplaceIdentifier: 'chromium',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
