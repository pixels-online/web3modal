import type { W3mCoreButton } from '@pixels_xyz/ui'
import React from 'react'

/**
 * Component
 */
export function Web3Button(props: JSX.IntrinsicElements['w3m-core-button']) {
  return <w3m-core-button {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-core-button': Pick<W3mCoreButton, 'avatar' | 'balance' | 'icon' | 'label'>
    }
  }
}
