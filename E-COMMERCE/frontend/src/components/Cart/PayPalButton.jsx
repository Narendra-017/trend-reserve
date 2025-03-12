import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const clientID = import.meta.env.VITE_PAYPAL_CLIENT_ID

  if (!clientID) {
    console.error('PayPal Client ID is missing!')
    return <p>Error: PayPal is not configured.</p>
  }

  return (
    <PayPalScriptProvider options={{ 'client-id': clientID }}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: parseFloat(amount).toFixed(2) },
              },
            ],
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess)
        }}
        onError={(err) => {
          console.error('PayPal Error:', err)
          onError(err)
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PayPalButton
