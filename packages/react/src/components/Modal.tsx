import type { W3mModal } from '@pixels_xyz/ui'
import React from 'react'

/**
 * Component
 */
export function Modal(props: JSX.IntrinsicElements['w3m-modal']) {
  return <w3m-modal {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-modal': Partial<W3mModal>
    }
  }
}
