import { loadStripe } from "@stripe/stripe-js"

let stripePromese;

const getStripe = () => {
  if(!stripePromese) {
    stripePromese = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }

  return stripePromese;
}

export default getStripe