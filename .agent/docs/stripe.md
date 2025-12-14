# Stripe Integration

## Setup

### 1. Stripe Account

1. Registriere bei [stripe.com](https://stripe.com)
2. Aktiviere Test-Modus
3. Kopiere API Keys

### 2. Installation

```bash
npm install stripe @stripe/stripe-js
```

### 3. Environment Variables

```bash
# .env.local
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Client erstellen

### Server-Client

```typescript
// lib/stripe/server.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20'
})
```

### Browser-Client

```typescript
// lib/stripe/client.ts
import { loadStripe } from '@stripe/stripe-js'

export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}
```

## Checkout Session

### Session erstellen (Server)

```typescript
// app/api/checkout/route.ts
import { stripe } from '@/lib/stripe/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { priceId } = await request.json()

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription', // oder 'payment'
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`
  })

  return NextResponse.json({ url: session.url })
}
```

### Checkout aufrufen (Client)

```typescript
async function handleCheckout(priceId: string) {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId })
  })

  const { url } = await response.json()
  window.location.href = url
}
```

## Webhooks

### Webhook Handler

```typescript
// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe/server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      // Subscription aktivieren
      break

    case 'customer.subscription.updated':
      const subscription = event.data.object
      // Subscription aktualisieren
      break

    case 'customer.subscription.deleted':
      // Subscription deaktivieren
      break
  }

  return NextResponse.json({ received: true })
}
```

### Lokales Testen

```bash
# Stripe CLI installieren und einloggen
stripe login

# Webhooks weiterleiten
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Customer Portal

### Portal Session erstellen

```typescript
// app/api/portal/route.ts
import { stripe } from '@/lib/stripe/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { customerId } = await request.json()

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`
  })

  return NextResponse.json({ url: session.url })
}
```

## Preise und Produkte

### Produkt erstellen

```typescript
const product = await stripe.products.create({
  name: 'Pro Plan',
  description: 'Alle Features inklusive'
})

const price = await stripe.prices.create({
  product: product.id,
  unit_amount: 1999, // 19.99 EUR in Cents
  currency: 'eur',
  recurring: { interval: 'month' }
})
```

## Haeufige Probleme

### Webhook Signature invalid

- Pruefe `STRIPE_WEBHOOK_SECRET`
- Im lokalen Dev: Nutze den Key von `stripe listen`

### Checkout Session 404

- Pruefe ob API Route korrekt ist
- Pruefe ob Stripe Keys korrekt sind

### Test-Karten

| Karte | Nummer |
|-------|--------|
| Erfolg | 4242 4242 4242 4242 |
| Ablehnung | 4000 0000 0000 0002 |
| 3D Secure | 4000 0025 0000 3155 |
