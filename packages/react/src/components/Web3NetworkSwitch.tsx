import type { W3mNetworkSwitch } from '@pixels_xyz/ui'
import React from 'react'

/**
 * Component
 */
export function Web3NetworkSwitch(props: JSX.IntrinsicElements['w3m-network-switch']) {
  return <w3m-network-switch {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-network-switch': Partial<W3mNetworkSwitch>
    }
  }
}
