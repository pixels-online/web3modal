/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-negated-condition */
/* eslint-disable capitalized-comments */
/* eslint-disable multiline-comment-style */
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@pixels_xyz/react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'

import WagmiWeb3ModalWidget from '../../components/WagmiWeb3ModalWidget'

import { getProjectId, getTheme } from '../../utilities/EnvUtil'

// Configure wagmi and web3modal
const projectId = getProjectId()
const chains = [mainnet, polygon]
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

// init wagmi config
const wagmiClient = createConfig({
  autoConnect: true,
  connectors: [...w3mConnectors({ projectId, chains })],
  publicClient
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

// const links = { native: '', universal: '' }

// Example
export default function WithWagmiReactThemedPage() {
  return (
    <>
      <WagmiConfig config={wagmiClient}>
        <WagmiWeb3ModalWidget />
      </WagmiConfig>

      <Web3Modal
        themeMode={getTheme()}
        themeVariables={{
          // colors
          '--w3m-accent-color': 'var(--pixel-purple)',
          '--w3m-accent-fill-color': '#000000',
          '--w3m-background-color': '#000000',

          // images
          '--w3m-background-image-url': '/assets/bg/space.png',
          '--w3m-logo-image-url': '/assets/logo/logo-purple.svg',

          // border related
          '--w3m-background-border-radius': '0px',
          '--w3m-container-border-radius': '0px',
          '--w3m-wallet-icon-border-radius': '0px',
          '--w3m-wallet-icon-large-border-radius': '0px',
          '--w3m-input-border-radius': '0px',
          '--w3m-button-border-radius': '0px',
          '--w3m-secondary-button-border-radius': '0px',
          '--w3m-notification-border-radius': '0px',
          '--w3m-icon-button-border-radius': '0px',
          '--w3m-button-hover-highlight-border-radius': '0px',

          // font family
          // '--w3m-font-family': 'Kemco pixel, sans-serif',
          '--w3m-font-family': 'Press Start, sans-serif',
          '--w3m-text-big-bold-font-family': 'Press Start, sans-serif',
          '--w3m-text-medium-regular-font-family': 'Press Start, sans-serif',
          '--w3m-text-small-regular-font-family': 'Press Start, sans-serif',
          '--w3m-text-small-thin-font-family': 'Press Start, sans-serif',
          '--w3m-text-xsmall-regular-font-family': 'Press Start, sans-serif',
          '--w3m-text-xsmall-bold-font-family': 'Press Start, sans-serif',

          // font size
          '--w3m-text-big-bold-size': '0.8rem',
          '--w3m-text-medium-regular-size': '0.65rem',
          '--w3m-text-small-regular-size': '0.55rem',
          '--w3m-text-small-thin-size': '0.65rem',
          '--w3m-text-xsmall-bold-size': '0.45rem',
          '--w3m-text-xsmall-regular-size': '0.45rem'
        }}
        ethereumClient={ethereumClient}
        projectId={projectId}
        supportedWallets={[
          'MetaMask',
          'Coinbase Wallet',
          'Trust Wallet',
          'Brave Wallet',
          'OKX Wallet'
        ]}
        explorerRecommendedWalletIds={'NONE'}
        hideDesktop={true}
      />
    </>
  )
}

// desktopWallets={[
//   { id: 'isMetaMask', name: 'Desktop Metamask', links },
//   { id: 'trustWallet', name: 'Desktop Trust Wallet', links },
//   { id: 'okxWallet', name: 'Desktop Okx Wallet', links }
// ]}

// mobileWallets={[
//   {
//     id: 'oreid',
//     name: 'OREID',
//     links: {
//       native: '',
//       universal: 'https://www.oreid.io/'
//     }
//   }
// ]}
// desktopWallets={[
//   {
//     id: 'oreid',
//     name: 'OREID',
//     links: {
//       native: '',
//       universal: 'https://www.oreid.io/'
//     }
//   }
// ]}
// tokenContracts={{
//   1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
//   137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
// }}
// tokenImages={{
//   UNI: 'https://images.ctfassets.net/v44fuld738we/3Dj6wy5JChiZYfx598gIAN/fedbab0cc0a1887abc18e9fd9c05f286/uniswap.png?w=384&h=384&q=90&fm=png&bg=transparent'
// }}

// explorerExcludedWalletIds={'ALL'}
