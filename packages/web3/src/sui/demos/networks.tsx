import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider balance networkConfig={networkConfig} defaultNetwork="testnet">
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
