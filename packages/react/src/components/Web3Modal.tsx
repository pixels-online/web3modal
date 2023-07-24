import type { ConfigCtrlState, ThemeCtrlState } from '@pixels_xyz/core'
import { ClientCtrl, ConfigCtrl, OptionsCtrl, ThemeCtrl } from '@pixels_xyz/core'
import type { EthereumClient } from '@web3modal/ethereum'
import React, { memo, useCallback, useEffect } from 'react'
import { Modal } from './Modal'

/**
 * Props
 */
export type Web3ModalProps = ConfigCtrlState &
  ThemeCtrlState & {
    ethereumClient?: EthereumClient
  }

/**
 * Component
 */
function CreateWeb3Modal({ ethereumClient, ...config }: Web3ModalProps) {
  const onConfigure = useCallback(async () => {
    ThemeCtrl.setThemeConfig(config)
    if (ethereumClient) {
      ClientCtrl.setEthereumClient(ethereumClient)
    }
    ConfigCtrl.setConfig(config)
    await import('@pixels_xyz/ui')
    OptionsCtrl.setIsUiLoaded(true)
  }, [ethereumClient, config])

  useEffect(() => {
    onConfigure()
  }, [onConfigure])

  return <Modal />
}

export const Web3Modal = memo(CreateWeb3Modal)
