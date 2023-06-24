import React from 'react'
import PageHeader from '../components/layout/PageHeader'
import CheckoutContent from '../components/checkout/CheckoutContent'

export default function Checkout() {
  return (
    <div>
      <PageHeader text='Checkout' />
      <CheckoutContent />
    </div>
  )
}
