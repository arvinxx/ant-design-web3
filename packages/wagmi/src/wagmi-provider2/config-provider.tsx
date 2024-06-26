import React from 'react';
import { metadata_MobileConnect } from '@ant-design/web3-assets';
import type {
  Account,
  Balance,
  Chain,
  ConnectOptions,
  Locale,
  Wallet,
} from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import {
  useAccount,
  useBalance,
  useChainId,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
} from 'wagmi';

export interface WagmiWeb3ConfigProviderProps2 {
  ens?: boolean;
  balance?: boolean;
  locale?: Locale;
}

export const WagmiWeb3ConfigProvider2: React.FC<
  React.PropsWithChildren<WagmiWeb3ConfigProviderProps2>
> = ({ children, ens = true, balance: enableBalance = false, locale }) => {
  const { address, isDisconnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined });

  const account = React.useMemo<Account | undefined>(() => {
    if (!address || isDisconnected) return undefined;
    return {
      address,
      name: ensName && ens ? ensName : undefined,
      avatar: ensAvatar ?? undefined,
    };
  }, [address, ens, ensAvatar, ensName, isDisconnected]);

  const connectedChainId = useChainId();
  const { switchChainAsync: wagmiSwitchChainAsync, chains } = useSwitchChain();
  const availableChains = chains.map<Chain>((current) => current); // TODO: merge with chainAssets

  const chain =
    availableChains.find((current) => current.id === connectedChainId) ?? availableChains?.[0];
  const chainId = chain?.id;

  const { data: balanceData } = useBalance({ address: enableBalance ? address : undefined });
  const balance: Balance | undefined = balanceData
    ? {
        symbol: balanceData?.symbol,
        value: balanceData?.value,
        decimals: balanceData?.decimals,
        icon: chain.nativeCurrency?.icon,
      }
    : undefined;

  const { connectors, connectAsync: wagmiConnectAsync } = useConnect();

  const walletConnectConnector = connectors.find((current) => current.id === 'walletConnect');
  const availableWallets = connectors.map<Wallet>((connector) => {
    const getQrCode = async () =>
      new Promise<{ uri: string }>((resolve) =>
        walletConnectConnector?.emitter.on('message', ({ type, data }) => {
          if (type === 'display_uri') resolve({ uri: data as string });
        }),
      );
    // For wallet-connect protocol
    if (connector === walletConnectConnector) {
      return {
        ...metadata_MobileConnect,
        key: walletConnectConnector?.uid,
        getWagmiConnector: () => walletConnectConnector,
        hasWalletReady: () => true,
        // hasExtensionInstalled: () => false,
        getQrCode: walletConnectConnector ? getQrCode : undefined,
      };
    }

    // For eip6963 standard wallets
    return {
      icon: connector?.icon,
      name: connector!.name,
      remark: `Wallet ${connector?.name} detected`,
      key: connector?.uid,
      hasWalletReady: () => !!connector.uid,
      hasExtensionInstalled: () => true,
      getQrCode: walletConnectConnector ? getQrCode : undefined,
    };
  });

  const connect = async (wallet?: Wallet, options?: ConnectOptions) => {
    const connector =
      options?.connectType === 'qrCode'
        ? walletConnectConnector
        : connectors.find((current) => current.uid === wallet?.key);

    if (!connector) {
      throw new Error(`Can not find connector for ${wallet?.name}`);
    }
    const { accounts } = await wagmiConnectAsync({ connector, chainId });
    const [connectedAddress] = accounts ?? [];
    return { address: connectedAddress, chainId };
  };

  const { disconnectAsync: wagmiDisconnectAsync } = useDisconnect();
  const disconnect = async () => wagmiDisconnectAsync();

  const switchChain = async (newChain: Chain) => {
    await wagmiSwitchChainAsync({ chainId: newChain.id });
  };

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      addressPrefix="0x"
      availableChains={availableChains}
      availableWallets={availableWallets}
      balance={balance}
      chain={chain}
      connect={connect}
      disconnect={disconnect}
      switchChain={switchChain}
    >
      {children}
    </Web3ConfigProvider>
  );
};
